from django.db import models

class Contato(models.Model):

    nome = models.CharField(max_length=200)
    email = models.EmailField()
    mensagem = models.TextField()
    data = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome