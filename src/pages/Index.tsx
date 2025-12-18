import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Boarding from "@/components/Boarding";
import BookingCalendar from "@/components/BookingCalendar";
import Puppies from "@/components/Puppies";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Villa Canina del Estero | Adiestramiento y Hospedaje Canino en Ensenada</title>
        <meta
          name="description"
          content="Adiestramiento canino profesional, hospedaje seguro y venta de cachorros en Ensenada, B.C. México. Servicios para clientes de México y Estados Unidos."
        />
        <meta
          name="keywords"
          content="adiestramiento canino, hospedaje canino, cachorros, Ensenada, Baja California, entrenamiento de perros, hotel para perros"
        />
        <link rel="canonical" href="https://villacaninadelestero.mx" />
      </Helmet>
      
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Boarding />
        <BookingCalendar />
        <Puppies />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
