from django.core.mail import EmailMultiAlternatives, send_mail
from django.http import HttpResponse
from django.template.loader import get_template
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib import messages

from django.conf import settings
from .models import NewsletterUser
from .serializers import MessageSerializer, NewsletterUserSignUpSerializer



# Create your views here.
@api_view(['POST', 'GET'])
def create_message(request):
    if request.method == 'POST':
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            name = request.data.get('name',)
            phone = request.data.get('phone')
            email = request.data.get('email')
            message = request.data.get('message')
            subject = "WeCreate - Contact Form"
            content = f"Name: {name} \n" \
                      f"Phone: {phone}\n" \
                      f"Email: {email}\n" \
                      f"Message: {message}"
            from_mail = settings.EMAIL_HOST_USER
            recipient_list = ['wecreate.designs.srl@gmail.com']
            send_mail(subject, content, from_mail, recipient_list, fail_silently=False)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    else:
        return HttpResponse("Yo")


@api_view(['POST', 'GET'])
def newsletter_subscribe(request):
    if request.method == 'POST':
        serializer = NewsletterUserSignUpSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            if not NewsletterUser.objects.filter(email=email).exists():
                serializer.save()

                subject = "Bine ai venit la WeCreate!"
                from_email = 'wecreate.designs.srl@hotmail.com'
                # from_email = settings.EMAIL_HOST_USER
                recipient_list = [email]

                subscribe_message = get_template('subscribe_email.txt').render()
                html_template = get_template('subscribe_email.html').render()

                message = EmailMultiAlternatives(subject=subject, body=subscribe_message, from_email=from_email,
                                                 to=recipient_list)
                message.attach_alternative(html_template, "text/html")
                message.send()
            else:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    else:
        return HttpResponse("Yo")


@api_view(['POST', 'GET'])
def newsletter_unsubscribe(request):
    if request.method == 'POST':
        serializer = NewsletterUserSignUpSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            print(email)
            if NewsletterUser.objects.filter(email=email).exists():
                serializer.save()
                NewsletterUser.objects.filter(email=email).delete()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                print('Email NOT exists')
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return HttpResponse("Yo")
