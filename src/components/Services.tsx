"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400&q=70", title: "Laundry Kiloan", desc: "Cuci + setrika untuk pakaian sehari-hari dengan hasil bersih dan wangi.", slug: "laundry-kiloan" },
  { img: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=400&q=70", title: "Laundry Satuan", desc: "Layanan khusus untuk pakaian spesial yang membutuhkan penanganan ekstra.", slug: "laundry-satuan" },
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=70", title: "Laundry Sepatu", desc: "Cuci sepatu kesayangan Anda kembali bersih dan wangi seperti baru.", slug: "laundry-sepatu" },
  { img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=70", title: "Bed Cover", desc: "Laundry bed cover besar dengan hasil maksimal dan wangi tahan lama.", slug: "bed-cover" },
  { img: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&q=70", title: "Boneka", desc: "Boneka favorit Anda dibersihkan dengan metode khusus yang aman.", slug: "boneka" },
  { img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&q=70", title: "Karpet", desc: "Laundry karpet dengan perawatan khusus untuk hasil bersih maksimal.", slug: "karpet" },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".service-card");
      if (!cards) return;
      gsap.fromTo(cards, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="layanan" ref={sectionRef} className="py-20 sm:py-28 bg-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Solusi Laundry <span className="text-primary">Lengkap</span>
          </h2>
          <p className="mt-4 text-[#475569]">
            Berbagai layanan laundry profesional untuk memenuhi kebutuhan Anda
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <Link
              key={i}
              href={`/layanan/${item.slug}`}
              className="service-card group rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-400 hover:shadow-xl hover:ring-primary/10 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#0F172A]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#475569] mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-2">
                  Lihat Detail <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
