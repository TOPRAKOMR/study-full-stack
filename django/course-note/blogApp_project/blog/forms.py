from dataclasses import fields
from .models import Post
from django import forms

class BlogPostFrom(forms.ModelForm):
    class Meta:
        model=Post
        exclude=("author",)
        fields='__all__'

class BlogPostFromDetail(forms.ModelForm):
    class Meta:
        model=Post
        exclude=("author","post_image","post_status")
        