"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const api = emblaApi;
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const slides = [
    {
      headline: "Zamena gurtni",
      text: "Brzo i pouzdano",
    },
    {
      headline: "Popravka roletni",
      text: "Sve vrste kvara – aluminijumske, drvene, plastične",
    },
    {
      headline: "30+ godina iskustva",
      text: "Garancija na svaki posao – majstor kojem verujete",
    },
  ];

  return (
    <section className="relative h-[60vh] min-h-[560px]   overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/zamena-gurtne.jpg"
          alt="Majstor popravlja roletnu"
          fill
          priority
          className="object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />
      </div>

      <div className="relative h-full flex items-center justify-center z-10">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, i) => (
                <div key={i} className="flex-none w-full">
                  <div className="max-w-5xl mx-auto">
                    <h2 className="font-redhat uppercase font-extralight tracking-widest text-white text-5xl sm:text-6xl md:text-6xl  leading-tight mb-6">
                      {slide.headline}
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-200 font-light tracking-wide mb-10 max-w-md mx-auto">
                      {slide.text}
                    </p>
                    <a
                      href="tel:+381643922467"
                      className="inline-flex items-center gap-3 bg-[#bb8c30] hover:bg-[#d4a050] text-white font-redhat font-medium uppercase tracking-wider px-10 py-5 transition-all hover:scale-105 hover:shadow-2xl rounded-sm"
                    >
                      Pozovite odmah
                      <ChevronRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-1  transition-all duration-500 ${
              selectedIndex === i
                ? "w-12 bg-[#bb8c30]"
                : "w-3 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Idi na slajd ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
        <button
          onClick={scrollPrev}
          className="absolute left-8 pointer-events-auto opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 w-14 h-14 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center hover:bg-[#bb8c30] hover:border-[#bb8c30]"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-8 pointer-events-auto opacity-0 group-hover/section:opacity-100 transition-opacity duration-300 w-14 h-14 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center hover:bg-[#bb8c30] hover:border-[#bb8c30]"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>
    </section>
  );
}
