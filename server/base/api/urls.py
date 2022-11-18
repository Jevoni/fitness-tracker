from django.urls import path
from . import views
from . views import TokenObtainPairView

from rest_framework_simplejwt.views import (
    # MyTokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
