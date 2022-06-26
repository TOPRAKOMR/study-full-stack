from django.db import models

# Create your models here.

class City(models.Model):
    name=models.CharField(max_length=111)
    
    def __str__(self):
        return  self.name
        
