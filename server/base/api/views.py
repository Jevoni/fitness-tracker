from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from base .models import Weight,Cardio,Supplement
from .serializers import WeightSerializer,CardioSerializer,SupplementSerializer
from base .forms import WeightForm,CardioForm,SupplementForm
from rest_framework import generics

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)

class createWeight(generics.ListCreateAPIView):
    queryset = Weight.objects.all()
    serializer_class = WeightSerializer
    pass


#weight views
# @api_view(['GET','POST'])
# def createWeight(request):
#     if request.method == 'POST':
#         print(request.POST)
#         workout = request.POST
#         serializer = WeightSerializer(workout,many=False)        
#         form = WeightForm(workout)
#         if form.is_valid():
#             form.save()
#             # serializer = WeightSerializer(workout,many=False)
#             print(serializer)
#             return Response(serializer.data)
#     return Response()

{"date":"02/20/2022","name":"squats","reps":10,"sets":3}