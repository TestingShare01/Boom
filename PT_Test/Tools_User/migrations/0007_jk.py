# Generated by Django 3.1.1 on 2021-01-26 04:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Tools_User', '0006_tags'),
    ]

    operations = [
        migrations.CreateModel(
            name='Jk',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200, verbose_name='接口名称')),
                ('url', models.CharField(max_length=300, verbose_name='url')),
                ('method', models.CharField(max_length=100, verbose_name='请求方法')),
                ('head', models.CharField(max_length=1000, verbose_name='请求头')),
                ('tag', models.CharField(max_length=300, verbose_name='标签')),
                ('canshu', models.CharField(max_length=1000, verbose_name='参数')),
            ],
            options={
                'db_table': 'Jk',
            },
        ),
    ]
