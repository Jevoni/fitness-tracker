from django.db import models

#need this import to inherit for our custom User model
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    name = models.CharField(max_length=200, null= True)
    email = models.EmailField(unique = True)

    USERNAME_FIELD = 'email'
    
    REQUIRED_FIELDS = [ ]

    