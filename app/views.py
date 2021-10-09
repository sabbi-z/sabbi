from django.shortcuts import render
from app.forms import MassageForm
# Create your views here.
def base(request):

    form = MassageForm(data=request.POST)
    if form.is_valid():
        form.save()

    return render(request , 'form.html' , {'user_form':form} )