import HeroSection from "../../components/Sections/Hero/HeroSection";
import AboutSection from "../../components/Sections/About/AboutSection";
import WorkSection from "../../components/Sections/Work/WorkSection";
import ContactSection from "../../components/Sections/Contact/ContactSection";
import { useMediaQuery } from "@uidotdev/usehooks";

const Home = () => {
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px)");

  return (
    <div className={`${isMediumDevice ? "pl-[160px]" : ""}`}>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
};

export default Home;
