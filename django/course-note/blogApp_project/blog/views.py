from multiprocessing import context
from django.contrib import messages
from django.shortcuts import render,redirect,HttpResponse
from .forms import BlogPostComment, BlogPostFrom
from .models import Post,Comment
from django.contrib.auth.decorators import login_required

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



@login_required()
def detail_post(request,id):
    post=Post.objects.get(id=id)
    user=request.user
    comments=Comment.objects.filter(blog=post)
    post.post_view_count+=1
    post.save()

    if 'comment_btn' in request.POST:
        
        form=BlogPostComment(request.POST)
        if form.is_valid():
            postcomment=form.save(commit=False)
            postcomment.blog=post
            postcomment.save()
            post.post_comment_count+=1
            post.post_view_count-=2
            post.save()
            messages.success(request,"yorum eklendi")
            
            return redirect(f'/post_detail/{id}')

    elif 'like_btn' in request.POST:
        post.post_like_count+=1
        post.post_view_count-=2
        post.save()
        messages.success(request,"favorı eklendi")
        return redirect(f'/post_detail/{id}')

    else:
        form=BlogPostComment()

    return render(request,'blog/post_detail.html',{'post': post,'user': user, 'form':form,'comments':comments})


   
def delete_post(request,id):
    post=Post.objects.get(id=id)

    if request.method=="POST":
        post.delete()
        return redirect("home")
    context ={
        "post":post

        }
        
    
    return render(request,"blog/post_delete.html",context)
