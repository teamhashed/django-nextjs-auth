"""
URL configuration for www project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from creds.api.views import check_token
from django.conf import settings


api_routes = [
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/register/', include('dj_rest_auth.registration.urls')),
    path('auth/check-token/', check_token),
]

base_url = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(api_routes)),
    path('auth/', include('rest_framework.urls'))
]


urlpatterns = [
    path(settings.HTTP_ROUTE, include(base_url)),
]
