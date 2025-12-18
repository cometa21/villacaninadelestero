import { useState, useMemo } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { CalendarDays, Dog, DollarSign, MessageCircle } from "lucide-react";
import { format, differenceInDays, addDays, isBefore, isAfter, startOfDay } from "date-fns";
import { es } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const dogSizes = [
  { id: "chica", label: "Raza Chica", description: "Chihuahua, Pomerania, Yorkshire", price: 180 },
  { id: "mediana", label: "Raza Mediana", description: "Beagle, Cocker, Bulldog Francés", price: 250 },
  { id: "grande", label: "Raza Grande", description: "Labrador, Pastor Alemán, Golden", price: 320 },
  { id: "gigante", label: "Raza Gigante", description: "Gran Danés, San Bernardo, Mastín", price: 450 },
];

// Example blocked dates (you can modify these or make them dynamic later)
const blockedDates = [
  new Date(2024, 11, 25), // Christmas
  new Date(2024, 11, 31), // New Year's Eve
  new Date(2025, 0, 1),   // New Year's Day
];

const bookingSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  phone: z.string().trim().min(10, "El teléfono debe tener al menos 10 dígitos").max(15),
  dogName: z.string().trim().min(1, "El nombre de tu mascota es requerido").max(50),
});

const BookingCalendar = () => {
  const { toast } = useToast();
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();
  const [dogSize, setDogSize] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dogName, setDogName] = useState("");

  const today = startOfDay(new Date());

  const isDateBlocked = (date: Date) => {
    return blockedDates.some(
      (blocked) => startOfDay(blocked).getTime() === startOfDay(date).getTime()
    );
  };

  const selectedSize = dogSizes.find((s) => s.id === dogSize);
  
  const totalDays = useMemo(() => {
    if (checkIn && checkOut) {
      return differenceInDays(checkOut, checkIn);
    }
    return 0;
  }, [checkIn, checkOut]);

  const totalPrice = useMemo(() => {
    if (selectedSize && totalDays > 0) {
      return selectedSize.price * totalDays;
    }
    return 0;
  }, [selectedSize, totalDays]);

  const handleCheckInSelect = (date: Date | undefined) => {
    setCheckIn(date);
    if (date && checkOut && (isBefore(checkOut, date) || checkOut.getTime() === date.getTime())) {
      setCheckOut(undefined);
    }
  };

  const handleSubmit = () => {
    const validation = bookingSchema.safeParse({ name, phone, dogName });
    
    if (!validation.success) {
      toast({
        variant: "destructive",
        title: "Error en el formulario",
        description: validation.error.errors[0].message,
      });
      return;
    }

    if (!checkIn || !checkOut) {
      toast({
        variant: "destructive",
        title: "Fechas requeridas",
        description: "Por favor selecciona las fechas de entrada y salida.",
      });
      return;
    }

    if (!dogSize) {
      toast({
        variant: "destructive",
        title: "Tamaño requerido",
        description: "Por favor selecciona el tamaño de tu mascota.",
      });
      return;
    }

    const message = encodeURIComponent(
      `🐕 *RESERVACIÓN DE HOSPEDAJE*\n\n` +
      `👤 Nombre: ${name}\n` +
      `📱 Teléfono: ${phone}\n` +
      `🐶 Mascota: ${dogName}\n` +
      `📏 Tamaño: ${selectedSize?.label}\n\n` +
      `📅 Check-in: ${format(checkIn, "EEEE d 'de' MMMM, yyyy", { locale: es })}\n` +
      `📅 Check-out: ${format(checkOut, "EEEE d 'de' MMMM, yyyy", { locale: es })}\n` +
      `⏰ Noches: ${totalDays}\n\n` +
      `💰 *Total estimado: $${totalPrice.toLocaleString()} MXN*\n\n` +
      `¡Espero confirmar mi reservación!`
    );

    window.open(`https://wa.me/526461423859?text=${message}`, "_blank");
    
    toast({
      title: "¡Reservación enviada!",
      description: "Te redirigimos a WhatsApp para confirmar tu reservación.",
    });
  };

  return (
    <section id="reservar" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Reservaciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reserva el Hospedaje de tu Mascota
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecciona las fechas disponibles y completa tu reservación
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calendar Section */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <CalendarDays className="w-5 h-5 text-secondary" />
                Selecciona las Fechas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Fecha de Entrada</Label>
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={handleCheckInSelect}
                    disabled={(date) => isBefore(date, today) || isDateBlocked(date)}
                    locale={es}
                    className="rounded-md border pointer-events-auto"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Fecha de Salida</Label>
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => 
                      isBefore(date, checkIn ? addDays(checkIn, 1) : addDays(today, 1)) || 
                      isDateBlocked(date)
                    }
                    locale={es}
                    className="rounded-md border pointer-events-auto"
                  />
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground pt-4 border-t">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary" />
                  <span>Fecha seleccionada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-muted" />
                  <span>No disponible</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form Section */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Dog className="w-5 h-5 text-secondary" />
                Datos de la Reservación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Dog Size Selection */}
              <div className="space-y-2">
                <Label htmlFor="dogSize">Tamaño de tu mascota *</Label>
                <Select value={dogSize} onValueChange={setDogSize}>
                  <SelectTrigger id="dogSize">
                    <SelectValue placeholder="Selecciona el tamaño" />
                  </SelectTrigger>
                  <SelectContent>
                    {dogSizes.map((size) => (
                      <SelectItem key={size.id} value={size.id}>
                        <div className="flex justify-between w-full">
                          <span>{size.label}</span>
                          <span className="text-muted-foreground ml-4">${size.price}/día</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedSize && (
                  <p className="text-sm text-muted-foreground">{selectedSize.description}</p>
                )}
              </div>

              {/* Owner Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Tu nombre *</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre completo"
                    maxLength={100}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="646 123 4567"
                    maxLength={15}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dogName">Nombre de tu mascota *</Label>
                <Input
                  id="dogName"
                  value={dogName}
                  onChange={(e) => setDogName(e.target.value)}
                  placeholder="¿Cómo se llama tu perrito?"
                  maxLength={50}
                />
              </div>

              {/* Price Summary */}
              {totalDays > 0 && selectedSize && (
                <div className="p-4 bg-secondary/10 rounded-lg space-y-2">
                  <div className="flex items-center gap-2 text-secondary font-semibold">
                    <DollarSign className="w-5 h-5" />
                    Resumen de Costos
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>{selectedSize.label}</span>
                      <span>${selectedSize.price} MXN/día</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Noches</span>
                      <span>{totalDays}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t border-secondary/20">
                      <span>Total estimado</span>
                      <span className="text-secondary">${totalPrice.toLocaleString()} MXN</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <Button 
                onClick={handleSubmit}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold gap-2"
                size="lg"
              >
                <MessageCircle className="w-5 h-5" />
                Confirmar por WhatsApp
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                * Al enviar, serás redirigido a WhatsApp para confirmar tu reservación.
                Los precios son estimados y pueden variar según disponibilidad.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
