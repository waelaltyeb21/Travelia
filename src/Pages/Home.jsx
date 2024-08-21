import CTA from "../Components/CTA/CTA";
import Destination from "../Components/DestinationSection/Destination/Destination";
import Experience from "../Components/Experience/Experience";
import Footer from "../Components/Footer/Footer";
import Gallery from "../Components/Gallery/Gallery";
import GoUpButton from "../Components/GoUpButton/GoUpButton";
import HeroSection from "../Components/HeroSection/HeroSection";
import ServicesSection from "../Components/ServicesSection/ServicesSection";

const Home = () => {
  return (
    <section className="mt-20">
      <HeroSection />
      <ServicesSection />
      <Destination />
      <Experience />
      <Gallery />
      <CTA />
      <GoUpButton />
      <Footer />
    </section>
  );
};

export default Home;
