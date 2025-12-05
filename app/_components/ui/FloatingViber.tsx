import { FaViber } from "react-icons/fa";

export default function FloatingViber() {
  return (
    <a
      href="viber://chat?number=%2B381658488408"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50
                 flex flex-col items-center justify-center
                 w-16 h-16 rounded-full
                 bg-gradient-to-br from-[#bb8c30] to-[#d4a017]    /* prelep zlatni gradijent */
                 text-white shadow-2xl
                 hover:from-[#222] hover:to-[#111]
                 hover:text-[#bb8c30]
                 hover:scale-110
                 hover:shadow-[0_20px_50px_rgba(187,140,48,0.5)]
                 transition-all duration-500 ease-out
                 group"
    >
      <FaViber className="w-9 h-9 drop-shadow-md" />

      <span
        className="absolute -top-12 left-1/2 -translate-x-1/2
                   bg-[#222] text-[#bb8c30] font-black text-sm px-4 py-2 rounded-full
                   opacity-0 group-hover:opacity-100
                   whitespace-nowrap
                   transition-all duration-400
                   shadow-lg"
      >
        065 8488 408
      </span>

      <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-700" />
    </a>
  );
}
