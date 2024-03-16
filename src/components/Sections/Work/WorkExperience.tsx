import React from "react";

interface WorkExperience {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface WorkExperiencesProps {
  experiencesData: WorkExperience[];
}

const listItemClassName = "list-disc text-justify mb-2 dark:text-white";

const WorkExperience = (props: WorkExperiencesProps) => {
  const { experiencesData } = props;

  return (
    experiencesData.length > 0 &&
    experiencesData.map((data) => (
      <div className="flex gap-12">
        <div className="flex-1 text-base mb-4">
          <p className="font-semibold text-sm italic mb-4 dark:text-white">
            {data.title}
          </p>
          <ul id="experiences" className="mb-2 pl-[18px] text-sm">
            {data.description.split("<br/>").map((item) => {
              const ListWrapper = () =>
                React.createElement("li", {
                  className: listItemClassName,
                  children: item,
                });

              return <ListWrapper />;
            })}
          </ul>
        </div>
        <p className="text-right text-sm text-gray-600 dark:text-white">
          {data.endDate}
          <br />- {data.startDate}
        </p>
      </div>
    ))
  );
};

export default WorkExperience;
