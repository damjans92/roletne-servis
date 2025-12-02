import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/services";

const Services = () => {
  return (
    <section className="container mx-auto py-20">
      <h2 className="uppercase pb-12 text-2xl lg:text-4xl tracking-[4px] font-bold text-center font-redhat"></h2>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.shortDescription}
            icon={service.icon}
            url={"/usluge/" + service.slug}
            bgColor={service.bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
