import Breadcrumbs from "@/app/_components/ui/Breadcrumbs";
import ServiceCard from "@/app/_components/sections/ServiceCard";
import { services } from "@/lib/services";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const service = services.find((service) => service.slug === slug);
  if (!service) {
    return {
      title: "Usluga nije pronađena",
    };
  }

  const fullUrl = `https://servis-popravka-roletni.com/usluge/${slug}`;

  return {
    title: service.seoTitle || `${service.title} Beograd`,
    description:
      service.metaDescription ||
      `Brza i povoljna ${service.title.toLowerCase()} na teritoriji celog Beograda. Pozovite 064/3922-467`,

    alternates: {
      canonical: fullUrl,
    },

    openGraph: {
      title: `${service.title} Beograd – Radno vreme 08-20h | Roletne Servis`,
      description: `Pozovite odmah 064/3922-467 • Dolazak za 60 min • Najbolje cene u Beogradu`,
      url: fullUrl,
      siteName: "Roletne Servis",
      images: [
        {
          url: "https://servis-popravka-roletni/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Popravka i servis roletni Beograd – ${service.title}`,
        },
      ],
      locale: "sr_RS",
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }
  const otherServicesCards = services.filter((s) => s.slug !== slug);
  return (
    <main>
      <section className="relative bg-[#1e1e1e] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#bb8c30]" />

        <div className="container mx-auto px-6 py-8 lg:px-8 sm:py-16 lg:py-24">
          <Breadcrumbs color="text-white/60 hover:text-[#bb8c30] transition" />

          <h1
            className="
          font-redhat uppercase font-black tracking-widest text-white 
          text-2xl sm:text-4xl md:text-5xl lg:text-6xl 
          leading-tight mt-8 max-w-6xl
        "
          >
            {service.title}
          </h1>

          <div className="mt-10 w-40 h-1 bg-[#bb8c30]" />

          <p className="mt-6 text-xs sm:text-xl text-white/70 max-w-3xl">
            Beograd – dolazak u najkraćem roku
          </p>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className=" ">
              <div className="prose text-lg  leading-relaxed text-[#333333] max-w-2xl">
                {service.description}
              </div>
            </div>

            <div className=" ">
              <div className="relative group">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                />

                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#bb8c30] transition-all duration-500 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="services-grid">
          {otherServicesCards.length > 0 &&
            otherServicesCards.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                url={`/usluge/${service.slug}`}
                bgColor={service.bgColor}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
