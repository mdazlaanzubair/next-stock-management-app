"use client";

import useNavigationStore from "@/store/useNavigationStore";
import { FaBarsStaggered, FaBars } from "react-icons/fa6";

const SidebarToggler = () => {
  const isSidebarOpen = useNavigationStore((state) => state.isSidebarOpen);
  const toggleSidebar = useNavigationStore((state) => state.toggleSidebar);

  return (
    <button
      type="button"
      className="btn btn-square btn-ghost bg-transparent text-xl"
      onClick={() => toggleSidebar()}
    >
      {isSidebarOpen ? <FaBarsStaggered /> : <FaBars />}
    </button>
  );
};

export default SidebarToggler;
