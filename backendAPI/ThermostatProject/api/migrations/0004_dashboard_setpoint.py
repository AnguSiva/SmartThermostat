# Generated by Django 3.2.6 on 2021-08-06 06:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210806_0557'),
    ]

    operations = [
        migrations.CreateModel(
            name='Dashboard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('current_temperature', models.CharField(max_length=100)),
                ('amb_temperature', models.CharField(max_length=100)),
                ('fan_speed', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=100)),
                ('last_update', models.DateTimeField()),
            ],
        ),
        migrations.CreateModel(
            name='SetPoint',
            fields=[
                ('setpt_id', models.AutoField(primary_key=True, serialize=False)),
                ('user_set_point', models.CharField(max_length=100)),
                ('default_set_point', models.CharField(max_length=100)),
            ],
        ),
    ]
