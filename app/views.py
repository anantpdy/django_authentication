from collections import UserDict, UserList
from contextvars import Token


import statistics
from django.http import  HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import  login
from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import render, redirect

from django.shortcuts import render
from httplib2 import Response
from requests import request
from rest_framework import viewsets
from app.models import Usersignup, Userlogin
from app.serializers import UsersignupSerializer, UserloginSerializer
from django.contrib.auth.models import User

class UsersignupViewSet(viewsets.ModelViewSet):
  queryset= Usersignup.objects.all()
  serializer_class= UsersignupSerializer

class UserloginViewSet(viewsets.ModelViewSet):
    queryset = Userlogin.objects.all()
    serializer_class = UserloginSerializer

    def create(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        # You should check if the user with the given credentials exists and is active.
        user = Userlogin.objects.filter(email=email,).first()

        if user is not None and user.check_password(password):
            # The user is authenticated, so you can log them in.
            login(request, user)
            return HttpResponseRedirect('/success/')
        else:
            # Redirect to a signup page or return an error response.
            return HttpResponseRedirect('app/v1/Usersignup/')

    def list(self, request):
        # This is for the GET request to list users; you can customize it as needed.
        return super().list(request)
    
def user_logout(request):
    if request.method == 'POST':
        try:
            # Delete the user's token to logout
            request.user.auth_token.delete()
            return Response({'message': 'Successfully logged out.'}, )
        except Exception as e:
            return Response({'error': str(e)}, status=statistics.HTTP_500_INTERNAL_SERVER_ERROR)




  

  