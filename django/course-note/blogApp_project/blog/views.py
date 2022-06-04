from multiprocessing import context
from django.contrib import messages
from django.shortcuts import render,redirect,HttpResponse
from .forms import BlogPostFrom, BlogPostFromDetail
from .models import Post

# Create your views here.
def home(request):
    posts=Post.objects.all()
    context={
        "posts":posts
    }


    return render(request, 'blog\post_list.html',context)


def create_post(request):
    form_post=BlogPostFrom()
    

    if request.method=='POST':
        form_post=BlogPostFrom(request.POST, request.FILES)
        if form_post.is_valid():
            blogpost=form_post.save(commit=False)
            blogpost.author=request.user
            blogpost.save()
            messages.success(request,"Post eklendi")
            return redirect('home')


    context={

        "form_blog_create":form_post
    }

    return render(request,"blog\post_create.html",context)

def update_post(request,id):
    post=Post.objects.get(id=id)
    form=BlogPostFrom(request.POST or None, request.FILES, instance=post)
    if form.is_valid():
        form.save()
        return redirect('home')
    context={
        "form":form
    }
    return render(request,'blog/post_update.html',context)

def detail_post(request,id):
    post=Post.objects.get(id=id)
    # form=BlogPostFromDetail(instance=post)
    
  

    return render(request,'blog/post_detail.html',{'post': post})


