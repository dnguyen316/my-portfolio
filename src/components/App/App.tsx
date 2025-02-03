import "./App.css";
import useTheme from "../../hooks/useTheme";
import { RouterProvider } from "react-router-dom";
import { router } from "../../routes/routes";

function App() {
  const theme = useTheme();

  return (
    <div className={`relative ${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
