from rest_framework import serializers
from .models import Message, NewsletterUser, Newsletter


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'


class NewsletterUserSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterUser
        fields = '__all__'


class NewsletterCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = '__all__'
