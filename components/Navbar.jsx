import Logo from "./Logo";
import { navLinks } from "../constants/nav-links";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30">
      <div className="container py-6 flex justify-between transition-all relative">
        <Logo />
        <div className="hidden md:flex gap-8 capitalize ">
          {navLinks.map((link, id) => (
            <Link
              key={id}
              href={`#${link}`}
              className="text-sm font-semibold tracking-wide text-slate-200"
            >
              {link}
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
