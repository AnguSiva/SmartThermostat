# Generated by Django 3.2.6 on 2021-08-07 05:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20210807_0452'),
    ]

    operations = [
        migrations.AddField(
            model_name='networksettings',
            name='mac_address',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
