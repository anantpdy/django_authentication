# Generated by Django 4.2.5 on 2023-10-13 06:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Userlogin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=70)),
                ('pasword', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='Usersignup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=70)),
                ('password', models.CharField(max_length=10)),
            ],
        ),
    ]
