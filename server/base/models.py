from django.db import models

# need this import to inherit for our custom User model
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    # pass
    groups = None
    user_permissions = None
    username = models.CharField(max_length=40, unique=False, default='')


    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = []

class Weight(models.Model):

    user = models.ForeignKey(User,on_delete=models.CASCADE)
    date = models.DateField()
    name = models.CharField(max_length=200)
    reps = models.IntegerField()
    sets = models.IntegerField()

    class meta:
        ordering = ['date', '-name']
    
    def __str__(self):
        return self.name

class Cardio(models.Model):
    
    user = models.ForeignKey(User, on_delete= models.CASCADE)
    date = models.DateField()
    name = models.CharField(max_length=200)
    duration = models.DurationField()

    class meta:
        ordering = ['date', 'name']

    def __str__(self):
        return self.name

class Supplement(models.Model):

    user = models.ForeignKey(User, on_delete= models.CASCADE)
    date = models.DateField()
    name = models.CharField(max_length=200)
    dossage = models.IntegerField()

    class meta:
        ordering = ['date', 'name']

    def __str__(self):
        return self.name