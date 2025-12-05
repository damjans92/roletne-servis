import Image from "next/image";
import { FaViber } from "react-icons/fa";

const SendUsImage = () => {
  return (
    <section className="py-16 lg:py-20 bg-stone-50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#bb8c30]/50 to-transparent" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-block text-center">
                <div className="inline-block group">
                  <Image
                    src="/roletnar-beograd-kontakt.png"
                    width={150}
                    height={150}
                    alt="Pošaljite sliku kvara na Viber"
                    className="shadow-[10px_10px_0_#222]
                 transition-all duration-500 ease-out"
                    priority
                  />
                </div>

                <p className="mt-8">
                  <a
                    href="viber://chat?number=%2B381658488408"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span
                      className="block text-5xl font-black tracking-tighter leading-none
                   text-[#222]
                   group-hover:text-[#bb8c30]
                   transition-colors duration-400
                   
                   group-hover:scale-105
                   inline-block"
                    >
                      065 8488 408
                    </span>

                    <span
                      className="block text-lg font-bold text-[#222]/60 mt-2
                   opacity-0 group-hover:opacity-100
                   group-hover:text-[#bb8c30]
                   transition-all duration-500 delay-75"
                    >
                      → Pošalji sliku kvara na Viber
                    </span>
                  </a>
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-widest text-[#222] leading-tight">
                Pošaljite sliku kvara
              </h2>

              <div className="w-32 h-1.5 bg-[#bb8c30] mt-6 mb-8 mx-auto lg:mx-0" />

              <p className="text-lg lg:text-xl text-[#222]/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Fotografišite problem na roletni i pošaljite nam odmah.
                <br />
                <strong className="text-[#bb8c30]">
                  Odgovor u najkraćem roku.
                </strong>
              </p>

              <a
                href="viber://chat?number=%2B381658488408"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-[#bb8c30] text-white font-black uppercase tracking-widest text-sm hover:bg-[#222] hover:text-[#bb8c30] rounded-lg shadow-lg hover:shadow-2xl hover:shadow-[#bb8c30]/20 transition-all duration-300"
              >
                <FaViber />
                Pošalji preko Vibera
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendUsImage;
