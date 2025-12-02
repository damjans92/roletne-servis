import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-transparent via-[#bb8c30] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* LOGO + opis */}
          <div className="md:col-span-4">
            <Image
              src="/Logo4.svg"
              alt="Roletnar Beograd – Servis i popravka roletni"
              width={240}
              height={50}
              className="w-48 lg:w-56 h-auto filter brightness-50 invert hue-rotate-180 saturate-400"
              priority
            />
            <p className="mt-6 text-sm text-gray-500 leading-relaxed">
              Brza popravka i ugradnja roletni
              <br />
              Beograd – Palilula • Dolazak isti ili sledeći dan
            </p>
          </div>

          {/* Prazan prostor */}
          <div className="md:col-span-1"></div>

          {/* BROJEVI + dugme */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-xs uppercase tracking-widest text-[#bb8c30] mb-6">
              Pozovite odmah
            </h4>
            <div className="space-y-4 text-xl font-bold">
              <a
                href="tel:0658488408"
                className="block hover:text-[#bb8c30] transition"
              >
                065 / 8488 408
              </a>
              <a
                href="tel:0643922467"
                className="block hover:text-[#bb8c30] transition"
              >
                064 / 39 22 467
              </a>
            </div>

            <Link
              href="tel:0658488408"
              className="mt-10 inline-block border-2 border-[#bb8c30] text-[#bb8c30] hover:bg-[#bb8c30] hover:text-black px-10 py-4 uppercase tracking-widest text-sm font-black transition duration-300"
            >
              Pozovite sada
            </Link>
          </div>

          {/* NAVIGACIJA – samo ono što stvarno postoji */}
          <div className="md:col-span-4 text-center md:text-right">
            <h4 className="text-xs uppercase tracking-widest text-[#bb8c30] mb-6">
              Linkovi
            </h4>
            <nav className="space-y-4 text-sm">
              <Link href="/" className="block hover:text-[#bb8c30] transition">
                Početna
              </Link>
              <Link
                href="/usluge/zamena-gurtni"
                className="block hover:text-[#bb8c30] transition"
              >
                Zamena gurtni
              </Link>
              <Link
                href="/usluge/zamena-automata"
                className="block hover:text-[#bb8c30] transition"
              >
                Zamena automata
              </Link>
              <Link
                href="/usluge/ugradnja-roletni"
                className="block hover:text-[#bb8c30] transition"
              >
                Ugradnja roletni
              </Link>
              <Link
                href="/usluge/reparacija-drvenih-roletni"
                className="block hover:text-[#bb8c30] transition"
              >
                Reparacija drvenih roletni
              </Link>

              <Link
                href="/o-nama"
                className="block hover:text-[#bb8c30] transition"
              >
                O nama
              </Link>
              <Link
                href="/kontakt"
                className="block hover:text-[#bb8c30] transition"
              >
                Kontakt
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs tracking-widest text-gray-600">
          © {new Date().getFullYear()} Roletnar Beograd • Sva prava zadržana
        </div>
      </div>
    </footer>
  );
};

export default Footer;
