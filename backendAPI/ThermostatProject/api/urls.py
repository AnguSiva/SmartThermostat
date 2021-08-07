from django.urls import path, include
from rest_framework import routers
from api.views import SensorSettingsViewSet, NetworkSettingsViewSet, DashboardViewSet, SetPointViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'sensorsettings', SensorSettingsViewSet)
router.register(r'networksettings', NetworkSettingsViewSet)
router.register(r'dashboard', DashboardViewSet)
router.register(r'setpoint', SetPointViewSet)
router.register(r'users', UserViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
]

