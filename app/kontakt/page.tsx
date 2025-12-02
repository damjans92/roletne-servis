import { Phone, Clock, Mail, MapPin } from "lucide-react";
import PageHeader from "../_components/PageHeader";

const ContactPage = () => {
  return (
    <main>
      <PageHeader title="Kontakt" />

      <section className="py-20 ">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* <h1 className="text-center text-4xl lg:text-5xl font-extralight tracking-widest uppercase mb-16 lg:mb-10   text-black  py-10">
          Kontakt
        </h1> */}

          <div className="grid md:grid-cols-2 md:gap-0">
            <div className="order-2 md:order-1 h-96 md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3780.6911350433247!2d20.497611681968248!3d44.774319826168764!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a71d1d92fc845%3A0xebf4ebf097ca252f!2sDr%20Savkovi%C4%87%20Dental%20Office!5e0!3m2!1sen!2srs!4v1637866099433!5m2!1sen!2srs"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Lokacija"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>

            <div className="order-1 md:order-2 bg-white md:bg-[#4a494a] text-black md:text-white shadow-2xl">
              <div className="border-t-4 border-[#bb8c30] px-10 lg:px-20 pt-16 pb-24">
                <div className="space-y-12 text-lg lg:text-xl">
                  <div className="flex items-start gap-7">
                    <Clock className="w-8 h-8 lg:w-9 lg:h-9 text-[#bb8c30] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Radno vreme</p>
                      <p className="mt-4 text-gray-600 md:text-gray-300">
                        Pon – Pet:{" "}
                        <span className="font-normal">11:00 – 19:00</span>
                      </p>
                      <p className="text-gray-600 md:text-gray-300">
                        Subota i nedelja:{" "}
                        <span className="font-normal">po pozivu</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-7">
                    <Phone className="w-8 h-8 lg:w-9 lg:h-9 text-[#bb8c30] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <div className="mt-4 space-y-3">
                        <a
                          href="tel:+381643922467"
                          className="block text-gray-700 md:text-gray-200 hover:text-[#bb8c30] transition"
                        >
                          064 / 39 22 467
                        </a>
                        <a
                          href="tel:+381638631101"
                          className="block text-gray-700 md:text-gray-200 hover:text-[#bb8c30] transition"
                        >
                          063 / 863 11 01
                        </a>
                        <a
                          href="tel:+381658488408"
                          className="block text-gray-700 md:text-gray-200 hover:text-[#bb8c30] transition"
                        >
                          065 / 848 88 08
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-7">
                    <Mail className="w-8 h-8 lg:w-9 lg:h-9 text-[#bb8c30] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:info@email.rs"
                        className="mt-4 block text-gray-700 md:text-gray-200 hover:text-[#bb8c30] transition"
                      >
                        info@email.rs
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-7 pt-10 border-t border-gray-200 md:border-gray-700">
                    <MapPin className="w-8 h-8 lg:w-9 lg:h-9 text-[#bb8c30]" />
                    <p className="text-gray-600 md:text-gray-300">
                      Beograd, Srbija
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
