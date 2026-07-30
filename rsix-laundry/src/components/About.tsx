"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { CheckCheck, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  "Layanan Express 6 Jam",
  "Harga Terjangkau",
  "Pewangi Premium",
  "Pengerjaan Cepat & Tepat",
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".about-anim");
      if (!items) return;
      gsap.fromTo(items, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-28 bg-[#F8FAFC]">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="about-anim">
            <div className="relative">
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] ring-1 ring-gray-200 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=700&q=80"
                  alt="RSix Laundry - Interior ruang laundry"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-primary/10 ring-1 ring-gray-100">
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-xs text-[#475569]">Tahun Pengalaman</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="about-anim">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                <Sparkles className="h-4 w-4" />
                Tentang Kami
              </span>
            </div>
            <h2 className="about-anim text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#0F172A]">
              Mengapa Memilih{' '}
              <span className="text-primary">RSix Laundry</span>?
            </h2>
            <p className="about-anim text-base leading-relaxed text-[#475569]">
              Kami berkomitmen memberikan pelayanan laundry berkualitas dengan proses pencucian yang higienis, pewangi premium, pengerjaan tepat waktu, dan pelayanan yang ramah untuk setiap pelanggan.
            </p>
            <ul className="about-anim space-y-3 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-[#0F172A]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50">
                    <CheckCheck className="h-3.5 w-3.5 text-[#22C55E]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
