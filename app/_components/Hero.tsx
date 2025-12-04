"use client";

import Image from "next/image";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import Breadcrumbs from "./ui/Breadcrumbs";

const Hero = ({ title }: { title: string }) => {
  const scrollNext = (e: React.MouseEvent) => {
    e.preventDefault();

    const currentSection = (e.target as HTMLElement).closest("section");
    const nextSection =
      currentSection?.nextElementSibling as HTMLElement | null;
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="container !px-0 mx-auto ml-[-15px] lg:ml-[15px]"
    >
      <div className="flex flex-wrap border-b-1 lg:border-1 border-black">
        <div className="w-full lg:w-1/2">
          <HeroCarousel />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col p-12">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="text-3xl lg:text-5xl font-normal tracking-widest mb-4 uppercase lg:leading-13 max-w-[70%]">
              {title}
            </h1>
          </div>

          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <p className="mt-4 text-md font-bold uppercase tracking-widest font-redhat text-center md:text-left">
              Beograd
            </p>
            <div className="text-5xl lg:text-7xl font-extrabold flex-none px-5 mt-8 lg:mt-0">
              <Image
                src="/Logo4.svg"
                alt="Logo"
                width={220}
                height={40}
                className="w-34 sm:w-38 md:w-45 lg:w-48 h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:flex-1 text-gray-600">
          <Breadcrumbs color={"!text-black"} />
        </div>
        <div className="pt-12 pb-8 md:pb-12 lg:pb-16">
          <button
            onClick={scrollNext}
            className="group flex flex-col items-center gap-4"
          >
            <span
              className="text-xs uppercase tracking-widest font-black text-[#bb8c30] 
                       group-hover:text-[#8a6a23] transition"
            >
              Skroluj dole
            </span>

            <svg
              className="w-7 h-7 text-[#bb8c30] group-hover:text-[#8a6a23] 
                      animate-pulse [animation-duration:3s] transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1"></div>
      </div>
    </section>
  );
};

export default Hero;
