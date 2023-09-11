import React from "react";
import ThemeToggler from "../theme/ThemeToggler";
import Link from "next/link";
import SidebarToggler from "./SidebarToggler";
import ProfileNav from "./ProfileNav";

const DashboardTopNav = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <SidebarToggler />
      </div>
      <div className="navbar-center">
        <Link href="/dashboard" className="font-black normal-case text-xl">
          daisyUI
        </Link>
      </div>
      <div className="navbar-end">
        <ProfileNav />
        <ThemeToggler />
      </div>
    </div>
  );
};

export default DashboardTopNav;
