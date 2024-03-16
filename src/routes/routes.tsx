import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import { HomepagePath, SuccessContactPath } from "../constants/routes";

export const router = createBrowserRouter(
  [
    {
      path: HomepagePath,
      element: <Home />,
    },
    {
      path: SuccessContactPath,
      element: <Contact />,
    },
  ],
  {
    basename: "/my-portfolio",
  }
);
