"use client";

import Image from "next/image";
import HeroCarousel from "./HeroCarousel";
import Breadcrumbs from "./Breadcrumbs";

const Hero2 = ({ title }: { title: string }) => {
  const scrollNext = (e: React.MouseEvent) => {
    e.preventDefault();
    const next = (e.target as HTMLElement).closest(
      "section"
    )?.nextElementSibling;
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        {/* Levo – carousel */}
        <div className="w-full lg:w-1/2">
          <HeroCarousel />
        </div>

        {/* Desno – bela ploča */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-between p-10 lg:p-20">
          {/* SAMO JEDNA REČ – najjača moguća poruka */}
          <div>
            <h1 className="font-redhat uppercase font-extrabold tracking-widest text-[#222] text-6xl lg:text-7xl xl:text-8xl leading-none">
              Roletnar
            </h1>
          </div>

          {/* DONJI DEO – sve ostalo suptilno i skupo */}
          <div className="flex flex-col sm:flex-row justify-between items-end gap-12">
            <div className="text-center lg:text-left">
              <p className="font-redhat uppercase tracking-widest text-[#333] text-2xl leading-tight">
                Beograd
              </p>
              <p className="font-black text-[#bb8c30] text-4xl leading-tight">
                Palilula
              </p>
            </div>

            <div className="text-right">
              <p className="text-gray-700 text-lg">Brza popravka roletni</p>
              <p className="font-black text-[#222] text-3xl mt-1 tracking-wider">
                065 8 488 408
              </p>
            </div>
          </div>

          {/* Logo ide malo iznad donje ivice – premium detalj */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-16 lg:bottom-12">
            <Image
              src="/Logo4.svg"
              alt="Roletnar"
              width={280}
              height={60}
              className="w-64 lg:w-72 h-auto opacity-90"
              priority
            />
          </div>
        </div>
      </div>

      {/* Donja traka */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-6 border-t border-gray-200">
        <Breadcrumbs color="text-gray-600" />
        <button
          onClick={scrollNext}
          className="uppercase tracking-widest text-sm text-gray-600 hover:text-[#bb8c30]"
        >
          Skroluj dole ↓
        </button>
      </div>
    </section>
  );
};

export default Hero2;
