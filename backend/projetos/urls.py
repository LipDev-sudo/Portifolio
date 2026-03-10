from django.urls import path
from .views import ListaProjetos

urlpatterns = [
    path('', ListaProjetos.as_view(), name='lista_projetos'),
]