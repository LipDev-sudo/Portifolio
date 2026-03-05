from django.urls import path
from .views import lista_projetos

urlpatterns = [
    path('projetos/', lista_projetos),
]