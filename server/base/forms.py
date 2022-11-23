from django.forms import ModelForm
from .models import Weight,Cardio,Supplement

class WeightForm(ModelForm):
    class Meta:
        model = Weight
        fields = "__all__"

class CardioForm(ModelForm):
    class Meta:
        model = Cardio
        fields = "__all__"

class SupplementForm(ModelForm):
    class Meta:
        model = Supplement
        fields = "__all__"