"use client";

import { useState } from "react";
import Link from "next/link";

const UsersList = () => {
  const users = [1, 2, 3, 4, 5];
  const filters = ["all", "active", "blocked"];
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center gap-3">
        <div className="flex flex-wrap justify-between items-center gap-3">
          <h1>Filters</h1>
          {filters.map((filter, index) => (
            <label key={index} className="label cursor-pointer">
              <span className="label-text mr-2 capitalize font-medium">
                {filter}
              </span>
              <input
                type="radio"
                name="status"
                onChange={(e) => setActiveFilter(e.target.value)}
                className="radio checked:bg-primary"
                value={filter}
                checked={activeFilter === filter}
              />
            </label>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
        <div className="card bg-base-200 shadow">
          <div className="card-body">
            <div className="flex flex-row justify-start gap-3">
              <div className="avatar">
                <div className="w-24 rounded-full">
                  <img src="https://i.pravatar.cc/150?img=1" />
                </div>
              </div>
              <div className="w-auto flex flex-col">
                <div className="font-bold">Full Name</div>
                <div className="text-sm opacity-50">@username</div>

                <span className="badge badge-error mt-5">Blocked</span>
              </div>
            </div>
          </div>
        </div>

        {users.map((user, index) => (
          <div key={index} className="card bg-base-200 shadow">
            <div className="card-body">
              <div className="flex flex-row justify-start gap-3">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={`https://i.pravatar.cc/150?img=${user + 1}`} />
                  </div>
                </div>
                <div className="w-auto flex flex-col">
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">
                    <Link
                      href={`/dashboard/users/edit/${user}`}
                      className="link-hover text-primary font-semibold"
                    >
                      @hart_hagerty
                    </Link>
                  </div>

                  <span className="badge badge-success mt-5">Active</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
