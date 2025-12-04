"use client";

import Image from "next/image";
import { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";
import { galleryItems } from "@/lib/gallery";

const Gallery = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
      touchNavigation: true,
      loop: true,
    });

    return () => {
      if (lightbox) {
        lightbox.destroy();
      }
    };
  }, []);

  return (
    <section className="bg-stone-100 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="uppercase text-4xl  tracking-widest font-black font-redhat text-gray-900">
          ROLETNE <span className="text-[#bb8c30]">I DELOVI</span>
        </h2>
        <div className="w-32 h-1 bg-[#bb8c30] mx-auto mt-4"></div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden transition-all duration-300 group
                ${
                  item.type === "text"
                    ? "bg-[#111111] text-white p-10 lg:p-12 flex flex-col justify-center"
                    : "bg-white border-2 border-gray-800 h-96 hover:border-[#bb8c30] hover:shadow-[8px_8px_0px_#bb8c30]"
                }
              `}
            >
              {item.type === "text" ? (
                <>
                  <h3 className="uppercase font-redhat text-2xl lg:text-3xl font-black tracking-wider">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-400 text-base lg:text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </>
              ) : (
                <a
                  href={item.src}
                  className="glightbox block relative w-full h-full"
                  data-glightbox={`title: ${item.alt}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 6}
                  />

                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-[#bb8c30] font-black uppercase text-xl tracking-wider">
                      {item.alt}
                    </p>
                  </div>

                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#bb8c30] transition-all duration-300 pointer-events-none" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
