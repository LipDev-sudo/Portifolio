from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/servicos/', include('servicos.urls')),
    path('api/projetos/', include('projetos.urls')),
    path('api/contato/', include('contato.urls')),
]