import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const PageHeader = ({ title }: { title: string }) => {
  return (
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
          {title}
        </h1>

        {/* Debela zlatna linija */}
        <div className="mt-10 w-40 h-1 bg-[#bb8c30]" />

        {/* Suptilan podnaslov – opciono */}
        <p className="mt-6 text-xl text-white/70 max-w-3xl">
          Beograd – Palilula – dolazak isti ili sledeći dan
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
