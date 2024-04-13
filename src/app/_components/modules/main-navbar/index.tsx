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
import {
  AiFillAppstore,
  AiOutlineAppstore,
  AiTwotoneAppstore,
} from "react-icons/ai";

export enum ENavbarItem {
  Home,
  Apps,
  Library,
  About,
}

const MainNavbar = () => {
  return (
    <div className={"navbar"}>
      {/* TOP BAR */}
      <div className={"topNavbar"}>
        <NavItem
          to={"/"}
          name="Home"
          icon={<IoHomeOutline size={DEFAULT_FONT_SIZE} />}
          iconActive={<IoHome size={DEFAULT_FONT_SIZE} />}
          key={ENavbarItem.Home}
        />
        <NavItem
          to={"/apps"}
          name="Apps"
          icon={<AiOutlineAppstore size={DEFAULT_FONT_SIZE} />}
          iconActive={<AiOutlineAppstore size={DEFAULT_FONT_SIZE} />}
          key={ENavbarItem.Apps}
        />
      </div>

      {/* BOTTOM BAR */}
      <div className={"bottomNavbar"}>
        <NavItem
          to={"/library"}
          name="Library"
          icon={<IoLibraryOutline size={DEFAULT_FONT_SIZE} />}
          iconActive={<IoLibrary size={DEFAULT_FONT_SIZE} />}
          key={ENavbarItem.Library}
        />
        <NavItem
          to={"/about"}
          name="About"
          icon={<FaRegUser size={DEFAULT_FONT_SIZE} />}
          iconActive={<FaUser size={DEFAULT_FONT_SIZE} />}
          key={ENavbarItem.About}
        />
      </div>
    </div>
  );
};

export default MainNavbar;
