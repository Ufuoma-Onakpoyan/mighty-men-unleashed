import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMission from "@/components/AboutMission";
import SelectionProcess from "@/components/SelectionProcess";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutMission />
      <SelectionProcess />
      <ContactFooter />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;