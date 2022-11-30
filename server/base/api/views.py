from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated

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
        '/api/weight',
        '/api/weight/<str:pk>',
        '/api/cardio',
        '/api/cardio/<str:pk>',
        '/api/supplement',
        '/api/supplement/<str:pk>'

    ]

    return Response(routes)

# class createWeight(generics.ListCreateAPIView):
#     queryset = Weight.objects.all()
#     serializer_class = WeightSerializer
#     pass


#weight views
@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def weight(request):
    user = request.user
    weights = user.weight_set.all()
    serializer = WeightSerializer(weights, many = True)
    if request.method == "POST":
        form = WeightForm(request.data)
        if form.is_valid():
            form.save()
        return Response(serializer.data)
    return Response(serializer.data)

@api_view(['PUT','DELETE'])
@permission_classes([IsAuthenticated])
def modifyWeight(request,pk):
    user = request.user
    weights = user.weight_set.all()
    serializer = WeightSerializer(instance = weights, data = request.data)
    if request.method == 'DELETE':
        weights.delete()
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

# @api_view(['DELETE'])
# def removeWeight(request,pk):
#     weights = Weight.objects.get(id=pk)
#     weights.delete()

@api_view(['GET','POST',])
@permission_classes([IsAuthenticated])
def cardio(request):
    user = request.user
    cardios = user.cardio_set.all()
    serializer = CardioSerializer(cardios, many = True)
    if request.method == "POST":
        print(request.data)
        form = CardioForm(request.data)
        if form.is_valid():
            form.save()
        return Response(serializer.data)
    return Response(serializer.data)

@api_view(['PUT','DELETE'])
@permission_classes([IsAuthenticated])
def modifyCardio(request,pk):
    user = request.user
    cardios = user.cardio_set.all()
    serializer = CardioSerializer(instance = cardios, data = request.data)
    if request.method == 'DELETE':
        cardios.delete()
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['GET','POST',])
@permission_classes([IsAuthenticated])
def supplement(request):
    user = request.user
    supplements = user.supplement_set.all()
    serializer = SupplementSerializer(supplements, many = True)
    if request.method == "POST":
        print(request.data)
        form = SupplementForm(request.data)
        if form.is_valid():
            form.save()
        return Response(serializer.data)
    return Response(serializer.data)

@api_view(['PUT','DELETE'])
@permission_classes([IsAuthenticated])
def modifySupplement(request,pk):
    user =request.user
    supplements = user.supplement_set.all()
    serializer = SupplementSerializer(instance = supplements, data = request.data)
    if request.method == 'DELETE':
        supplements.delete()
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


    

{"date":"02/20/2022","name":"squats","reps":10,"sets":3}
