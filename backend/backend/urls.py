from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

from django.conf import settings
from django.conf.urls.static import static


def home(request):
    return HttpResponse("API do Portfólio funcionando")


urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/projetos/', include('projetos.urls')),
    path('api/servicos/', include('servicos.urls')),
    path('api/contato/', include('contato.urls')),
]

# servir arquivos de mídia (imagens)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)