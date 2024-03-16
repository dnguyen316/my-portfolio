interface TitleProps {
  title: string;
  subtitle?: string;
  type: string;
}

const titleClassName = "max-w-[334px] text-base dark:text-white";
const subtitleClassName = "text-sm italic";

const Title = ({ title, subtitle, type }: TitleProps) => {
  const renderLayout = (type: string) => {
    switch (type) {
      case "campus":
        return (
          <>
            {title}
            <br />
            <span className={subtitleClassName}>{subtitle}</span>
          </>
        );
      case "certificate":
        return (
          <>
            <b>{title}:</b> {subtitle}
          </>
        );
      default:
        return title;
    }
  };

  return <p className={titleClassName}>{renderLayout(type)}</p>;
};

export default Title;
