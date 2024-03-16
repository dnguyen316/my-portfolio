interface WorkTitleProps {
  title: string;
  className?: string;
}

const WorkCompany = (props: WorkTitleProps) => {
  const { title, className } = props;

  return (
    <h3 className={`font-bold text-lg mb-2 dark:text-white ${className}`}>
      {title}
    </h3>
  );
};

export default WorkCompany;
