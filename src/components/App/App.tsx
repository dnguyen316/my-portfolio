import "./App.css";
import useTheme from "../../hooks/useTheme";
import { RouterProvider } from "react-router-dom";
import { router } from "../../routes/routes";
import Layout from "../Layout/Layout";
import { Sidebar } from "..";

function App() {
  const theme = useTheme();

  return (
    <div className={`relative ${theme}`}>
      <Layout>
        <Sidebar />
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
