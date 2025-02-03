import { createBrowserRouter } from "react-router-dom";

import {
  HomepagePath,
  ContactPath,
  WorksPath,
  AboutPath,
  SuccessPagePath,
} from "../constants/routes";
import {
  AboutPage,
  ContactPage,
  HomePage,
  RootLayout,
  SuccessPage,
  WorksPage,
} from ".";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: HomepagePath,
          element: <HomePage />,
        },
        {
          path: ContactPath,
          element: <ContactPage />,
        },
        {
          path: SuccessPagePath,
          element: <SuccessPage />,
        },
        {
          path: WorksPath,
          element: <WorksPage />,
        },
        {
          path: AboutPath,
          element: <AboutPage />,
        },
      ],
    },
  ],
  {
    basename: "/my-portfolio/",
  }
);
