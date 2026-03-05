from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Servico
from .serializers import ServicoSerializer


@api_view(['GET'])
def lista_servicos(request):

    servicos = Servico.objects.all()
    serializer = ServicoSerializer(servicos, many=True)

    return Response(serializer.data)