interface WorkTimeLinesProps {
  timeLineData: {
    title: string;
    activities: string[];
    dateTime: string;
  }[];
}

const WorkTimeLines = ({ timeLineData }: WorkTimeLinesProps) => {
  return timeLineData.map((item) => (
    <div className="flex gap-12">
      <div className="flex-1 text-base mb-4">
        <p className="font-semibold text-sm italic mb-4 dark:text-white">
          {item.title}
        </p>
        <ul className="mb-2 pl-[18px] text-sm">
          {item.activities.map((activity) => (
            <li className="list-disc text-justify mb-2 dark:text-white">
              {activity}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-right text-sm text-gray-600 dark:text-white">
        Current
        <br />- Sep/2022
      </p>
    </div>
  ));
};

export default WorkTimeLines;
