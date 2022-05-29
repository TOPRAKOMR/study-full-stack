
from django import forms
from .models import Student


class StudentFrom(forms.ModelForm):
    class Meta:
        model=Student
        fields ='__all__'
        labels={"first_name":"Adınız","last_name":"Soyadınız","number":"Numaranız"}
