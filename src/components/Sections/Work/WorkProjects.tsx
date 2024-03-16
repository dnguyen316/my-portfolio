import { Link } from "react-router-dom";

interface ProjectProps {
  name: string;
  url: string;
}

interface WorkProjectsProps {
  projects: ProjectProps[];
}

const WorkProjects = ({ projects }: WorkProjectsProps) => {
  return (
    <ul className="mb-4">
      <b className="dark:text-white">Project:</b>{" "}
      {projects.map((item) => (
        <Link to={item.url} target="_blank" className="dark:text-white">
          {item.name}
        </Link>
      ))}
    </ul>
  );
};

export default WorkProjects;
