from django.urls import path
from .views import register, user_login, user_logout, user_profile


urlpatterns = [

    path('logout/',user_logout,name="logout"),
    path('register/',register,name="register"),
    path('login/',user_login,name="login"),
    path('profile/',user_profile,name="profile"),
    
    
    
]