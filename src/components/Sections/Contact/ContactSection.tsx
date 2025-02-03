import ContactForm from "../../Forms/Contact/Contact";
import SectionWrapper from "../../Layout/SectionWrapper";

const ContactSection = () => {
  return (
    <SectionWrapper
      title="Contact"
      id="contact"
      className=" flex flex-col items-center justify-center h-screen"
    >
      <ContactForm />
    </SectionWrapper>
  );
};

export default ContactSection;
