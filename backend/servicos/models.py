from django.db import models

class Servico(models.Model):
    nome = models.CharField(max_length=200)
    descricao = models.TextField()
    preco = models.CharField(max_length=50)

    def __str__(self):
        return self.nome