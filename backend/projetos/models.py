from django.db import models
from cloudinary.models import CloudinaryField

class Projeto(models.Model):

    titulo = models.CharField(max_length=200)
    descricao = models.TextField()
    tecnologias = models.CharField(max_length=200)
    link_projeto = models.URLField()

    imagem = CloudinaryField('imagem')

    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo