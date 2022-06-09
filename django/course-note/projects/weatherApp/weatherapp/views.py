from django.shortcuts import render
from decouple import config
import requests
from pprint import pprint

def home(request):
    API_KEY=config('API_KEY')
    city='yozgat'
    url= f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"

    reponse=requests.get(url)
    content=reponse.json()

    context={
        'temp':content['main']['temp'],
        'city':content['name'],
        'desc':content['weather'][0]['description'],
        'icon':content['weather'][0]['icon'],

    }
    
    return render(request, "weatherapp/home.html",context)


