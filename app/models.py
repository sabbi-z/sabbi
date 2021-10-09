from django.db import models
from django.db.models.base import Model

# Create your models here.
class Massage(models.Model):
    email = models.EmailField(blank=True  )
    Massage = models.TextField(blank=True , max_length=264 )