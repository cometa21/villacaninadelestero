import { useState } from "react";
import { Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "El nombre es requerido").max(100, "El nombre es muy largo"),
  email: z.string().email("Email inválido").max(100, "El email es muy largo"),
  phone: z.string().max(20, "El teléfono es muy largo").optional().or(z.literal("")),
  message: z.string().min(1, "El mensaje es requerido").max(1000, "El mensaje es muy largo"),
});

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono / WhatsApp",
    value: "+52 646-124-3859",
    link: "tel:+526461243859",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Directo",
    value: "Enviar mensaje",
    link: "https://wa.me/526461423859",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Ensenada, B.C., México",
    link: "https://maps.google.com/?q=Ensenada,Baja+California,Mexico",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validated = contactSchema.safeParse(formData);
    if (!validated.success) {
      const firstError = validated.error.errors[0];
      toast({
        title: "Error de validación",
        description: firstError.message,
        variant: "destructive",
      });
      return;
    }

    const { name, email, phone, message } = validated.data;
    
    // Create WhatsApp message with validated form data
    const whatsappMessage = encodeURIComponent(
      `Hola, me gustaría más información.\n\nNombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || "No proporcionado"}\n\nMensaje: ${message}`
    );
    
    window.open(`https://wa.me/526461243859?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te redirigimos a WhatsApp para completar tu consulta.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="section-padding bg-primary">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-semibold mb-4">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Contáctanos hoy mismo para agendar una evaluación gratuita o resolver cualquier duda. 
            Atendemos clientes de México y Estados Unidos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 rounded-2xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors group"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground">{item.title}</h3>
                  <p className="text-primary-foreground/70">{item.value}</p>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/526461243859"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="border-0 bg-accent hover:bg-accent/90 transition-colors cursor-pointer">
                <CardContent className="flex items-center justify-center gap-3 p-6">
                  <MessageCircle className="w-6 h-6 text-accent-foreground" />
                  <span className="text-lg font-bold text-accent-foreground">
                    Escríbenos por WhatsApp
                  </span>
                </CardContent>
              </Card>
            </a>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envíanos un mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                  <Input
                    type="tel"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <Textarea
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-32 resize-none"
                />
                <Button type="submit" className="w-full h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold gap-2">
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
