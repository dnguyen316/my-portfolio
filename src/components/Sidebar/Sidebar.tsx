import { useMediaQuery } from "@uidotdev/usehooks";
import MobileSidebar from "./MobileSidebar";
import useStore from "../../store/globalState";
import { Link, NavLink } from "react-router-dom";
import { IconType } from "../Icons/SVGIcons";

export interface MenuItem {
  title: string;
  url: string;
  icon: IconType;
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    url: `/`,
    icon: "home",
  },
  {
    title: "About",
    url: `/about`,
    icon: "circle-user",
  },
  {
    title: "Works",
    url: `/works`,
    icon: "briefcase",
  },
  {
    title: "Contact",
    url: `/contact`,
    icon: "contact",
  },
];

const Sidebar = () => {
  const isMediumDevice = useMediaQuery("only screen and (min-width : 769px)");

  const activeSection = useStore((state: any) => state.activeSection);

  const dividerMenuItemClassName =
    "last:after:content-none after:absolute after:h-10 after:border-l-[2px] after:border-l-gray-700 after:inset-x-[50%] after:top-6 dark:after:border-l-white";

  // const navigate = useNavigate();

  return isMediumDevice ? (
    <>
      <div className="fixed h-screen p-10 flex items-center justify-end border-r-gray-200 border-r-2 z-10">
        <ul className="h-full w-20 flex justify-center items-center gap-10 flex-col">
          {menuItems.map((item) => (
            <li className={`relative ${dividerMenuItemClassName}`}>
              <NavLink
                className={`dark:text-white ${
                  activeSection === item.title.toLowerCase()
                    ? `!text-[--active-blue]`
                    : "inherit"
                } hover:text-gray-500 `}
                to={`${item.url}`}
                // onClick={() => navigate(`${item.url}`)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  ) : (
    <MobileSidebar menuItems={menuItems} />
  );
};

export default Sidebar;
