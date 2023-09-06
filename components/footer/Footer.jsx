import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-100 text-base-content">
      <aside>
        <p>
          Copyright © 2023 - All right reserved by{" "}
          <Link href="/" className="link-hover text-primary font-bold">
            NextStock
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
