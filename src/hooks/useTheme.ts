import { useContext } from "react";
import { ThemeContext } from "../Containers/Theme/ThemeProvider";

const useTheme = () => {
  const theme = useContext(ThemeContext);

  return theme;
};

export default useTheme;
