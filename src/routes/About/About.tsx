import AboutSection from "../../components/Sections/About/AboutSection";
import { useMediaQuery } from "@uidotdev/usehooks";

const AboutPage = () => {
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px)");

  return (
    <div className={`${isMediumDevice ? "pl-[160px]" : ""}`}>
      <AboutSection />
    </div>
  );
};

export default AboutPage;
