from django.contrib import admin

# Register your models here.
from authapi.models import CustomUser

admin.site.register(CustomUser)