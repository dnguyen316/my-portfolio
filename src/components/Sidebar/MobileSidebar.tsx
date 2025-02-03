import { IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { Menu, MenuItem, Sidebar as SidebarWrapper } from "react-pro-sidebar";
import Icon from "../Icons/Icons";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useStore from "../../store/globalState";
import { MenuItem as MenuItemType } from "./Sidebar";
import { useNavigate } from "react-router-dom";

interface MobileSidebarProps {
  menuItems: MenuItemType[];
}

const MobileSidebar = ({ menuItems }: MobileSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const activeSection = useStore((state: any) => state.activeSection);
  const updateActiveSection = useStore(
    (state: any) => state.updateActiveSection
  );

  const navigate = useNavigate();

  const handleUpdateActiveSection = (title: string, url: string) => {
    updateActiveSection(title.toLowerCase());
    navigate(url);
  };

  return (
    <SidebarWrapper
      collapsed={isCollapsed}
      className="z-10 !fixed inset-[50%] translate-y-[-50%] left-[-25px] h-[250px] dark:bg-blue-gray-50"
      rtl={true}
      width="180px"
    >
      <Menu data-testid="menu-list">
        {menuItems.map((item) => (
          <MenuItem
            icon={<Icon isShowTooltip={false} name={item.icon} />}
            key={item.title}
            data-testid="menu-item"
            onClick={() => handleUpdateActiveSection(item.title, item.url)}
            className="text-sm"
            rootStyles={{
              [`.ps-menu-button`]: {
                paddingRight: "12px !important",
                color: `${
                  activeSection === item.title.toLowerCase()
                    ? "var(--active-blue)"
                    : "inherit"
                } !important`,
              },
            }}
          >
            {item.title}
          </MenuItem>
        ))}
        <li className="flex items-center justify-start pr-3">
          <IconButton
            variant="outlined"
            placeholder="collapsed-btn"
            className="border-0"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <ArrowRight size={24} /> : <ArrowLeft size={24} />}
          </IconButton>
        </li>
      </Menu>
    </SidebarWrapper>
  );
};

export default MobileSidebar;
