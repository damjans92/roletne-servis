import Link from "next/link";
import { links } from "@/lib/nav-links";

const Navbar = () => {
  return (
    <nav className="hidden lg:flex items-center">
      <ul className="flex items-center gap-10 xl:gap-12 uppercase font-black tracking-widest text-sm">
        {links.map((link, i) => {
          return (
            <li className="group" key={link.href}>
              <Link
                href={link.href}
                className="text-[#222] hover:text-[#bb8c30] transition duration-300 relative pb-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bb8c30] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
