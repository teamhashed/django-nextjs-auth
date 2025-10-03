# Django Next.js Authentication

A complete full-stack authentication implementation using Django REST Framework and Next.js with NextAuth.js. This project demonstrates a modern approach to building secure authentication systems with a Django backend API and a Next.js frontend.

## 🌟 Features

- **User Authentication**: Complete email-based authentication flow
- **Session Management**: Secure session handling with NextAuth.js
- **Token-based Auth**: Django REST Framework token authentication
- **User Registration**: New user registration with django-allauth
- **Protected Routes**: Middleware-protected routes in Next.js
- **CORS Configured**: Properly configured CORS for cross-origin requests
- **Modern UI**: Clean, responsive UI built with Tailwind CSS
- **Type Safety**: Full TypeScript support on the frontend

## 🛠️ Tech Stack

### Backend
- **Django** 4.2.6 - Python web framework
- **Django REST Framework** - RESTful API toolkit
- **dj-rest-auth** - Authentication REST APIs
- **django-allauth** - User registration and authentication
- **django-cors-headers** - CORS handling
- **SQLite** - Database (default, easily swappable)

### Frontend
- **Next.js** 14.0.0 - React framework
- **NextAuth.js** 4.24.4 - Authentication for Next.js
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Python** 3.8 or higher
- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **pip** - Python package manager

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/teamhashed/django-nextjs-auth.git
cd django-nextjs-auth
```

### 2. Backend Setup (Django)

#### Install Python Dependencies

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

#### Configure Environment Variables

Create a `.env` file in the `backend` directory:

# ⚠️ WARNING: Example values below are for local development only.
# DO NOT use these values in production! Replace all values with secure, production-appropriate settings.

```env
DEBUG=True
SECRET_KEY=CHANGE-ME-IN-PRODUCTION
HTTP_ROUTE=rest/
CORS_ALLOWED_HOSTS=CHANGE-ME-IN-PRODUCTION
```

**Important**: Generate a secure `SECRET_KEY` for production. You can generate one using:
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

#### Run Database Migrations

```bash
python manage.py migrate
```

#### Create a Superuser (Optional)

```bash
python manage.py createsuperuser
```

#### Start the Django Development Server

```bash
python manage.py runserver
```

The backend API will be available at `http://localhost:8000/rest/`

### 3. Frontend Setup (Next.js)

#### Install Node Dependencies

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
# or
yarn install
```

#### Configure Environment Variables

Create a `.env.local` file in the `frontend` directory:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-here
NEXTAUTH_BACKEND_URL=http://localhost:8000/rest/api/v1/
```

**Important**: Generate a secure `NEXTAUTH_SECRET`:
```bash
openssl rand -base64 32
```

#### Start the Next.js Development Server

```bash
npm run dev
# or
yarn dev
```

The frontend will be available at `http://localhost:3000`

## 📁 Project Structure

```
django-nextjs-auth/
├── backend/                    # Django backend
│   ├── creds/                 # Custom user authentication app
│   │   ├── api/              # API views and serializers
│   │   ├── models.py         # Custom User model
│   │   └── ...
│   ├── www/                   # Main Django project
│   │   ├── settings.py       # Django settings
│   │   ├── urls.py           # URL configuration
│   │   └── ...
│   ├── manage.py             # Django management script
│   └── requirements.txt      # Python dependencies
│
├── frontend/                  # Next.js frontend
│   ├── app/                  # Next.js app directory
│   │   ├── api/             # API routes
│   │   │   └── auth/        # NextAuth configuration
│   │   ├── page.tsx         # Home page
│   │   ├── layout.tsx       # Root layout
│   │   └── globals.css      # Global styles
│   ├── middleware.ts         # Next.js middleware for auth
│   ├── package.json          # Node dependencies
│   └── ...
│
├── .gitignore
├── LICENSE
└── README.md                  # This file
```

## 🔌 API Endpoints

The Django backend exposes the following API endpoints:

### Authentication Endpoints

- **POST** `/rest/api/v1/auth/login/` - User login
- **POST** `/rest/api/v1/auth/logout/` - User logout
- **POST** `/rest/api/v1/auth/register/` - User registration
- **GET** `/rest/api/v1/auth/user/` - Get current user details
- **POST** `/rest/api/v1/auth/password/change/` - Change password
- **POST** `/rest/api/v1/auth/password/reset/` - Request password reset
- **GET** `/rest/api/v1/auth/check-token/` - Validate authentication token

### Admin Panel

Access the Django admin panel at: `http://localhost:8000/rest/admin/`

## 🔐 Authentication Flow

1. **User Registration/Login**: User submits credentials through Next.js frontend
2. **API Request**: Frontend sends credentials to Django backend via NextAuth
3. **Token Generation**: Django validates credentials and returns an authentication token
4. **Session Creation**: NextAuth stores the token in a secure session
5. **Protected Routes**: Middleware checks authentication status before rendering pages
6. **API Calls**: Authenticated requests include the token in headers

## 🎨 Customization

### Customizing the User Model

The custom user model is defined in `backend/creds/models.py`. You can extend it with additional fields:

```python
class User(AbstractUser):
    email = models.EmailField(unique=True)
    # Add your custom fields here
    phone_number = models.CharField(max_length=15, blank=True)
    bio = models.TextField(blank=True)
```

Remember to create and run migrations after making changes:
```bash
python manage.py makemigrations
python manage.py migrate
```

### Styling

The frontend uses Tailwind CSS. Customize the theme in `frontend/tailwind.config.ts`.

## 🧪 Testing

### Backend Tests

```bash
cd backend
python manage.py test
```

### Frontend Tests

```bash
cd frontend
npm run test
# or
yarn test
```

## 🚢 Deployment

### Backend Deployment

1. Set `DEBUG=False` in your environment variables
2. Generate a strong `SECRET_KEY`
3. Configure your production database
4. Set up proper `ALLOWED_HOSTS`
5. Collect static files: `python manage.py collectstatic`
6. Use a production WSGI server like Gunicorn or uWSGI

### Frontend Deployment

The easiest way to deploy the Next.js frontend is using [Vercel](https://vercel.com):

```bash
cd frontend
npm run build
```

Alternatively, deploy to any platform that supports Node.js applications.

### Environment Variables for Production

Ensure all environment variables are properly set in your production environment:
- Update `NEXTAUTH_URL` to your production domain
- Set strong secrets for `SECRET_KEY` and `NEXTAUTH_SECRET`
- Configure `CORS_ALLOWED_HOSTS` with your frontend domain
- Update `NEXTAUTH_BACKEND_URL` to your backend API URL

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Django REST Framework documentation
- Next.js documentation
- NextAuth.js documentation
- django-allauth for authentication functionality

## 📧 Support

For questions or issues, please open an issue on the GitHub repository.

---

**Note**: This is a development setup. For production use, ensure you follow security best practices, use environment-specific configurations, and properly secure your secrets.
