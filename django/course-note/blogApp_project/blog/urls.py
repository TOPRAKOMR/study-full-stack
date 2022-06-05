from turtle import home
from django.urls import path
from .views import create_post, detail_post, home, update_post,delete_post

urlpatterns = [
    
    path('',home,name='home'),
    path('post_create/',create_post,name='create_post'),
    path('post_update/<int:id>',update_post,name='update_post'),
    path('post_detail/<int:id>',detail_post,name='detail_post'),
    path('post_delete/<int:id>',delete_post,name='delete_post'),
    
]