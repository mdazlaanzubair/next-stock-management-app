"use client";

import BarLoader from "react-spinners/BarLoader";

const Spinner = () => {
  return (
    <div className="absolute flex flex-col items-center justify-center gap-0 top-0 left-0 w-full h-full bg-base-200 bg-opacity-90">
      <h1 className="text-base font-semibold text-primary">
        Please wait while its loading...
      </h1>
      <BarLoader color="#63a8e0" />
    </div>
  );
};

export default Spinner;
