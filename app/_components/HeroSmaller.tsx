import Image from "next/image";
import React from "react";

const HeroSmaller = ({ title }: { title: string }) => {
  return (
    <section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
      <Image
        src="/drvene-roletne.jpg"
        alt="Popravka i zamena drvenih roletni Beograd"
        fill
        priority
        className="object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 lg:pb-16">
        <h1 className="font-redhat uppercase font-extralight tracking-widest text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center px-6">
          {title}
        </h1>
        <p className="mt-4 text-xl lg:text-2xl text-gray-200 font-light">
          Beograd – Palilula – isti ili sledeći dan
        </p>
      </div>
    </section>
  );
};

export default HeroSmaller;
