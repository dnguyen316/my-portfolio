import HeroSection from "../../components/Sections/Hero/HeroSection";
import { useMediaQuery } from "@uidotdev/usehooks";

const Home = () => {
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px)");

  return (
    <div className={`${isMediumDevice ? "pl-[160px]" : ""}`}>
      <HeroSection />
    </div>
  );
};

export default Home;
