from django.urls import path
from .views import enviar_contato

urlpatterns = [
    path('', enviar_contato),
]