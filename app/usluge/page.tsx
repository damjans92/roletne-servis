import Services from "../_components/sections/Services";
import PageHeader from "../_components/ui/PageHeader";

export const metadata = {
  title: "Usluge – Servis i Popravka Roletni Beograd | 30+ Godina Iskustva",
  description:
    "Specijalizovani smo za popravku i zamenu svih vrsta roletni već više od 30 godina. Brza intervencija, kvalitetna ugradnja i servis roletni u Beogradu. Roletne pružaju izolaciju, zaštitu i bezbednost — a mi ih vraćamo u ispravno stanje.",
  alternates: {
    canonical: "https://servis-popravka-roletni.com/usluge",
  },
  openGraph: {
    title: "Usluge – Servis i Popravka Roletni Beograd",
    description:
      "Profesionalna popravka i zamena svih vrsta roletni. Preko 30 godina iskustva i brza usluga širom Beograda.",
    url: "https://servis-popravka-roletni.com/usluge",
    siteName: "Servis i popravka roletni",
    images: [
      {
        url: "https://servis-popravka-roletni.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Servis i popravka roletni Beograd",
      },
    ],
    locale: "sr_RS",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const ServicesPage = () => {
  return (
    <main>
      <PageHeader title="Naše usluge" />
      <section className="py-16 lg:py-18 lg:pb-0 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="font-redhat text-xl   text-[#333] tracking-wider">
            Specijalizovani smo za popravku i zamenu svih vrsta roletni već 30+
            godina.
          </p>
        </div>
      </section>
      <Services />
    </main>
  );
};

export default ServicesPage;
