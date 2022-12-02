from django.forms import ModelForm
from .models import User,Weight,Cardio,Supplement
from django.contrib.auth.forms import UserCreationForm

class UserCreateForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['first_name','last_name','email','password1','password2']

class UserUpdateForm(ModelForm):
    class Meta:
        model = User
        fields = ['first_name','last_name','email']

class WeightForm(ModelForm):
    class Meta:
        model = Weight
        fields = ["date", "name", "reps", "sets"]

class CardioForm(ModelForm):
    class Meta:
        model = Cardio
        fields = ["date", "name", "duration"]

class SupplementForm(ModelForm):
    class Meta:
        model = Supplement
        fields = ["date", "name", "dossage"]