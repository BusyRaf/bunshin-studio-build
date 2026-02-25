import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueCards from "@/components/ValueCards";
import Philosophy from "@/components/Philosophy";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ValueCards />
      <Philosophy />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
