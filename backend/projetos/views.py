from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Projeto
from .serializers import ProjetoSerializer


@api_view(['GET'])
def lista_projetos(request):

    projetos = Projeto.objects.all()
    serializer = ProjetoSerializer(projetos, many=True)

    return Response(serializer.data)