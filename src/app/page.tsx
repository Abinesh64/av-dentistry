import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import WhyChooseUs from "@/components/WhyChooseUs";
import Facilities from "@/components/Facilities";
import Reviews from "@/components/Reviews";
import BookAppointment from "@/components/BookAppointment";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import AppointmentModal from "@/components/AppointmentModal";
import { AppointmentProvider } from "@/context/AppointmentContext";

export default function Home() {
  return (
    <AppointmentProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <WhyChooseUs />
        <Facilities />
        <Reviews />
        <BookAppointment />
        <MapSection />
      </main>
      <Footer />
      <FloatingActions />
      <AppointmentModal />
    </AppointmentProvider>
  );
}
