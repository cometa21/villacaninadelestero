import { Heart, Shield, FileCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import puppiesImage from "@/assets/puppies.jpg";

const benefits = [
  {
    icon: Heart,
    title: "Crianza Responsable",
    description: "Nuestros cachorros crecen en un ambiente familiar, socializados desde temprana edad.",
  },
  {
    icon: Shield,
    title: "Salud Garantizada",
    description: "Todos los cachorros cuentan con sus vacunas y desparasitaciones al día.",
  },
  {
    icon: FileCheck,
    title: "Documentación Completa",
    description: "Entregamos cartilla de vacunación y certificado de salud veterinario.",
  },
];

const Puppies = () => {
  return (
    <section id="cachorros" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand-magenta/10 text-brand-magenta rounded-full text-sm font-semibold mb-4">
            Cachorros de Compañía
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Encuentra a tu nuevo mejor amigo
          </h2>
          <p className="text-lg text-muted-foreground">
            Criamos cachorros sanos y felices, listos para ser parte de tu familia. 
            Cada uno recibe amor y los mejores cuidados desde su nacimiento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={puppiesImage}
                alt="Cachorros disponibles"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl shadow-lg animate-float">
              <span className="font-bold">Cachorros Disponibles</span>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Bienestar Animal es Nuestra Prioridad
            </h3>
            <p className="text-muted-foreground mb-8">
              En Villa Canina del Estero, cada cachorro es criado con dedicación y amor. 
              Nos aseguramos de que estén completamente socializados y listos para adaptarse 
              a su nuevo hogar.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Card className="border-0 bg-primary/5 p-6">
              <CardContent className="p-0">
                <p className="text-foreground font-medium mb-4">
                  ¿Interesado en adoptar un cachorro? Contáctanos para conocer la disponibilidad 
                  y programar una visita.
                </p>
                <a
                  href="https://wa.me/526461243859?text=Hola,%20me%20interesa%20información%20sobre%20cachorros%20disponibles"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-brand-magenta hover:bg-brand-magenta/90 text-secondary-foreground font-semibold">
                    Consultar Disponibilidad
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Puppies;
