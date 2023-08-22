from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'profile', views.ProfileViewSet)

urlpatterns = [
    path('profile_api/v1/', include (router.urls)),
]