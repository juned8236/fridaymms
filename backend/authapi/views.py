from django.shortcuts import render

# Create your views here.
def thanks(request):  
    return render(request, 'thanks.html', )

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


import time
