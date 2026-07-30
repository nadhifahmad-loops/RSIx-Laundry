"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".cta-item");
      if (!items) return;
      gsap.fromTo(items, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="kontak" ref={sectionRef} className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary via-[#1D4ED8] to-secondary p-10 sm:p-14 lg:p-20">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="cta-item text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Siap Menggunakan Layanan
              <br />
              Laundry Profesional?
            </h2>
            <p className="cta-item mt-4 mx-auto max-w-lg text-white/80">
              Hubungi kami sekarang dan nikmati pengalaman laundry profesional yang akan membuat pakaian Anda selalu bersih, wangi, dan rapi.
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-item group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              Hubungi Kami
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
