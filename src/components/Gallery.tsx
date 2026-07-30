"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { label: "Mesin Laundry", src: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=600&q=80", span: "md:row-span-2" },
  { label: "Packing", src: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&q=80", span: "" },
  { label: "Proses Setrika", src: "https://images.unsplash.com/photo-1585128792020-5d2b9b201b3d?w=600&q=80", span: "" },
  { label: "Laundry Sepatu", src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80", span: "" },
  { label: "Interior", src: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&q=80", span: "" },
  { label: "Hasil Laundry", src: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?w=600&q=80", span: "" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".gallery-item");
      if (!items) return;
      gsap.fromTo(items, { opacity: 0, y: 30, scale: 0.95 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="galeri" ref={sectionRef} className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Galeri
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Lihat <span className="text-primary">Langsung</span>
          </h2>
          <p className="mt-4 text-[#475569]">
            Beberapa momen di tempat laundry kami
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:grid-rows-2">
          {images.map((img, i) => (
            <div
              key={i}
              className={`gallery-item group relative overflow-hidden rounded-2xl bg-gray-200 ring-1 ring-gray-100 min-h-[200px] sm:min-h-[240px] ${img.span} ${i === 0 ? "md:row-span-2" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-sm font-semibold text-white drop-shadow-sm">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
