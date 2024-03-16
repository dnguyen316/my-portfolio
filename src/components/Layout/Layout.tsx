import { Suspense } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<></>}>
      <div className="relative dark:bg-blue-gray-900">{children}</div>
    </Suspense>
  );
};

export default Layout;
