import Image from "next/image";
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

        {/* <ServiceCard
          title={` Zamena i popravka automata`}
          description={
            "Automat na roletni je najčešći kvar. Menjamo ili popravljamo automat na svim vrstama roletni."
          }
          icon="/service2.png"
          url={"/usluge/zamena-automata"}
        />
        <ServiceCard
          title={`Ugradnja roletni`}
          description={
            "Izrada u ugranja novih roletni. U ponudi su: aluminijumske, plastične i drvene roletne."
          }
          bgColor={"orange"}
          icon="/service3.png"
          url={"/usluge/ugradnja-roletni"}
        />
        <ServiceCard
          title={`Reparacija drvenih roletni`}
          description={
            "Zaštita ili kompletna reparacija starih drvenih roletni."
          }
          icon="/service4.png"
          url={"/usluge/reparacija-drvenih-roletni"}
        /> */}
      </div>
    </section>
  );
};

export default Services;
