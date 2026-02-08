import CTA from "./CTA";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-accent-gold)] text-white overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-transparent via-[#bb8c30] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <Logo />
          <div className="md:col-span-1"></div>
          <CTA />
          <Navigation />
        </div>

        <div className="mt-16 pt-8 border-t border-white text-center text-xs tracking-widest text-white">
          © {new Date().getFullYear()} Servis i popravka roletni - Roletnar
          Beograd • Sva prava zadržana
        </div>
      </div>
    </footer>
  );
};

export default Footer;
