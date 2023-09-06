import UsersList from "@/components/users/UsersList";
import { FaAnglesDown } from "react-icons/fa6";

const page = () => {
  return (
    <div className="card w-full bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title">List of Registered User</h2>
        <p>
          Here is the list of users using this application to effectively
          managing their stocks / inventories within their warehouses.
        </p>
        <div className="divider my-5">
          <span className="text-primary">
            <FaAnglesDown />
          </span>
        </div>
        <UsersList />
      </div>
    </div>
  );
};

export default page;
