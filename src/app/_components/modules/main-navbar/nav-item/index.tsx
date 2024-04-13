import React from "react";
import "./styles.css";
type NavItemProps = {
  name: string;
  icon: React.ReactNode;
  iconActive?: React.ReactNode;
  active: boolean;
  onClick: () => void;
};
const NavItem = ({ name, icon, iconActive, active, onClick }: NavItemProps) => {
  return (
    <div
      className={`navItem ${active ? "active" : ""}`}
      onClick={onClick}
      role="button"
    >
      {active ? iconActive : icon}
      <small>{name}</small>
    </div>
  );
};

export default NavItem;
