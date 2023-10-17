from django.contrib import admin

# Register your models here.
from django.contrib import admin
from app.models import Usersignup,Userlogin

# Register your models here.
class UsersignupAdmin(admin.ModelAdmin):
    list_display=('name','email', )

class UserloginAdmin(admin.ModelAdmin):
    list_display=('email', 'password',)


admin .site.register(Usersignup,UsersignupAdmin)
admin.site.register(Userlogin,UserloginAdmin)