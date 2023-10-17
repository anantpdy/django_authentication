from collections import UserList, UserString
from django.db import models


# Create your models here.
# signup model here
class Usersignup(models.Model):
    
    name= models.CharField(max_length= 20)
    email= models.CharField(max_length=70)
    password= models.CharField(max_length=10)


    def __str__(self):
        return self.name, self.password,self.email
    

# User login
class Userlogin(models.Model,):
    email= models.CharField(max_length=70)
    password= models.CharField(max_length=10)
    
    
    def __str__(self):
        return  self.email, self.password
    
