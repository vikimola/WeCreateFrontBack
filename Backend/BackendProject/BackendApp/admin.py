from django.contrib import admin

from django.contrib import admin
from django.urls import include, path

from .models import Message, NewsletterUser, Newsletter

urlpatterns = [
    path("", include("BackendApp.urls")),
    path("admin/", admin.site.urls),
]


class NewsletterAdmin(admin.ModelAdmin):
    list_display = ('email', 'date_added',)


admin.site.register(Message)
admin.site.register(NewsletterUser, NewsletterAdmin)
admin.site.register(Newsletter)
