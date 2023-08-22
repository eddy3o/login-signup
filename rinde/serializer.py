from rest_framework import serializers

from tasks.models import CustomUser, Empresa

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password', 'first_name', 'last_name', 'empresa', 'is_superuser', 'last_login', 'date_joined') 
