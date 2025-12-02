import Image from "next/image";
import React from "react";

const SendUsImage = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEVO – slika + broj */}
            <div className="text-center lg:text-left">
              <Image
                src="/roletnar-beograd-kontakt.png"
                width={160}
                height={160}
                alt="Viber kontakt"
                className="mx-auto lg:mx-0 shadow-xl"
                priority
              />
              <p className="mt-6 text-3xl font-black text-[#222] tracking-wider">
                065 8 488 408
              </p>
            </div>

            {/* DESNO – tekst + dugme */}
            <div className="text-center lg:text-left">
              <h2 className="font-redhat uppercase text-2xl lg:text-3xl font-bold tracking-wider text-[#222]">
                Pošaljite sliku kvara
              </h2>
              <div className="w-20 h-1 bg-[#bb8c30] mt-4 mb-6 mx-auto lg:mx-0"></div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Fotografišite roletnu i pošaljite nam.
                <br />
                Odgovorićemo Vam <strong>za najviše 15 minuta</strong> sa tačnom
                cenom.
              </p>

              <a
                href="viber://chat?number=%2B38165488408"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-[#bb8c30] hover:bg-[#a0741e] text-white font-bold uppercase tracking-wider text-lg
                       border-4 border-[#bb8c30] hover:border-[#a0741e] shadow-lg hover:shadow-xl hover:-translate-y-0.5
                       transition-all duration-200"
              >
                Pošalji sliku preko Vibera
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendUsImage;
