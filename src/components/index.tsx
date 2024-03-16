import { lazy } from "react";

const Sidebar = lazy(() => import("./Sidebar/Sidebar"));
const Contact = lazy(() => import("./Forms/Contact/Contact"));
const AboutSection = lazy(() => import("./Sections/About/AboutSection"));
const HeroSection = lazy(() => import("./Sections/Hero/HeroSection"));
const WorksSection = lazy(() => import("./Sections/Work/WorkSection"));
const ContactSection = lazy(() => import("./Sections/Contact/ContactSection"));

export {
  Sidebar,
  Contact,
  AboutSection,
  HeroSection,
  WorksSection,
  ContactSection,
};
