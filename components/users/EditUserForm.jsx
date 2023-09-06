"use client";

import useUsersStore from "@/store/useUsersStore";
import { useEffect } from "react";
import { FaFileCircleCheck, FaEraser, FaTrash } from "react-icons/fa6";

const EditUserForm = () => {
  const userId = useUsersStore((state) => state.userId);

  useEffect(() => console.log(userId), []);

  return (
    <dialog id="edit_user_form_modal" className="modal">
      <div className="modal-box min-w-fit bg-base-200">
        <h1 className="text-2xl font-bold text-primary">Edit User Profile</h1>
        <div className="divider my-5"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered focus:outline-none focus:border-primary w-full"
              placeholder="e.g. John Doe"
            />
            <label className="label">
              <span className="label-text-alt font-semibold text-secondary">
                Enter full name as per ID Card.
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Username</span>
            </label>
            <div className="join">
              <input
                type="text"
                className="input input-bordered focus:outline-none focus:border-primary w-full"
                placeholder="e.g. john_doe1996"
              />
              <button className="btn join-item capitalize btn-secondary">
                Check availability
              </button>
            </div>
            <label className="label">
              <span className="label-text-alt font-semibold text-secondary">
                @username must be unique.
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered focus:outline-none focus:border-primary w-full"
              placeholder="e.g. john_1996@email.com"
            />
            <label className="label">
              <span className="label-text-alt font-semibold text-secondary">
                Enter a valid email address.
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Contact</span>
            </label>
            <input
              type="text"
              className="input input-bordered focus:outline-none focus:border-primary w-full"
              placeholder="e.g. +923XXXXXXXXX"
            />
            <label className="label">
              <span className="label-text-alt font-semibold text-secondary">
                Enter contact number with country code.
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Company</span>
            </label>
            <input
              type="text"
              className="input input-bordered focus:outline-none focus:border-primary w-full"
              placeholder="e.g. Apple, Google, Amazon, etc"
            />
            <label className="label">
              <span className="label-text-alt font-semibold text-secondary">
                Name of the company.
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Business</span>
            </label>
            <textarea
              type="text"
              className="textarea textarea-bordered focus:outline-none focus:border-primary w-full"
              rows="1"
              placeholder="Summary that define the actual business of the company."
            />
            <label className="label">
              <span className="label-text-alt font-semibold text-secondary">
                Short detail about business.
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">State</span>
            </label>
            <input
              type="text"
              className="input input-bordered focus:outline-none focus:border-primary w-full"
              placeholder="e.g. Sindh, Balochistan, Punjab, etc."
            />
            <label className="label">
              <span className="label-text-alt font-semibold text-secondary">
                State where business is situated.
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Country</span>
            </label>
            <input
              type="text"
              className="input input-bordered focus:outline-none focus:border-primary w-full"
              placeholder="e.g. Pakistan, Bangladesh, India, etc."
            />
            <label className="label">
              <span className="label-text-alt font-semibold text-secondary">
                Country where business is located.
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Address</span>
            </label>
            <textarea
              type="text"
              className="textarea textarea-bordered focus:outline-none focus:border-primary w-full"
              rows="3"
              placeholder="e.g. 2666, Hagenes Summit Suite 084."
            />
            <label className="label">
              <span className="label-text-alt font-semibold text-secondary">
                Location where business is situated.
              </span>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Status</span>
            </label>
            <div className="flex flex-row justify-start items-center gap-3">
              <label className="label cursor-pointer">
                <span className="label-text mr-2">Active</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-success"
                  value="active"
                  checked
                />
              </label>
              <label className="label cursor-pointer">
                <span className="label-text mr-2">Blocked</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-error"
                  value="blocked"
                  checked
                />
              </label>
            </div>
            <label className="label">
              <span className="label-text-alt font-semibold text-secondary">
                Blocking status.
              </span>
            </label>
          </div>
        </div>
        <div className="divider my-5"></div>
        <div className="form-control">
          <div className="flex flex-row gap-3">
            <button type="submit" className="btn btn-success btn-wide">
              <span className="mr-2">
                <FaFileCircleCheck />
              </span>
              Save
            </button>
            <div className="tooltip tooltip-error" data-tip="Delete">
              <button type="reset" className="btn btn-square btn-error">
                <FaTrash />
              </button>
            </div>
            <div className="tooltip tooltip-secondary" data-tip="Reset all">
              <button type="reset" className="btn btn-square btn-secondary">
                <FaEraser />
              </button>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default EditUserForm;
