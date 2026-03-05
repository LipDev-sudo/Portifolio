from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Contato
from .serializers import ContatoSerializer


@api_view(['POST'])
def enviar_contato(request):
    serializer = ContatoSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"mensagem": "Contato enviado com sucesso"}, status=status.HTTP_201_CREATED)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)