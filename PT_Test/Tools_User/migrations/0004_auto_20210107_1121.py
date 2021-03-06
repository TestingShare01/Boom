# Generated by Django 3.1.1 on 2021-01-07 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Tools_User', '0003_auto_20210107_1103'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dev',
            name='create_time',
            field=models.DateField(auto_now_add=True, verbose_name='创建时间'),
        ),
        migrations.AlterField(
            model_name='dev',
            name='dev_status',
            field=models.CharField(max_length=32, verbose_name='所属端'),
        ),
        migrations.AlterField(
            model_name='dev',
            name='devname',
            field=models.CharField(max_length=200, verbose_name='设备名'),
        ),
        migrations.AlterField(
            model_name='dev',
            name='remark',
            field=models.CharField(max_length=500, verbose_name='备注'),
        ),
        migrations.AlterField(
            model_name='dev',
            name='serial',
            field=models.CharField(max_length=200, verbose_name='序列号'),
        ),
        migrations.AlterField(
            model_name='dev',
            name='size',
            field=models.CharField(max_length=32, verbose_name='分辨率'),
        ),
        migrations.AlterField(
            model_name='dev',
            name='status',
            field=models.CharField(max_length=32, verbose_name='设备状态'),
        ),
        migrations.AlterField(
            model_name='dev',
            name='username',
            field=models.CharField(max_length=100, verbose_name='所属者'),
        ),
        migrations.AlterField(
            model_name='dev',
            name='version',
            field=models.CharField(max_length=32, verbose_name='系统版本'),
        ),
    ]
