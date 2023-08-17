from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import login, logout
import re 
from tasks.models import CustomUser, Empresa
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from django.contrib.auth.decorators import login_required

@login_required(login_url='/login/')
def principal(request):
    return render(request, 'index.html')