from email.policy import default
from django.db import models
from users.models import User

# Create your models here.

class Post(models.Model):
    author=models.ForeignKey(User,on_delete=models.CASCADE, null=True,blank=True)
    post_title=models.CharField(max_length=200,)
    post_content=models.TextField()
    post_image=models.ImageField(upload_to="blog_pic",blank=True,default='media/profile_pic/2.jpg')
    post_comment_count=models.IntegerField(default=0)
    post_push_date=models.DateTimeField(auto_now=True)
    post_last_updated=models.DateTimeField(auto_now=True)
    post_view_count=models.IntegerField(default=0)
    post_like_count=models.IntegerField(default=0)

    status={
        (0,"Draft"),
        (1,"Publish")
    }
    post_status=models.IntegerField(choices=status, default=0)

    def __str__(self):
        return f"{self.post_title} {self.author}"

class Comment(models.Model):
    blog=models.ForeignKey(Post,on_delete=models.CASCADE,null=True,blank=True)
    comment_time_stamp=models.DateTimeField(auto_now=True)
    comment_content=models.TextField()
    

    def __str__(self):
        return f"{self.comment_content}"
