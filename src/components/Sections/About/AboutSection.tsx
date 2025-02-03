import SectionWrapper from "../../Layout/SectionWrapper";
import Title from "./Title";
import Time from "./Time";

const educationList = [
  {
    type: "campus",
    title: "Saigon University",
    subtitle: "Electrical and Electronic Engineer",
    startDate: "2016",
    endDate: "2020",
  },
  {
    type: "certificate",
    title: "Toeic",
    subtitle: "Overall 790",
    endDate: "2022",
  },
  {
    type: "certificate",
    title: "AZ-204",
    subtitle: "Azure Developer Associate",
    endDate: "2024",
  },
];

const aboutIntro = `A highly adaptable individual who wants to bring real value to society.
A young mind has a passion in technology. Daring to find the answers and
always looking forward to improve myself, not afraid of working under
pressure.`;

const AboutSection = () => {
  return (
    <SectionWrapper
      title="About"
      id="about"
      className="flex flex-col items-center justify-center"
    >
      <p className="text-justify text-sm mb-8 md:text-center dark:text-white">
        {aboutIntro}
      </p>
      <h2 className="font-bold text-xl mb-4 dark:text-white">Education</h2>
      <ul>
        {educationList.map((item) => (
          <li className="flex justify-between gap-10 mb-4">
            <Title
              title={item.title}
              type={item.type}
              subtitle={item.subtitle}
            />
            <Time startDate={item?.startDate} endDate={item?.endDate} />
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
};

export default AboutSection;
