import Breadcrumbs from "@/app/_components/ui/Breadcrumbs";
import ServiceCard from "@/app/_components/ServiceCard";
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

  return {
    title: service.seoTitle,
    description: service.metaDescription,
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
      {/* HERO – perfect as-is now, just tiny polish */}
      <section className="relative bg-[#1e1e1e] overflow-hidden">
        {/* Zlatna linija na vrhu */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#bb8c30]" />

        <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <Breadcrumbs color="text-white/60 hover:text-[#bb8c30] transition" />

          <h1
            className="
          font-redhat uppercase font-black tracking-widest text-white 
          text-4xl sm:text-5xl lg:text-6xl 
          leading-tight mt-8 max-w-6xl
        "
          >
            {service.title}
          </h1>

          {/* Debela zlatna linija */}
          <div className="mt-10 w-40 h-1 bg-[#bb8c30]" />

          {/* Suptilan podnaslov – opciono */}
          <p className="mt-6 text-xl text-white/70 max-w-3xl">
            Beograd – dolazak isti ili sledeći dan
          </p>
        </div>
      </section>

      {/* CONTENT SECTION – the big upgrades */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Text – left side */}
            <div className="order-2 lg:order-1">
              <div className="prose text-lg  leading-relaxed text-[#333333] max-w-2xl">
                {service.description}
              </div>

              {/* Optional subtle CTA if you ever want one */}
              {/* <a href="tel:+381..." className="inline-block mt-10 text-[#bb8c30] font-medium hover:underline">
            Pozovite za besplatnu konsultaciju →
          </a> */}
            </div>

            {/* Image – right side on desktop */}
            <div className="order-1 lg:order-2">
              <div className="relative group">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Very subtle gold border on hover – pure luxury */}
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
                url={service.slug}
                bgColor={service.bgColor}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
