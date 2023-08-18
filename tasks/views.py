from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import login, logout
import re 
from tasks.models import CustomUser, Empresa
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from django.contrib.auth.decorators import login_required
# Create your views here.


def loginRegistro(request):
    if request.method == 'POST':
        if 'login--' in request.POST:
            #login
            username = request.POST['username']
            password = request.POST['password']
            try:
                user = CustomUser.objects.get(username=username)
                if user.check_password(password):
                    login(request, user)
                    #if user.is_superuser:
                    #    return redirect('admin/')
                    return redirect('Principal')
                else:
                    return render(request, 'login_logout.html', {'user_not_found': True})
            except CustomUser.DoesNotExist:
                return render(request, 'login_logout.html', {'user_not_found': True})
        elif 'registrarse--' in request.POST:
            #registro
            email = request.POST['email']
            rut_de_la_empresa = request.POST['rut_de_la_empresa']
            rut_del_empleado = request.POST['rut_del_empleado']
            if CustomUser.objects.filter(email=email).exists() or CustomUser.objects.filter(rut_del_empleado=rut_del_empleado).exists():
                return render(request, 'login_logout.html', {'usuario_ya_existente': True})
            elif (not Empresa.objects.filter(rut=rut_de_la_empresa).exists()) or (not bool(re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', request.POST['email']))):
                return render(request, 'login_logout.html', {'datos_invalidos': True})
            else:
                try:
                    #creo el mensaje
                    msg = MIMEMultipart()
                    msg['From'] = 'correo.confirmacion.pagina@gmail.com'
                    msg['To'] = email
                    msg['Subject'] = 'Confirmación de registro'
                    #creo el mensaje, el mensaje tiene que ser profesional y no muy largo, agrega el asunto y el cuerpo del mensaje 
                    message = 'Hola, ' + request.POST['first_name'] + ' ' + request.POST['last_name'] + ',\n\n' + 'Bienvenido a nuestra página web, tu usuario y contraseña se definiran y en cuanto se acepte te los compartiremos. Cualquier duda o consulta, puedes contactarnos a través de este mismo correo.\n\n' + 'Saludos cordiales,\n' + 'Atte. Administración de la página web.'
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
                    #creo el usuario
                    user = CustomUser.objects.create_user(username=email, 
                                                        password= 'Int3rn3t*2021',
                                                        email=email,
                                                        first_name=request.POST['first_name'],           
                                                        last_name=request.POST['last_name'],
                                                        rut_de_la_empresa=Empresa.objects.get(rut=rut_de_la_empresa),
                                                        rut_del_empleado=rut_del_empleado,
                                                        is_active=False,
                                                        )
                    login(request, user)
                except Exception as e:
                    print (e + 'error')
                    return render(request, 'login_logout.html', {'datos_invalidos': True})
                return redirect('Confirmacion')
        else:
            return HttpResponse('Error')
    return render(request, 'login_logout.html')

def confirmacion(request):
    return render(request, 'confirmacion.html')


def signout(request):
    try:
        logout(request)
        return redirect('Login/Signup')
    except:
        return HttpResponse('Error al cerrar sesión')

