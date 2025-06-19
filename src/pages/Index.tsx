import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CreativeDirections from "@/components/CreativeDirections";
import UpcomingEvents from "@/components/UpcomingEvents";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black/5 backdrop-blur-none">
      <Header />
      <Hero />
      <CreativeDirections />
      <UpcomingEvents />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
