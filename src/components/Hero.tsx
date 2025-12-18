import { ArrowRight, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dogs.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Perros felices en Villa Canina del Estero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-semibold mb-6 animate-fade-in backdrop-blur-sm border border-secondary/30">
            Hotel & Guardería Canina
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            El mejor lugar para tu{" "}
            <span className="text-secondary">mejor amigo</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Adiestramiento profesional, hospedaje seguro y venta de cachorros de compañía. 
            En Ensenada, B.C., cuidamos de tu mascota como familia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a href="#servicios">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold gap-2 w-full sm:w-auto">
                Ver Servicios
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a
              href="https://wa.me/526461423859"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary-foreground/10 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/20 font-semibold gap-2 w-full sm:w-auto backdrop-blur-sm">
                <Phone className="w-5 h-5" />
                Contactar
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-accent" />
              </div>
              <span className="text-sm font-medium">Años de experiencia</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="text-secondary font-bold">+500</span>
              </div>
              <span className="text-sm font-medium">Perros entrenados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
