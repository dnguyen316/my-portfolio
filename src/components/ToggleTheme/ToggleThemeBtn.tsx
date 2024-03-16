import { IconButton } from "@material-tailwind/react";
import { Moon, Sun } from "lucide-react";
import useTheme from "../../hooks/useTheme";

interface ToggleThemeBtnProps {
  onChangeTheme: () => void;
}

const ToggleThemeBtn = (props: ToggleThemeBtnProps) => {
  const { onChangeTheme } = props;
  const theme = useTheme();

  return (
    <IconButton
      variant="text"
      placeholder="moon"
      className="!fixed top-4 right-10 border-0 rounded-full z-30 focus:outline-0 dark:hover:bg-blue-gray-100"
      onClick={onChangeTheme}
    >
      {theme === "dark" ? <Moon color="white" /> : <Sun />}
    </IconButton>
  );
};

export default ToggleThemeBtn;
