const TopBar = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-6 py-3 lg:py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8 text-xs lg:text-sm font-black tracking-widest uppercase">
            <span className="text-[#bb8c30]">
              ✓ Dolazak isti ili sledeći dan
            </span>
            <span className="hidden lg:inline text-[#bb8c30]">
              ✓ 24h hitne intervencije
            </span>
          </div>

          <a
            href="tel:0658488408"
            className="font-black text-sm  tracking-wider hover:text-[#bb8c30] transition"
          >
            065 / 8488 408
          </a>

          <div className="text-sm font-bold tracking-widest uppercase text-[#bb8c30]">
            Beograd – Palilula
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
