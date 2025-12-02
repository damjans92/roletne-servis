import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

const links = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/usluge", label: "Usluge" },
  { href: "/galerija", label: "Galerija" },
  { href: "/kontakt", label: "Kontakt" },
];

const Navbar = () => {
  return (
    <header>
      <TopBar />

      <div className="px-4 py-8 lg:py-12">
        <div className="container mx-auto flex items-center justify-between">
          {/* MOBILNI MENI – zamena za FaBars */}
          <MobileMenu links={links} />

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <Image
              src="/Logo4.svg"
              width={250}
              height={60}
              priority
              alt="Roletnar Beograd"
              className="w-auto h-auto"
            />
          </Link>

          {/* Desktop navigacija */}
          <nav className="hidden lg:flex items-center">
            <ul className="flex items-center gap-10 xl:gap-12 uppercase font-black tracking-widest text-sm">
              <li className="group">
                <Link
                  href="/"
                  className="text-[#222] hover:text-[#bb8c30] transition duration-300 relative pb-1"
                >
                  Početna
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bb8c30] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/o-nama"
                  className="text-[#222] hover:text-[#bb8c30] transition duration-300 relative pb-1"
                >
                  O nama
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bb8c30] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/usluge"
                  className="text-[#222] hover:text-[#bb8c30] transition duration-300 relative pb-1"
                >
                  Usluge
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bb8c30] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/galerija"
                  className="text-[#222] hover:text-[#bb8c30] transition duration-300 relative pb-1"
                >
                  Galerija
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bb8c30] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li className="group">
                <Link
                  href="/kontakt"
                  className="text-[#222] hover:text-[#bb8c30] transition duration-300 relative pb-1"
                >
                  Kontakt
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#bb8c30] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Telefon ikonica na mobilnom – možeš je ostaviti ili skloniti */}
          <a href="tel:0658488408" className="lg:hidden">
            <FaPhoneAlt size={26} color="#222" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
