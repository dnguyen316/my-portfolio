const timeWrapperClassName = "text-sm text-gray-600 dark:text-white";

const Time = (dateTimeData: { startDate?: string; endDate?: string }) => {
  const { startDate, endDate } = dateTimeData;

  const convertTimeData = (startDate?: string, endDate?: string) => {
    return startDate && endDate
      ? startDate + "-" + endDate
      : startDate ?? endDate ?? "N/A";
  };

  return (
    <p className={timeWrapperClassName}>
      {convertTimeData(startDate, endDate)}
    </p>
  );
};

export default Time;
