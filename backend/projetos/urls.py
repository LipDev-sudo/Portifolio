from django.urls import path
from .views import lista_projetos

urlpatterns = [
    path('', lista_projetos),
]