import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  bgColor?: "orange" | "dark" | string;
  icon: string;
  url: string;
}

const ServiceCard = ({
  title,
  description,
  bgColor = "dark",
  icon,
  url,
}: ServiceCardProps) => {
  const isOrange = bgColor === "orange";

  return (
    <Link href={url} className="block group">
      <div
        className={`
          relative h-full min-h-[380px] flex flex-col justify-between p-8 lg:p-10
          transition-all duration-300
          border-4 border-transparent
          group-hover:border-[#bb8c30]
          group-hover:shadow-[8px_8px_0_#bb8c30]
          group-hover:-translate-y-1
          ${
            isOrange
              ? "bg-gradient-to-br from-[#bb8c30] to-[#a0741e]"
              : "bg-gradient-to-br from-[#333333] to-[#1f1f1f]" // idealno svetlija tamna varijanta
          }
        `}
      >
        {/* Suptilni zlatni sjaj na hover */}
        <div className="absolute inset-0 border-4 border-[#bb8c30] opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />

        <div>
          <h3 className="font-redhat font-black uppercase tracking-widest text-2xl lg:text-3xl leading-tight text-white">
            {title}
          </h3>
          <p className="mt-6 text-white/90 text-base lg:text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <Image
            src={icon}
            alt={title}
            width={76}
            height={76}
            className="object-contain transition-all duration-300 
                       brightness-90 group-hover:brightness-110 
                       group-hover:drop-shadow-[0_0_15px_#bb8c30]"
          />

          <svg
            className="w-11 h-11 text-white/50 group-hover:text-[#bb8c30] 
                       group-hover:translate-x-4 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="square" d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
