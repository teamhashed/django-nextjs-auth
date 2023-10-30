

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center align-middle h-screen'>
      <p className="text-2xl font-thin">Hello, user</p>
      <p className="mb-2">You are authenticated ✅</p>
      <a href="/api/auth/signout" className="bg-red-400 py-2 px-4 rounded-md text-white hover:shadow-lg hover:bg-red-500">Signout</a>
    </main>
  )
}
