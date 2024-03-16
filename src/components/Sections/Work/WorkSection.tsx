import SectionWrapper from "../../Layout/SectionWrapper";
import Icon from "../../Icons/Icons";
import { IconProps } from "../../Icons/Icons";
import WorkListItem from "./WorkListItem";
import WorkProjects from "./WorkProjects";
import WorkCompany from "./WorkCompany";
import WorkExperience from "./WorkExperience";

const skillsList = ["react", "azure", "typescript", "css3", "html5", "redux"];

const experiencesList = [
  {
    companyName: "DXC Vietnam",
    projects: [
      {
        name: "Uptime",
        url: "https://dxc.com/us/en/offerings/modern-workplace/dxc-uptime-experience-platform",
      },
    ],
    experiences: [
      {
        title: "Junior Frontend Developer",
        startDate: "Sep/2022",
        endDate: "Current",
        description: `Participating in implementing requested features such as: Dynamic Layout, Multiple Languages, Routing, Delegation, Act on Behalf of. <br/>
      Providing documentations to multiple aspects of work on Confluence: Setting up environments, Coding conventions <br/>
      Maintaining, refactoring code and updating the Unit Test.`,
      },
      {
        title: "Intern",
        startDate: "April/2022",
        endDate: "Sep/2022",
        description: `Learning about software development cycle, Jira, Agile process. <br/>
        Participating in fix bug and implementing minor features.`,
      },
    ],
  },
];

const WorkSection = () => {
  return (
    <SectionWrapper title="Works" id="works" className="mb-[140px]">
      <h2 className="font-bold text-xl mb-3 dark:text-white">Experience</h2>
      <ul>
        {experiencesList.map((data) => (
          <WorkListItem>
            <WorkCompany title={data.companyName} />
            <WorkProjects projects={data.projects} />
            <WorkExperience experiencesData={data.experiences} />
          </WorkListItem>
        ))}
      </ul>
      <p>
        <b className="text-lg dark:text-white">Skills</b>
        <ul className="mt-4">
          {skillsList.map((item) => (
            <li className="inline-block mr-5">
              <Icon
                name={item as IconProps["name"]}
                type="assets"
                width={40}
                height="auto"
                className="fill-[#213547] dark:!fill-white"
              />
            </li>
          ))}
        </ul>
      </p>
    </SectionWrapper>
  );
};

export default WorkSection;
