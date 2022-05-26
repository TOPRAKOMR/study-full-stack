from django.urls import path
from .views import home, toprak

urlpatterns=[
    path("",home, name= "home"),
    path("toprak/",toprak,name="toprak")
]