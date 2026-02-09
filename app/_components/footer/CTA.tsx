import Link from "next/link";

const CTA = () => {
  return (
    <div className="md:col-span-3 text-center md:text-left">
      <h4 className="text-xs uppercase tracking-widest text-[#bb8c30] mb-6">
        Pozovite odmah
      </h4>
      <div className="space-y-4 text-xl font-bold">
        <a
          href="tel:+381643922467"
          className="block hover:text-black transition"
        >
          064 / 3922 467
        </a>
        <a
          href="tel:+381658488408"
          className="block hover:text-black transition"
        >
          065 / 8488 408
        </a>

        <a
          href="tel:+381603339656"
          className="block hover:text-black transition"
        >
          060 / 3339 656
        </a>
      </div>

      <Link
        href="tel:+381643922467"
        className="mt-10 inline-block border-2 border-white text-white hover:bg-[#bb8c30] hover:text-black px-10 py-4 uppercase tracking-widest text-sm font-black transition duration-300"
      >
        Pozovite sada
      </Link>
    </div>
  );
};

export default CTA;
