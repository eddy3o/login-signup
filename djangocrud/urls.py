"""
URL configuration for djangocrud project.

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
from django.urls import path, re_path
from tasks import views as tasks_views 
from rinde import views as rinde_views
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', tasks_views.loginRegistro, name='Login/Signup'),
    path('signup/', tasks_views.loginRegistro, name='Sign Up'),
    path('login/', tasks_views.loginRegistro, name='Log In'),
    path('salir/', tasks_views.signout, name='Salir'),
    path('confirmacion/', tasks_views.confirmacion, name='Confirmacion'),
    
    path('principal/', TemplateView.as_view(template_name='index.html'), name='Principal'),
] 
 