interface WorkListItemProps {
  children: React.ReactNode;
  className?: string;
}

const WorkListItem = ({ children, className }: WorkListItemProps) => {
  return (
    <li className={`flex ${className}`}>
      <div>{children}</div>
    </li>
  );
};

export default WorkListItem;
