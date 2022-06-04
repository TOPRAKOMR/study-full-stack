from gettext import install
from multiprocessing import context
from django.shortcuts import render,redirect,HttpResponse
from django.contrib.auth import logout,login,authenticate
from django.contrib.auth.forms import AuthenticationForm

from .forms import UserForm, UserProfileForm
from .models import UserProfile

from django.contrib import messages

# Create your views here.

def user_logout(request):
    messages.success(request, "Çıkış yaptınız..")
    logout(request)
    return redirect('home')

def register(request):
    form_user=UserForm()
    form_profile=UserProfileForm()

    if request.method=='POST':
        form_user=UserForm(request.POST)
        form_profile=UserProfileForm(request.POST, request.FILES)
        if form_user.is_valid() and form_profile.is_valid():
            user=form_user.save()
            profile=form_profile.save(commit=False)
            profile.user=user
            profile.save()

            login(request,user)
            messages.success(request, "Başarılı bir şekilde kayıt yaptınız ")
            return redirect('home')


    context={
        "form_user":form_user,
        "form_profile":form_profile,
    }
    return render(request, 'users/register.html',context)


def user_login(request):
    form=AuthenticationForm(request, data=request.POST)
    if form.is_valid():
        user=form.get_user()
        login(request,user)
        return redirect('home')
    return render(request,'users/login.html', {"form":form})


def user_profile(request):
    # user=UserProfile.objects.get(id=id)
    form1=UserForm(request.POST or None, instance=request.user)

    form2=UserProfileForm(request.POST or None, instance=request.user.userprofile,files=request.FILES)

    context={
    
        "form1":form1,
        "form2":form2,
      
    }
    return render(request, 'users/profile.html',context)





