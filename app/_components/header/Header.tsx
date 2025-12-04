import Image from "next/image";
import Link from "next/link";
import TopBar from "./TopBar";
import { FaBars, FaPhoneAlt } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <TopBar />

      <div className="px-4 py-8 lg:py-12">
        <div className="container mx-auto flex items-center justify-between">
          <MobileMenu />

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <Image
              src="/roletne-servis.svg"
              width={250}
              height={60}
              priority
              alt="Roletnar Beograd - Servis i popravka roletni"
              className="w-auto h-auto"
            />
          </Link>
          <Navbar />
          <a href="tel:+381643922467" className="lg:hidden">
            <FaPhoneAlt size={26} color="#222" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
