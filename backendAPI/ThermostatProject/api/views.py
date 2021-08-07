from rest_framework import viewsets
from api.serializers import SensorSetttingsSerializer, NetworkSettingsSerializer, DashboardSerializer, SetPointSerializer, UserSerializer
from api.models import Dashboard, SensorSettings, NetworkSettings, SetPoint
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

class DashboardViewSet(viewsets.ModelViewSet):
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer  
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )  

class SetPointViewSet(viewsets.ModelViewSet):
    queryset = SetPoint.objects.all()
    serializer_class = SetPointSerializer    
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )


class SensorSettingsViewSet(viewsets.ModelViewSet):
    queryset = SensorSettings.objects.all()
    serializer_class = SensorSetttingsSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )

class NetworkSettingsViewSet(viewsets.ModelViewSet):
    queryset = NetworkSettings.objects.all()
    serializer_class = NetworkSettingsSerializer    
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication, )

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer   
 

