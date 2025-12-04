const TopBar = () => {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-6 py-3 lg:py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8 text-xs lg:text-sm font-black tracking-widest uppercase">
            <span className="text-[var(--color-accent-gold)]">
              ✓ Pokrivamo ceo Beograd
            </span>
          </div>

          <a
            href="tel:0658488408"
            className="font-black text-sm  tracking-wider hover:text-[var(--color-accent-gold)] transition"
          >
            065 / 8488 408
          </a>

          <div className="text-sm font-bold tracking-widest uppercase text-[var(--color-accent-gold)]">
            Beograd
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
