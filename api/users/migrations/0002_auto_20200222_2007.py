# Generated by Django 3.0.3 on 2020-02-22 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='business_address',
            field=models.CharField(blank=True, default=None, max_length=1024, null=True, verbose_name='Business Address'),
        ),
        migrations.AddField(
            model_name='user',
            name='business_name',
            field=models.CharField(blank=True, default=None, max_length=255, null=True, verbose_name='Business Name'),
        ),
        migrations.AddField(
            model_name='user',
            name='gst_number',
            field=models.CharField(blank=True, default=None, max_length=20, null=True, verbose_name='GST Number'),
        ),
        migrations.AddField(
            model_name='user',
            name='sales_history',
            field=models.FileField(blank=True, default=None, null=True, upload_to='', verbose_name='Sales History'),
        ),
    ]
