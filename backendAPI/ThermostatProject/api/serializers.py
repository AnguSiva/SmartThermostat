from django.db import models
from django.db.models import fields
from rest_framework import serializers
from api.models import SensorSettings, NetworkSettings, Dashboard, SetPoint
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

class DashboardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dashboard
        fields = ['dashboard_id','current_temperature','amb_temperature','fan_speed','location','status','last_update']

class SetPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = SetPoint
        fields = ['setpt_id','user_set_point','default_set_point']        


class SensorSetttingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorSettings
        fields = ['sen_id','room_temp_sen_id','ambient_type','sensor_id','api_key','api_url']

class NetworkSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = NetworkSettings 
        fields = ['net_id','network','network_type','ip_address','net_mask','gate_way','dns_server','mac_address']   


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','password']  

        extra_kwargs = {
            'password':{
            'write_only':True,
            'required':True
        }}      


    def create(self, validated_data):       
     user = User.objects.create_user(**validated_data)
     Token.objects.create(user = user) 
     return user
