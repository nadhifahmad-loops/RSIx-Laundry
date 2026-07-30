"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(".hero-heading span", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 }, "-=0.3")
        .fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
        .fromTo(".hero-buttons a", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.12 }, "-=0.2")
        .fromTo(".hero-stats > div", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, "-=0.2")
        .fromTo(".hero-illustration", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.6");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="beranda" ref={containerRef} className="relative min-h-screen overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1400&q=80"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-white/10" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/[0.04] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20 min-h-[calc(100vh-8rem)]">
          <div className="relative z-10 pt-8 lg:pt-0">

            <h1 className="hero-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#0F172A]">
              <span className="block">Laundry Bersih,</span>
              <span className="block text-primary">Cepat,</span>
              <span className="block">dan Terpercaya.</span>
            </h1>

            <p className="hero-desc mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-[#475569]">
              RSix Laundry memberikan layanan laundry profesional dengan hasil bersih, wangi, rapi, dan pengerjaan yang cepat untuk kebutuhan keluarga maupun perkantoran.
            </p>

            <div className="hero-buttons mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-xl active:scale-95"
              >
                Hubungi via WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#layanan"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-[#0F172A] shadow-sm transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 active:scale-95"
              >
                Lihat Layanan
              </a>
            </div>

            <div className="hero-stats mt-10 flex items-center gap-8 sm:gap-12">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#0F172A]">1000+</p>
                <p className="text-sm text-[#475569] mt-0.5">Pelanggan</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#0F172A]">5★</p>
                <p className="text-sm text-[#475569] mt-0.5">Rating Pelanggan</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-[#0F172A]">100%</p>
                <p className="text-sm text-[#475569] mt-0.5">Kepuasan</p>
              </div>
            </div>
          </div>

          <div className="hero-illustration relative rounded-[32px] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-[400px]" />
        </div>
      </div>
    </section>
  );
}
