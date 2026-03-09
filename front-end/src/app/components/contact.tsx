import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Preencha todos os campos");
      return;
    }

    try {

      const response = await fetch("https://portifolio-production-b8e0.up.railway.app/api/contato/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: formData.name,
          email: formData.email,
          mensagem: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar");
      }

      toast.success("Mensagem enviada com sucesso!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      toast.error("Erro ao enviar mensagem");
      console.error(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5581982845783?text=Olá%20vi%20seu%20portfólio%20e%20gostaria%20de%20um%20sistema",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/50">

      <div className="max-w-4xl mx-auto">

        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl">Contato</h2>
          <p className="text-lg text-muted-foreground">
            Tem um projeto em mente? Vamos conversar!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">

          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Entre em contato
            </CardTitle>

            <CardDescription>
              Preencha o formulário abaixo
            </CardDescription>

          </CardHeader>

          <CardContent>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="space-y-2">
                <Label>Nome</Label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                />
              </div>

              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label>Mensagem</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem"
                />
              </div>

              <Button type="submit" className="w-full gap-2">
                <Send className="w-4 h-4"/>
                Enviar
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full mt-3"
                onClick={openWhatsApp}
              >
                Falar no WhatsApp
              </Button>

            </form>

          </CardContent>

        </Card>

      </div>

    </section>
  );
}