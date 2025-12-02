"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { links } from "@/lib/nav-links";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden z-50"
        aria-label="Otvori meni"
      >
        <div className="space-y-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="block w-8 h-0.5 bg-[#222]" />
          ))}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 z-50 lg:hidden"
            />

            {/* Meni – slide odozgo, SHARP uglovi */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-16 left-4 right-4 z-50 lg:hidden"
            >
              <div className="bg-white/95 backdrop-blur-xl border-2 border-[#222] shadow-[8px_8px_0px_#222] overflow-hidden">
                {/* X dugme */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 transition"
                >
                  <FaTimes size={28} color="#222" />
                </button>

                {/* Linkovi – stagger */}
                <nav className="pt-20 pb-12 px-8">
                  <ul className="space-y-8 text-center">
                    {links.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-4xl font-black uppercase tracking-wider text-[#222] hover:text-[#bb8c30] transition relative group"
                        >
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#bb8c30] group-hover:w-full transition-all duration-500" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* CTA – bez scale-a = bez treptaja */}
                <div className="px-8 pb-12 text-center">
                  <motion.a
                    href="tel:0658488408"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="inline-flex items-center gap-4 bg-[#bb8c30] text-black font-black uppercase tracking-widest text-xl px-12 py-6 hover:bg-[#d4a857] transition-all shadow-[6px_6px_0px_#222] hover:shadow-[8px_8px_0px_#222] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  >
                    <FaPhoneAlt size={28} />
                    065 / 8488 408
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
