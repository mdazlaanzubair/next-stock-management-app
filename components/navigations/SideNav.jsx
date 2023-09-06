"use client";

import useNavigationStore from "@/store/useNavigationStore";
import Link from "next/link";
import * as FontAwesome6Icon from "react-icons/fa6";

const SideNav = () => {
  const isSidebarOpen = useNavigationStore((state) => state.isSidebarOpen);

  const nav_items = [
    {
      title: "Dashboard",
      icon: "FaChartColumn",
      link: "/dashboard",
    },
    {
      title: "Access & Control",
      icon: "FaUserLock",
      link: null,
      menu: [
        {
          title: "Roles",
          icon: "FaCircleDot",
          link: "/dashboard/access_control/roles",
        },
        {
          title: "Permission",
          icon: "FaCircleExclamation",
          link: "/dashboard/access_control/permissions",
        },
      ],
    },
    {
      title: "Users",
      icon: "FaUsersGear",
      link: null,
      menu: [
        {
          title: "List all",
          link: "/dashboard/users/index",
          icon: "FaUsers",
        },
        {
          title: "Create",
          link: "/dashboard/users/create",
          icon: "FaUserPlus",
        },
      ],
    },
    {
      title: "Warehouses",
      icon: "FaWarehouse",
      link: null,
      menu: [
        {
          title: "List all",
          icon: "FaClipboardList",
          link: "/",
        },
        {
          title: "Create",
          icon: "FaFolderPlus",
          link: "/",
        },
      ],
    },
    {
      title: "Clients",
      icon: "FaUsersRectangle",
      link: null,
      menu: [
        {
          title: "List all",
          link: "/",
          icon: "FaUsers",
        },
        {
          title: "Create",
          link: "/",
          icon: "FaUserPlus",
        },
      ],
    },
    {
      title: "Vendors",
      icon: "FaUsersGear",
      link: null,
      menu: [
        {
          title: "List all",
          link: "/",
          icon: "FaUsers",
        },
        {
          title: "Create",
          link: "/",
          icon: "FaUserPlus",
        },
      ],
    },
  ];

  return (
    <div className={`bg-base-100 ${isSidebarOpen ? "w-72" : "w-24"}`}>
      <ul className="menu font-bold text-base lg:text-lg">
        {nav_items.map((nav_item, index) => {
          const NavIcon = FontAwesome6Icon[nav_item.icon];
          return (
            <li
              key={index}
              className={isSidebarOpen ? "" : "tooltip tooltip-right"}
              data-tip={nav_item.title}
            >
              {nav_item.link === null ? (
                <details>
                  <summary>
                    <NavIcon />
                    {isSidebarOpen && (
                      <span className="text-base ml-2">{nav_item.title}</span>
                    )}
                  </summary>
                  <ul>
                    {nav_item.menu?.map((menu_item, index) => {
                      const MenuIcon = FontAwesome6Icon[menu_item.icon];
                      return (
                        <li key={index}>
                          <Link
                            href={menu_item.link}
                            className={
                              isSidebarOpen
                                ? ""
                                : "tooltip tooltip-right tooltip-primary"
                            }
                            data-tip={menu_item.title}
                          >
                            <MenuIcon />
                            {isSidebarOpen && (
                              <span className="text-base ml-2">
                                {menu_item.title}
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              ) : (
                <a
                  href={nav_item.link}
                  className={
                    isSidebarOpen
                      ? "w-full"
                      : "w-full tooltip tooltip-right tooltip-primary"
                  }
                  data-tip={nav_item.title}
                >
                  <NavIcon />
                  {isSidebarOpen && (
                    <span className="text-base ml-2">{nav_item.title}</span>
                  )}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideNav;
