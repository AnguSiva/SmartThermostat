from django.contrib import admin
from .models import SensorSettings, NetworkSettings, Dashboard, SetPoint



@admin.register(Dashboard)
class DashboardAdmin(admin.ModelAdmin):
    list_display = ('dashboard_id','current_temperature','amb_temperature','fan_speed','location','status','last_update')

@admin.register(SetPoint)
class SetPointAdmin(admin.ModelAdmin):
    list_display = ('setpt_id','user_set_point','default_set_point')    

@admin.register(SensorSettings)
class SensorAdmin(admin.ModelAdmin):
    list_display = ('sen_id','room_temp_sen_id','ambient_type','sensor_id','api_key','api_url')

@admin.register(NetworkSettings)
class NetworkAdmin(admin.ModelAdmin):
    list_display = ('net_id','network','network_type','ip_address','net_mask','gate_way','dns_server','mac_address')    

# # Register your models here.


