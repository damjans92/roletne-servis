import PageHeader from "../_components/ui/PageHeader";

export const metadata = {
  title: "O nama | 35 godina iskustva",
  description: "Više od 30 godina iskustva u popravci i ugradnji roletni…",

  alternates: {
    canonical: "https://servis-popravka-roletni.com/o-nama",
  },

  openGraph: {
    title:
      "Servis i popravka roletni Beograd – 35 godina iskustva u popravci roletni",
    description:
      "Preko 35 godina rada • Hiljade zadovoljnih klijenata • Brz dolazak na teren • Celim Beogradom i okolinom",
    url: "https://servis-popravka-roletni.com/o-nama",
    siteName: "Servis i popravka roletni",
    images: [
      {
        url: "https://servis-popravka-roletni.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Servis i popravka roletni Beograd – 35 godina iskustva u popravci i izradi roletni",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
};

const AboutUs = () => {
  return (
    <main>
      <PageHeader title="O nama" />
      <section id="about" className="py-20 ">
        <div className="container mx-auto flex flex-wrap">
          <div className=" lg:w-5/12 flex flex-col md:text-center   ">
            <p className="pb-6 md:px-10">
              Naš servis je specijalizovana kompanija za popravki u izradu svih
              vrsta roletni. Poslujemo već 35 godina i stekli smo veliki broj
              zadovoljnih korisnika naših usluga. Karakterišu nas brz i
              kvalitetan rad iskusnih majstora. Radimo na svim vrstama roletni.
              <br /> <br />
              Pružamo usluge servisiranja roletni u{" "}
              <strong>celom Beogradu</strong>. Ugradnju i izradu roletni radimo
              i u široj okolini Beograda.
            </p>
          </div>
          <div className="  lg:w-7/12 mb-6 lg:mb-0 bg-gray-400 h-full w-full border-1">
            <img src="/roletnar.jpg" alt="Dr Savkovic" className="grayscale" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
