"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";

const services = [
  { label: "Laundry Kiloan", href: "/layanan/laundry-kiloan" },
  { label: "Laundry Satuan", href: "/layanan/laundry-satuan" },
  { label: "Laundry Sepatu", href: "/layanan/laundry-sepatu" },
  { label: "Bed Cover", href: "/layanan/bed-cover" },
  { label: "Boneka", href: "/layanan/boneka" },
  { label: "Karpet", href: "/layanan/karpet" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [layananOpen, setLayananOpen] = useState(false);
  const [mobileLayananOpen, setMobileLayananOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        <Link href="/#beranda" className="flex items-center gap-2.5" onClick={handleClick}>
          <Image
            src="/images/logo.png"
            alt="RSix Laundry"
            width={36}
            height={36}
            className="h-9 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setLayananOpen(true)}
            onMouseLeave={() => setLayananOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-[#475569] transition-all duration-300 hover:bg-primary/5 hover:text-primary"
            >
              Layanan
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${layananOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute top-full left-0 w-52 pt-1 transition-all duration-300 ${
                layananOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="rounded-2xl bg-white shadow-xl ring-1 ring-gray-100 overflow-hidden">
                {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={handleClick}
                  className="block px-5 py-3 text-sm font-medium text-[#475569] transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  {s.label}
                </Link>
              ))}
              </div>
            </div>
          </div>

          <Link
            href="/syarat-ketentuan"
            onClick={handleClick}
            className="rounded-lg px-4 py-2 text-sm font-medium text-[#475569] transition-all duration-300 hover:bg-primary/5 hover:text-primary"
          >
            Syarat & Ketentuan
          </Link>
        </div>

        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-xl active:scale-95"
        >
          <Phone className="h-4 w-4" />
          Hubungi Kami
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden relative flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-[#0F172A] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#0F172A] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#0F172A] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-gray-100 bg-white/95 px-4 py-5 backdrop-blur-xl space-y-1">
          <div>
            <button
              onClick={() => setMobileLayananOpen(!mobileLayananOpen)}
              className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-[#475569] transition-colors hover:bg-primary/5 hover:text-primary"
            >
              Layanan
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileLayananOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileLayananOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="ml-4 border-l-2 border-primary/20 pl-4 space-y-1 mt-1 mb-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={handleClick}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#475569] transition-colors hover:bg-primary/5 hover:text-primary"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/syarat-ketentuan"
            onClick={handleClick}
            className="flex w-full items-center rounded-lg px-3 py-3 text-sm font-medium text-[#475569] transition-colors hover:bg-primary/5 hover:text-primary"
          >
            Syarat & Ketentuan
          </Link>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-[#1D4ED8]"
          >
            <Phone className="h-4 w-4" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </header>
  );
}
