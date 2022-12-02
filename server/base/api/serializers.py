from rest_framework .serializers import ModelSerializer
from base .models import User,Weight,Cardio,Supplement

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name','last_name','email','password1','password2']

class WeightSerializer(ModelSerializer):
    class Meta:
        model = Weight
        fields = "__all__"

class CardioSerializer(ModelSerializer):
    class Meta:
        model = Cardio
        fields = "__all__"

class SupplementSerializer(ModelSerializer):
    class Meta:
        model = Supplement
        fields = "__all__"

