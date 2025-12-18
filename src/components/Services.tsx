import { GraduationCap, Award, Shield, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: GraduationCap,
    title: "Obediencia Básica",
    description: "Fundamentos esenciales para una convivencia armoniosa. Tu perro aprenderá comandos básicos y buenos modales.",
    price: "$8,800",
    features: ["Sentado y echado", "Caminar con correa", "Respuesta al llamado", "Control de impulsos"],
    iconBg: "bg-brand-blue/10",
    iconColor: "text-brand-blue",
  },
  {
    icon: Award,
    title: "Obediencia Avanzada",
    description: "Llevamos el entrenamiento al siguiente nivel con comandos avanzados y mayor control en cualquier situación.",
    price: "$9,800",
    features: ["Obediencia sin correa", "Comandos a distancia", "Permanencia prolongada", "Socialización avanzada"],
    iconBg: "bg-brand-orange/10",
    iconColor: "text-brand-orange",
    popular: true,
  },
  {
    icon: Shield,
    title: "Guardia y Protección",
    description: "Entrenamiento especializado para perros de protección personal y familiar con técnicas profesionales.",
    price: "$28,000",
    features: ["Defensa controlada", "Detección de amenazas", "Obediencia bajo presión", "Certificación incluida"],
    iconBg: "bg-brand-green/10",
    iconColor: "text-brand-green",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Adiestramiento Canino Profesional
          </h2>
          <p className="text-lg text-muted-foreground">
            Programas de entrenamiento personalizados para cada etapa de la vida de tu perro. 
            Resultados garantizados con métodos humanos y positivos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`relative card-hover border-0 shadow-card overflow-hidden ${
                service.popular ? "ring-2 ring-secondary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                  Más Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-4`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-foreground">{service.price}</span>
                  <span className="text-muted-foreground ml-2">MXN</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://wa.me/526461243859?text=Hola,%20me%20interesa%20el%20servicio%20de%20" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    className={`w-full ${
                      service.popular 
                        ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground" 
                        : "bg-primary hover:bg-primary/90"
                    }`}
                  >
                    Solicitar Información
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
