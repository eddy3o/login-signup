from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models


class Empresa(models.Model):
    nombre = models.CharField(max_length=100)
    rut = models.CharField(max_length=20, unique=True)
    def __str__(self):
        return self.rut

class CustomUser(AbstractUser):
    rut_de_la_empresa = models.ForeignKey(Empresa, on_delete=models.PROTECT, null=True, blank=True)
    rut_del_empleado = models.CharField(max_length=100, null=True, blank=True, unique = True)



