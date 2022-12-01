from django.urls import path 
from .import views
from .views import MyTokenObtainPairView



from rest_framework_simplejwt.views import (
    TokenRefreshView,
    )

urlpatterns = [
    path('',views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('register/',views.registerPage),
    path('weight/',views.weight),
    path('weight/<str:pk>/',views.modifyWeight),

    path('cardio/',views.cardio),
    path('cardio/<str:pk>/',views.modifyCardio),

    path('supplement/',views.supplement),
    path('supplement/<str:pk>/',views.modifySupplement),
    
]