const TopBar = () => {
  return (
    <div className="bg-[var(--color-accent-gold)] text-white">
      <div className="container mx-auto px-6 py-3 lg:py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center lg:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8 text-xs lg:text-sm font-black tracking-widest uppercase">
            <span className="text-black   text-xs sm:text-sm ">
              ✓ Pokrivamo ceo Beograd
            </span>
          </div>
          <div className="flex flex-wrap gap-3 lg:gap-6 justify-center">
            <a
              href="tel:+381643922467"
              className="font-bold  sm:text-sm tracking-wider text-black transition"
            >
              064/3922 467
            </a>
            <a
              href="tel:+381658488408"
              className="font-bold  sm:text-sm tracking-wider text-black transition"
            >
              065/8488 408
            </a>
            <a
              href="tel:+381603339656"
              className="font-bold  sm:text-sm tracking-wider text-black transition"
            >
              060/3339 656
            </a>
          </div>
          <div className="hidden sm:block text-xs sm:text-sm font-bold tracking-widest uppercase  text-black">
            Beograd
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
