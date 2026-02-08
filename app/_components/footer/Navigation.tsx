import Link from "next/link";

const Navigation = () => {
  return (
    <div className="md:col-span-4 text-center md:text-right">
      <h4 className="text-xs uppercase tracking-widest text-[#bb8c30] mb-6">
        Linkovi
      </h4>
      <nav className="space-y-4 text-sm">
        <Link href="/" className="block hover:text-black transition">
          Početna
        </Link>
        <Link
          href="/usluge/zamena-gurtni"
          className="block hover:text-black transition"
        >
          Zamena gurtni
        </Link>
        <Link
          href="/usluge/zamena-automata"
          className="block hover:text-black transition"
        >
          Zamena automata
        </Link>
        <Link
          href="/usluge/ugradnja-roletni"
          className="block hover:text-black transition"
        >
          Ugradnja roletni
        </Link>
        <Link
          href="/usluge/reparacija-drvenih-roletni"
          className="block hover:text-black transition"
        >
          Reparacija drvenih roletni
        </Link>

        <Link href="/o-nama" className="block hover:text-black transition">
          O nama
        </Link>
        <Link href="/kontakt" className="block hover:text-black transition">
          Kontakt
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
