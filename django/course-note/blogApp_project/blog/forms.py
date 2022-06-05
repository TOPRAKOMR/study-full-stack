from dataclasses import fields
from .models import Post,Comment
from django import forms

class BlogPostFrom(forms.ModelForm):
    class Meta:
        model=Post
        exclude=("author",)
        fields='__all__'

class BlogPostComment(forms.ModelForm):
    class Meta:
        model=Comment
        fields= ["comment_content"]