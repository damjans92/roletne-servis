import Image from "next/image";
import Link from "next/link";
import React from "react";
import TopBar from "./TopBar";
import { Phone, Menu } from "lucide-react";
import { FaBars, FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      <TopBar />
      <div className="px-4 py-8 lg:py-12">
        <div className="container mx-auto flex items-center justify-between ">
          <button className=" flex lg:hidden">
            <FaBars className="w-full h-full" size={28} />
          </button>
          <Link href="/">
            <Image
              src={"/Logo4.svg"}
              width={250}
              height={60}
              priority={true}
              alt="Logo"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
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
          <button className=" flex lg:hidden">
            <FaPhoneAlt className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
