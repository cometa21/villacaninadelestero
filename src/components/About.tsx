import { Target, Users, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Nuestra Misión",
    description: "Brindar servicios de adiestramiento y cuidado canino de la más alta calidad, fortaleciendo el vínculo entre las mascotas y sus familias.",
  },
  {
    icon: Users,
    title: "Trato Familiar",
    description: "Cada perro que llega a nuestras instalaciones es tratado como un miembro más de nuestra familia, con amor, paciencia y respeto.",
  },
  {
    icon: Award,
    title: "Profesionalismo",
    description: "Contamos con años de experiencia y capacitación continua para ofrecer los mejores métodos de entrenamiento canino.",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Villa Canina del Estero
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Somos un centro de adiestramiento y hospedaje canino ubicado en Ensenada, Baja California, 
                México. Nuestra pasión por los perros nos ha llevado a crear un espacio donde cada mascota 
                recibe atención personalizada y el mejor cuidado posible.
              </p>
              <p>
                Con años de experiencia en el adiestramiento canino, hemos ayudado a cientos de familias 
                a mejorar la convivencia con sus mascotas. Nuestro enfoque se basa en métodos positivos 
                y respetuosos que fortalecen el vínculo entre el perro y su dueño.
              </p>
              <p>
                Además, nuestra ubicación estratégica en Baja California nos permite atender tanto a 
                clientes de México como de Estados Unidos, ofreciendo servicios de calidad internacional.
              </p>
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex items-start gap-5 p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
