import ContactSection from "../../components/Sections/Contact/ContactSection";
import { useMediaQuery } from "@uidotdev/usehooks";

const ContactPage = () => {
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px)");

  return (
    <div className={`${isMediumDevice ? "pl-[160px]" : ""}`}>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
