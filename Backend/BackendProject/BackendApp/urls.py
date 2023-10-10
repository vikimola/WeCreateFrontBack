from django.urls import re_path

from . import views

urlpatterns = [
    re_path(r'^api/create_message/$', views.create_message, name='create_message'),
    re_path(r'^api/newsletter/subscribe/$', views.newsletter_subscribe, name='newsletter_subscribe'),
    re_path(r'^api/newsletter/unsubscribe/$', views.newsletter_unsubscribe, name='newsletter_unsubscribe'),
]
