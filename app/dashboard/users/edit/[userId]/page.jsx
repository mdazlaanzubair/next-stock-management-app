import UserProfileForm from "@/components/users/UserProfileForm";

const page = ({ params }) => {
  const user = {};
  return (
    <div className="card w-full bg-base-100 shadow">
      <div className="card-body">
        <h2 className="card-title text-xl lg:text-3xl mb-3">
          Edit User-{params.userId} Profile
        </h2>
        <p className="text-base lg:text-lg">Update user profile details.</p>
        <div className="divider my-5"></div>
        <UserProfileForm userDetails={user} />
      </div>
    </div>
  );
};

export default page;
