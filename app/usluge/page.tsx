import Services from "../_components/Services";
import PageHeader from "../_components/ui/PageHeader";

const ServicesPage = () => {
  return (
    <main>
      {/* <Hero title="Naše usluge" /> */}
      <PageHeader title="Naše usluge" />
      <section className="py-16 lg:py-18 lg:pb-0 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          {/* JEDINI tekst koji treba da postoji */}
          <p className="font-redhat text-xl sm:text-2xl lg:text-3xl text-[#333] tracking-wider">
            Specijalizovani smo za popravku i zamenu svih vrsta roletni već 30+
            godina
          </p>
        </div>
      </section>
      <Services />
    </main>
  );
};

export default ServicesPage;
