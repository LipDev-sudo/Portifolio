from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse


def home(request):
    return HttpResponse("API do Portfólio funcionando")


urlpatterns = [
    path('', home),

    path('admin/', admin.site.urls),

    path('api/projetos/', include('projetos.urls')),
    path('api/servicos/', include('servicos.urls')),
    path('api/contato/', include('contato.urls')),
]