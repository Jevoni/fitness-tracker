from rest_framework .serializers import ModelSerializer
from base .models import Weight,Cardio,Supplement

class WeightSerializer(ModelSerializer):
    class Meta:
        model = Weight
        fields = ['date','name','reps','sets']

class CardioSerializer(ModelSerializer):
    class Meta:
        model = Cardio
        fields = ['date','name','duration']

class SupplementSerializer(ModelSerializer):
    class Meta:
        model = Supplement
        fields = ['date','name','dossage']

