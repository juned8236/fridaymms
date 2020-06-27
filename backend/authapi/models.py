from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _

from .managers import CustomUserManager


class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()
    first_name=models.CharField(max_length=100)
    last_name=models.CharField(max_length=100)
    is_admin=models.CharField(max_length=100 ,blank=True, null=True)
    is_miner = models.CharField(max_length=100 ,blank=True, null=True)
    read_only = models.CharField(max_length=100,blank=True, null=True)    
    

    def __str__(self):
        return self.email



    # created_at = models.DateTimeField(blank=True, null=True, auto_now_add=True)