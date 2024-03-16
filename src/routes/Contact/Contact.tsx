import { Button } from "@material-tailwind/react";
import { BadgeCheck, Laugh } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomepagePath } from "../../constants/routes";

const Contact = () => {
  const [backToHomeCounter, setBackToHomeCounter] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    backToHomeCounter > 0 &&
      setTimeout(() => setBackToHomeCounter(backToHomeCounter - 1), 1000);
    if (backToHomeCounter === 0) {
      navigate(HomepagePath);
    }
  }, [backToHomeCounter]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <BadgeCheck size={100} className="mb-8 dark:text-white" />
      <p className="text-xl flex dark:text-white">
        Thank you for your submitting <Laugh className="ml-4" />
      </p>
      <Button
        onClick={() => navigate(HomepagePath)}
        variant="filled"
        placeholder="home"
        className="mt-6 capitalize text-xl hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:bg-blue-gray-100 dark:hover:bg-gray-900 dark:text-blue-gray-900"
      >
        Home {`(${backToHomeCounter})`}
      </Button>
    </div>
  );
};

export default Contact;
