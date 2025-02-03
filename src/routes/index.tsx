import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

export const RootLayout = () => (
  <>
    <Sidebar />
    {/* Render the child routes */}
    <Suspense fallback={<></>}>
      <div className="relative dark:bg-blue-gray-900">
        <Outlet />
      </div>
    </Suspense>
  </>
);

export const HomePage = lazy(() => import("./Home/Home"));
export const ContactPage = lazy(() => import("./Contact/Contact"));
export const WorksPage = lazy(() => import("./Works/Works"));
export const AboutPage = lazy(() => import("./About/About"));
export const SuccessPage = lazy(() => import("./Contact/SuccessPage"));
export const BaseRoute = "/my-portfolio";
