import Link from "next/link";
import ThemeToggler from "../theme/ThemeToggler";

const HomePageNav = () => {
  const isLoggedIn = true;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <ThemeToggler />
      </div>
      <div className="navbar-center">
        <Link href="/" className="font-black normal-case text-xl">
          daisyUI
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="/dashboard" className="btn btn-primary capitalize">
          {isLoggedIn ? "Go to Dashboard" : "Get Started"}
        </Link>
      </div>
    </div>
  );
};

export default HomePageNav;
