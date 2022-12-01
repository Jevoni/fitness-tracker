from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from base .models import User,Weight,Cardio,Supplement
from .serializers import WeightSerializer,CardioSerializer,SupplementSerializer
from base .forms import UserCreateForm,WeightForm,CardioForm,SupplementForm

from django.contrib import messages

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


#user view

@api_view(['POST'])
def registerPage(request):
    if request.method == "POST":
        form = UserCreateForm(request.data)
        print(form.is_valid())
        if form.is_valid():
            user = form.save(commit=False)
            user.email = user.email.lower()
            user.save()
            # MyTokenObtainPairSerializer.get_token(user)
        else:
            messages.error(request, 'an error occured during sign up')
        return Response()


#weight views

@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def weight(request):
    user = request.user
    weights = user.weight_set.all().order_by('date')
    serializer = WeightSerializer(weights, many = True)
    if request.method == "POST":
        form = WeightForm(request.data)
        if form.is_valid():
            weighto = form.save(commit=False)
            weighto.user = request.user
            weighto.save()
        return Response(serializer.data)
    return Response(serializer.data)

@api_view(['PUT','DELETE'])
@permission_classes([IsAuthenticated])
def modifyWeight(request,pk):
    user = request.user
    weights = user.weight_set.get(id =pk)
    serializer = WeightSerializer(instance = weights, data = request.data)
    if request.method == 'DELETE':
        weights.delete()
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



#cardio views

@api_view(['GET','POST',])
@permission_classes([IsAuthenticated])
def cardio(request):
    user = request.user
    cardios = user.cardio_set.all().order_by('date')
    serializer = CardioSerializer(cardios, many = True)
    if request.method == "POST":
        print(request.data)
        form = CardioForm(request.data)
        if form.is_valid():
            cardioo = form.save(commit=False)
            cardioo.user = request.user
            cardioo.save()
        return Response(serializer.data)
    return Response(serializer.data)

@api_view(['PUT','DELETE'])
@permission_classes([IsAuthenticated])
def modifyCardio(request,pk):
    user = request.user
    cardios = user.cardio_set.get(id =pk)
    serializer = CardioSerializer(instance = cardios, data = request.data)
    if request.method == 'DELETE':
        cardios.delete()
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



#supplement views

@api_view(['GET','POST',])
@permission_classes([IsAuthenticated])
def supplement(request):
    user = request.user
    supplements = user.supplement_set.all().order_by('date')
    serializer = SupplementSerializer(supplements, many = True)
    if request.method == "POST":
        print(request.data)
        form = SupplementForm(request.data)
        if form.is_valid():
            supplemento = form.save(commit=False)
            supplemento.user = request.user
            supplemento.save()
        return Response(serializer.data)
    return Response(serializer.data)

@api_view(['PUT','DELETE'])
@permission_classes([IsAuthenticated])
def modifySupplement(request,pk):
    user =request.user
    supplements = user.supplement_set.get(id =pk)
    serializer = SupplementSerializer(instance = supplements, data = request.data)
    if request.method == 'DELETE':
        supplements.delete()
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


