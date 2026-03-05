from django.urls import path
from .views import lista_servicos

urlpatterns = [
    path('servicos/', lista_servicos),
]