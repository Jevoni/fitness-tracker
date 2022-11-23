from rest_framework .serializers import ModelSerializer
from base .models import Weight,Cardio,Supplement

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

