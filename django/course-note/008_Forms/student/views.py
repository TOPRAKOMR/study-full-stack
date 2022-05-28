
from django.shortcuts import render,redirect
from .forms import StudentForm

# Create your views here.
def index(request):
    return render(request, 'student/index.html')

def student_page(request):
    # print(request.POST)


    form=StudentForm(request.POST or None)

    if form.is_valid():
        form.save()
        return redirect('index')
    context={
        'form':form

    }
    return render(request,'student/student.html',context)