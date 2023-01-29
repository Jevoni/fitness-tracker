from rest_framework .serializers import ModelSerializer
from base .models import User,Weight,Cardio,Supplement

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name','last_name','email']

class WeightSerializer(ModelSerializer):
    class Meta:
        model = Weight
        fields = ['date','name','reps','sets', 'id']

class CardioSerializer(ModelSerializer):
    class Meta:
        model = Cardio
        fields = ['date', 'name', 'duration', 'id']

class SupplementSerializer(ModelSerializer):
    class Meta:
        model = Supplement
        fields = ['date', 'name', 'dossage', 'id']

