"use client";
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
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(ENavbarItem.Home);

  const isActiveTab = useCallback(
    (key: ENavbarItem) => key == activeTab,
    [activeTab]
  );

  const onSetActiveTabHome = useCallback(() => {
    setActiveTab(ENavbarItem.Home);
    router.push("/");
  }, [router]);

  const onSetActiveTabLibrary = useCallback(() => {
    setActiveTab(ENavbarItem.Library);
    router.push("library");
  }, [router]);

  const onSetActiveTabHelp = useCallback(() => {
    setActiveTab(ENavbarItem.Help);
    router.push("help");
  }, [router]);

  const activeIconSize = "1.2rem";

  return (
    <div className={"navbar"}>
      {/* TOP BAR */}
      <div className={"topNavbar"}>
        <NavItem
          name="Home"
          active={isActiveTab(ENavbarItem.Home)}
          icon={<IoHomeOutline />}
          iconActive={<IoHome size={activeIconSize} />}
          key={0}
          onClick={onSetActiveTabHome}
        />
      </div>

      {/* BOTTOM BAR */}
      <div className={"bottomNavbar"}>
        <NavItem
          name="Library"
          active={isActiveTab(ENavbarItem.Library)}
          icon={<IoLibraryOutline />}
          iconActive={<IoLibrary size={activeIconSize} />}
          key={0}
          onClick={onSetActiveTabLibrary}
        />
        <NavItem
          name="Help"
          active={isActiveTab(ENavbarItem.Help)}
          icon={<IoHelpCircleOutline />}
          iconActive={<IoHelpCircle size={activeIconSize} />}
          key={0}
          onClick={onSetActiveTabHelp}
        />
      </div>
    </div>
  );
};

export default MainNavbar;
