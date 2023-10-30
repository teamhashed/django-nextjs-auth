import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "name@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                try {
                    const response = await axios({
                        url: process.env.NEXTAUTH_BACKEND_URL + "auth/login/",
                        method: "post",
                        data: credentials,
                        headers: { "Content-Type": "application/json" }
                    });
                    const data = response.data;
                    if (data) return data;
                } catch (error) {
                    console.log(error);
                }
                return null;
            },

        }),
    ],
    callbacks: {
        async jwt({token, user}: {token: any, user: any}) {
            // console.log("jwt running! ");
            if (user) {
                token.user = user;
            }
            // console.log("jwt user --> ", user);
            // console.log("jwt token --> ", token);
            return token;
        },
        async session({session, token}: {session: any, token: any}) {
            // console.log("session token --> ", token);
            // console.log("session session --> ", session);
            if (token) {
                session.user.name = token.user.user.username;
                session.user.fullName = token.user.user.first_name + " " + token.user.user.last_name;
                session.user.email = token.user.user.email;
                session.user.groups = token.user.user.groups;
                session.key = token.user.key;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler =  NextAuth(authOptions);

export { handler as GET, handler as POST }