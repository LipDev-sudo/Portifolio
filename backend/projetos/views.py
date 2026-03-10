from rest_framework import generics
from .models import Projeto
from .serializers import ProjetoSerializer


class ListaProjetos(generics.ListAPIView):

    queryset = Projeto.objects.all()
    serializer_class = ProjetoSerializer