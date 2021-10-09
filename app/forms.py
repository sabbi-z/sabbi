from django import forms
from django.db.models import fields
from django.forms import widgets
from app.models import Massage

class MassageForm(forms.ModelForm):
    class Meta:
        model = Massage
        fields = '__all__'

        widgets = {
            'email':forms.TextInput(attrs={'class':'emailinput'}),
            'Massage':forms.Textarea(attrs={'class':'emailinput'})
        }