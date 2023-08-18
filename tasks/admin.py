from django.contrib import admin
from .models import CustomUser
from .models import Empresa
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
# Register your models here.

@admin.register(CustomUser)
class CustomUserAdmin(admin.ModelAdmin):
    pass


@admin.register(Empresa)
class EmpresaAdmin(admin.ModelAdmin):
    pass

# quiero que una vez que se active el usuario se le envie un correo de confirmacion

user = get_user_model()

@receiver(post_save, sender=user)
def notificacion_de_usuario_activado(sender, instance, created, **kwargs):
    if created and instance.is_active:
        #creo el mensaje
        msg = MIMEMultipart()
        msg['From'] = 'correo.confirmacion.pagina@gmail.com'
        msg['To'] = instance.email
        msg['Subject'] = 'Confirmación de registro'
        #creo el mensaje, el mensaje tiene que ser profesional y no muy largo, agrega el asunto y el cuerpo del mensaje
        message = 'Hola, ' + instance.first_name + ' ' + instance.last_name + ',\n\n' + 'Tu usuario ha sido activado exitosamente' + '.\n\n' + 'Saludos cordiales,\n' + 'Atte. Administración de la página web.'
        #agrego el mensaje al correo
        msg.attach(MIMEText(message, 'plain'))
        #creo el servidor
        server = smtplib.SMTP('smtp.gmail.com: 587')
        server.starttls()
        #iniciar sesión
        server.login(msg['From'], 'eagmfrhitbkzwpzp')
        #enviar el mensaje
        server.sendmail(msg['From'], msg['To'], msg.as_string())
        server.quit()




