import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Services(){

  const [services,setServices] = useState([]);

  useEffect(()=>{

    fetch("https://portifolio-production-b8e0.up.railway.app/api/servicos/")
    .then(res => res.json())
    .then(data => setServices(data))

  },[])

  return(

    <section className="py-20">

      <h2 className="text-4xl text-center mb-10">
        Serviços
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {services.map((service:any)=>(

          <Card key={service.id}>

            <CardHeader>

              <CardTitle>
                {service.titulo}
              </CardTitle>

            </CardHeader>

            <CardContent>

              <p>
                {service.descricao}
              </p>

              <p className="mt-4 font-bold text-lg">
                {service.preco}
              </p>

            </CardContent>

          </Card>

        ))}

      </div>

    </section>

  )

}