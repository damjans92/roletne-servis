"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
export default function TextCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEVO: Tekst carousel */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {/* Tvoja 3 slajda – ne diraj */}
                <div className="flex-none w-full px-8 lg:px-12 py-16 lg:py-20">
                  <h2 className="font-redhat uppercase text-4xl lg:text-5xl tracking-widest text-[#222] leading-tight">
                    Aluminijumske
                    <br />
                    <span className="font-extrabold text-[#bb8c30]">
                      roletne
                    </span>
                  </h2>
                  <p className="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Punjene pur penom za vrhunsku toplotnu i zvučnu izolaciju.
                    <br />
                    Dostupne u svim RAL bojama i dimenzijama po meri.
                  </p>
                </div>
                <div className="flex-none w-full px-8 lg:px-12 py-16 lg:py-20">
                  <h2 className="font-redhat uppercase text-4xl lg:text-5xl tracking-widest text-[#222] leading-tight">
                    Drvene
                    <br />
                    <span className="font-extrabold text-[#bb8c30]">
                      roletne
                    </span>
                  </h2>
                  <p className="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Izrađene od odabranog belog bora.
                    <br />
                    Prirodni ton, mahagoni ili čokolada – elegancija koja traje.
                  </p>
                </div>
                <div className="flex-none w-full px-8 lg:px-12 py-16 lg:py-20">
                  <h2 className="font-redhat uppercase text-4xl lg:text-5xl tracking-widest text-[#222] leading-tight">
                    Plastične
                    <br />
                    <span className="font-extrabold text-[#bb8c30]">
                      roletne
                    </span>
                  </h2>
                  <p className="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Najbolji odnos cene i kvaliteta.
                    <br />
                    Otporne na vremenske uslove, dostupne u više boja.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DESNO: Slika + strelice + DOTS ISPOD SLIKE */}
          <div className="lg:col-span-7 relative">
            <Image
              src={
                selectedIndex === 0
                  ? "/alu-roletne.jpg"
                  : selectedIndex === 1
                  ? "/wooden-blinds.jpg"
                  : "/plasticne-roletne.jpg"
              }
              alt="Roletne"
              width={730}
              height={410}
              className="w-full object-cover shadow-2xl"
              style={{ height: "410px", objectFit: "cover" }}
              priority
            />

            {/* Oštre strelice */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block w-14 h-14 bg-white border-4 border-gray-800 hover:border-[#bb8c30] hover:bg-[#bb8c30] hover:text-white transition-all shadow-xl"
            >
              <ChevronLeft className="w-9 h-9 mx-auto" strokeWidth={3} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block w-14 h-14 bg-white border-4 border-gray-800 hover:border-[#bb8c30] hover:bg-[#bb8c30] hover:text-white transition-all shadow-xl"
            >
              <ChevronRight className="w-9 h-9 mx-auto" strokeWidth={3} />
            </button>

            {/* Zlatni okvir na hover */}
            <div className="absolute inset-0 border-8 border-transparent hover:border-[#bb8c30] transition-all duration-500 pointer-events-none" />

            {/* DOTS ISPOD SLIKE – centrirani, na svim ekranima */}
            <div className="flex justify-center gap-5 mt-8">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`w-3 h-3 border-2 border-[#bb8c30] transition-all duration-300 
                ${
                  selectedIndex === i
                    ? "bg-[#bb8c30] scale-125"
                    : "bg-transparent hover:bg-[#bb8c30]/50"
                }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
