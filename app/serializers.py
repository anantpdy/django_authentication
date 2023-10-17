from rest_framework import serializers
from app.models import Usersignup, Userlogin



class UsersignupSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Usersignup
        fields = ['email', 'password', 'other_fields']  # Define the fields you want to include

        fields= "__all__"

#Employee serializers
class UserloginSerializer(serializers.HyperlinkedModelSerializer):
   
    class Meta:
        model= Userlogin
        fields= "__all__"
       