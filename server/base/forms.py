from django.forms import ModelForm
from .models import Weight,Cardio,Supplement

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