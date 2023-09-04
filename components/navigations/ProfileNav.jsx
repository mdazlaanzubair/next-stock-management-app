"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGear, FaPowerOff } from "react-icons/fa6";

const ProfileNav = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div className="dropdown dropdown-end">
      <button
        type="button"
        className="btn btn-circle btn-ghost border-none m-1"
        onClick={() => setIsDropDown(!isDropDown)}
      >
        <div className="avatar">
          <div className="w-8 rounded-xl">
            <img src="https://i.pravatar.cc/150?img=5" />
          </div>
        </div>
      </button>
      {isDropDown && (
        <div className="w-72 dropdown-open dropdown-content shadow-md bg-base-100 rounded-box">
          <div className="card-body py-3">
            <div className="flex flex-row justify-between items-center gap-3">
              <div className="w-1/4">
                <div className="avatar">
                  <div className="w-full rounded-full">
                    <img src="https://i.pravatar.cc/150?img=5" />
                  </div>
                </div>
              </div>
              <div className="w-3/4 flex flex-col gap-0">
                <h3 className="card-title">Muhammad Azlaan Zubair</h3>
                <p>
                  <Link href="/" className="link-primary underline">
                    @Username
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <ul className="menu font-medium text-base">
            <li>
              <a>
                <span className="mr-2">
                  <FaGear />
                </span>
                Manage Profile
              </a>
            </li>
            <li>
              <a>
                <span className="mr-2">
                  <FaPowerOff />
                </span>
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileNav;
