from django.db import models

# Create your models here.

class Dashboard(models.Model):
    dashboard_id = models.AutoField(primary_key=True)
    current_temperature = models.CharField(max_length=100)
    amb_temperature = models.CharField(max_length=100)
    fan_speed = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    last_update = models.DateTimeField()


class SetPoint(models.Model):
    setpt_id = models.AutoField(primary_key=True)
    user_set_point = models.CharField(max_length=100)
    default_set_point = models.CharField(max_length=100)


class SensorSettings(models.Model):
    sen_id = models.AutoField(primary_key=True)
    room_temp_sen_id = models.CharField(max_length=100)
    ambient_type = models.CharField(max_length=100)
    sensor_id = models.CharField(max_length=100)
    api_key = models.CharField(max_length=100)
    api_url = models.CharField(max_length=100)

    

class NetworkSettings(models.Model):
    net_id = models.AutoField(primary_key=True)
    network = models.CharField(max_length=100)
    network_type = models.CharField(max_length=100)
    ip_address = models.CharField(max_length=100)
    mac_address = models.CharField(max_length=100)
    net_mask = models.CharField(max_length=100)
    gate_way = models.CharField(max_length=100)
    dns_server = models.CharField(max_length=100)        

   