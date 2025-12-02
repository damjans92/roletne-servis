import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="md:col-span-4">
      <Image
        src="/Logo4.svg"
        alt="Roletnar Beograd – Servis i popravka roletni"
        width={240}
        height={50}
        className="w-48 lg:w-56 h-auto filter brightness-50 invert hue-rotate-180 saturate-400"
        priority
      />
      <p className="mt-6 text-sm text-gray-500 leading-relaxed">
        Brza popravka i ugradnja roletni
        <br />
        Beograd – Palilula • Dolazak isti ili sledeći dan
      </p>
    </div>
  );
};

export default Logo;
