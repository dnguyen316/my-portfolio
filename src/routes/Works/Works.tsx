import WorkSection from "../../components/Sections/Work/WorkSection";
import { useMediaQuery } from "@uidotdev/usehooks";

const WorksPage = () => {
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px)");

  return (
    <div className={`${isMediumDevice ? "pl-[160px]" : ""}`}>
      <WorkSection />
    </div>
  );
};

export default WorksPage;
