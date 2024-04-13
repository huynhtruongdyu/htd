import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import {
  IoHelpCircle,
  IoHelpCircleOutline,
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
          icon={<IoHomeOutline />}
          iconActive={<IoHome />}
          key={0}
        />
      </div>

      {/* BOTTOM BAR */}
      <div className={"bottomNavbar"}>
        <NavItem
          to={"/library"}
          name="Library"
          icon={<IoLibraryOutline />}
          iconActive={<IoLibrary />}
          key={1}
        />
        <NavItem
          to={"/help"}
          name="Help"
          // active={isActiveTab(ENavbarItem.Help)}
          icon={<IoHelpCircleOutline />}
          iconActive={<IoHelpCircle />}
          key={2}
        />
      </div>
    </div>
  );
};

export default MainNavbar;
