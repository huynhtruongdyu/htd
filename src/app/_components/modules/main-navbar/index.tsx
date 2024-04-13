import { DEFAULT_FONT_SIZE } from "@/config/icons.config";
import { FaRegUser, FaUser } from "react-icons/fa";
import {
  IoHome,
  IoHomeOutline,
  IoLibrary,
  IoLibraryOutline,
} from "react-icons/io5";
import NavItem from "./nav-item";
import "./styles.css";

export enum ENavbarItem {
  Home,
  Library,
  Help,
}

const MainNavbar = () => {
  const activeIconSize = "1.2rem";
  return (
    <div className={"navbar"}>
      {/* TOP BAR */}
      <div className={"topNavbar"}>
        <NavItem
          to={"/"}
          name="Home"
          icon={<IoHomeOutline size={DEFAULT_FONT_SIZE} />}
          iconActive={<IoHome size={DEFAULT_FONT_SIZE} />}
          key={0}
        />
      </div>

      {/* BOTTOM BAR */}
      <div className={"bottomNavbar"}>
        <NavItem
          to={"/library"}
          name="Library"
          icon={<IoLibraryOutline size={DEFAULT_FONT_SIZE} />}
          iconActive={<IoLibrary size={DEFAULT_FONT_SIZE} />}
          key={1}
        />
        <NavItem
          to={"/about"}
          name="About"
          icon={<FaRegUser size={DEFAULT_FONT_SIZE} />}
          iconActive={<FaUser size={DEFAULT_FONT_SIZE} />}
          key={2}
        />
      </div>
    </div>
  );
};

export default MainNavbar;
