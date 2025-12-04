"use client";

import Link from "next/link";
import { links } from "@/lib/nav-links";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center">
      <ul className="flex items-center gap-10 xl:gap-12 uppercase font-black tracking-widest text-sm">
        {links.map((link, i) => {
          const isActive = pathname === link.href;

          return (
            <li className="group" key={link.href}>
              <Link
                href={link.href}
                className="relative pb-1 transition duration-300 text-[#222] hover:text-[var(--color-accent-gold)]"
                style={
                  isActive ? { color: "var(--color-accent-gold)" } : undefined
                }
              >
                {link.label}

                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-accent-gold)] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
