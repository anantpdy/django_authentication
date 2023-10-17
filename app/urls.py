from django.contrib import admin
from django.urls import include, path
from app.views import UsersignupViewSet, UserloginViewSet
from rest_framework import routers



router= routers.DefaultRouter()
router.register('Usersignup', UsersignupViewSet)
router.register('Userlogin', UserloginViewSet)
urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('', include(router.urls) )
    #path('', include(router.urls) )
]
