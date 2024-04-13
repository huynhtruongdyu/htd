"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import "./styles.css";
type NavItemProps = {
  to: string;
  name: string;
  icon: React.ReactNode;
  iconActive?: React.ReactNode;
};
const NavItem = ({ to, name, icon, iconActive }: NavItemProps) => {
  const pathname = usePathname();
  const active = useMemo(() => pathname === to, [pathname, to]);
  return (
    <Link
      className={`navItem ${active ? "active" : ""}`}
      // onClick={handleNavigate}
      role="button"
      href={to}
    >
      {active ? iconActive : icon}
      <small>{name}</small>
    </Link>
  );
};

export default NavItem;
