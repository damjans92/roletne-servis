const About = () => {
  return (
    <section id="about" className="container mx-auto py-20">
      <div className="flex flex-wrap">
        <div className="order-2 lg:order-1 lg:w-5/12 flex flex-col md:text-center lg:justify-center lg:items-center">
          <h2 className="uppercase pb-7 text-2xl lg:text-4xl tracking-[4px] font-bold font-redhat">
            <span className="text-(--color-accent-gold)">O</span> nama
          </h2>

          <p className="pb-6 md:px-10 text-lg">
            Naš servis je specijalizovana kompanija za popravki u izradu svih
            vrsta roletni. Poslujemo već 35 godine i stekli smo veliki broj
            zadovoljnih korisnika naših usluga. Karakterišu nas brz i kvalitetan
            rad iskusnih majstora. Radimo na svim vrstama roletni.
            <br /> <br />
            Pružamo usluge servisiranja roletni u{" "}
            <strong>celom Beogradu</strong>. Ugradnju i izradu roletni radimo i
            u široj okolini Beograda.
          </p>
        </div>
        <div className="order-1 lg:order-2 lg:w-7/12 mb-6 lg:mb-0 bg-gray-400 h-full w-full border-1">
          <img src="/roletnar.jpg" alt="Dr Savkovic" className="grayscale" />
        </div>
      </div>
    </section>
  );
};

export default About;
