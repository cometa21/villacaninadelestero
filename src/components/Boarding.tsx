import { Shield, Heart, Sparkles, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import boardingImage from "@/assets/boarding.jpg";

const pricingTable = [
  { size: "Razas Chicas", description: "Hasta 10 kg", price: "$180", colorClass: "bg-brand-blue" },
  { size: "Razas Medianas", description: "10 - 25 kg", price: "$250", colorClass: "bg-brand-green" },
  { size: "Razas Grandes", description: "25 - 45 kg", price: "$320", colorClass: "bg-brand-orange" },
  { size: "Razas Gigantes", description: "Más de 45 kg", price: "$450", colorClass: "bg-brand-magenta" },
];

const features = [
  { icon: Shield, title: "Seguridad 24/7", description: "Monitoreo constante y áreas seguras" },
  { icon: Heart, title: "Cuidado Personalizado", description: "Atención individual para cada mascota" },
  { icon: Sparkles, title: "Limpieza Impecable", description: "Instalaciones higienizadas diariamente" },
  { icon: Clock, title: "Horarios Flexibles", description: "Recepción y entrega a tu conveniencia" },
];

const Boarding = () => {
  return (
    <section id="hospedaje" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Hospedaje Canino
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Un hogar temporal para tu mascota
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Cuando necesites viajar o ausentarte, tu mejor amigo estará en las mejores manos. 
              Ofrecemos un ambiente seguro, limpio y lleno de cariño.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={boardingImage}
                alt="Instalaciones de hospedaje canino"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Right - Pricing Table */}
          <div>
            <Card className="border-0 shadow-card overflow-hidden">
              <div className="bg-primary p-6">
                <h3 className="text-2xl font-bold text-primary-foreground">
                  Precios por Día
                </h3>
                <p className="text-primary-foreground/80">
                  Tarifas según el tamaño de tu mascota
                </p>
              </div>
              
              <CardContent className="p-0">
                <div className="divide-y divide-border">
                  {pricingTable.map((item, index) => (
                    <div
                      key={item.size}
                      className="flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-3 h-12 rounded-full ${item.colorClass}`} />
                        <div>
                          <h4 className="font-semibold text-foreground">{item.size}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-foreground">{item.price}</span>
                        <span className="text-muted-foreground text-sm ml-1">MXN</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 bg-muted/30">
                  <p className="text-sm text-muted-foreground mb-4">
                    * Los precios incluyen alimentación premium y paseos diarios. 
                    Descuentos especiales para estancias prolongadas.
                  </p>
                  <a
                    href="https://wa.me/526461243859?text=Hola,%20me%20interesa%20el%20hospedaje%20canino"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                      Reservar Hospedaje
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boarding;
