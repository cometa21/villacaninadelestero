import { Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Villa Canina del Estero" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-background/70 max-w-md mb-6">
              Adiestramiento profesional, hospedaje seguro y venta de cachorros de compañía. 
              El mejor lugar para tu mejor amigo en Ensenada, Baja California.
            </p>
            <div className="flex items-center gap-2 text-background/70">
              <MapPin className="w-5 h-5" />
              <span>Ensenada, B.C., México</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-background/70 hover:text-background transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-background/70 hover:text-background transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#hospedaje" className="text-background/70 hover:text-background transition-colors">
                  Hospedaje
                </a>
              </li>
              <li>
                <a href="#cachorros" className="text-background/70 hover:text-background transition-colors">
                  Cachorros
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-background/70 hover:text-background transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/70 hover:text-background transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+526461243859"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +52 646-124-3859
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/526461243859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-lg text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} Villa Canina del Estero. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
