"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ArrowRight, HelpCircle, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Laundry Kiloan",
    price: "Rp7.000",
    unit: "/kg",
    desc: "Cocok untuk pakaian sehari-hari",
    features: ["Cuci + setrika", "Pewangi premium", "Lipat rapi", "Minimal 3 kg"],
    popular: false,
  },
  {
    name: "Express",
    price: "Rp12.000",
    unit: "/kg",
    desc: "Untuk Anda yang butuh cepat",
    features: ["Selesai 6 jam", "Cuci + setrika", "Pewangi premium", "Prioritas utama"],
    popular: true,
  },
  {
    name: "Laundry Sepatu",
    price: "Hubungi",
    unit: "Admin",
    desc: "Untuk sepatu kesayangan Anda",
    features: ["Penanganan khusus", "Bersih maksimal", "Aman untuk sepatu", "Konsultasi gratis"],
    popular: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".price-card");
      if (!cards) return;
      gsap.fromTo(cards, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="harga" ref={sectionRef} className="py-20 sm:py-28 bg-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Harga Terjangkau
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Pilih Paket <span className="text-primary">Laundry</span>
          </h2>
          <p className="mt-4 text-[#475569]">
            Harga transparan tanpa biaya tersembunyi
          </p>
        </div>

        <div className="grid max-w-5xl mx-auto gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`price-card relative rounded-2xl bg-white p-8 shadow-sm ring-1 transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "ring-primary/20 shadow-lg shadow-primary/5 scale-105 lg:scale-110"
                  : "ring-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-xs font-semibold text-white shadow-lg">
                    Paling Populer
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-[#0F172A] mb-1">{plan.name}</h3>
              <p className="text-sm text-[#475569] mb-5">{plan.desc}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold tracking-tight text-[#0F172A]">{plan.price}</span>
                <span className="text-sm font-medium text-[#475569]">{plan.unit}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[#475569]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 active:scale-95 ${
                  plan.popular
                    ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-[#1D4ED8]"
                    : "bg-[#F1F5F9] text-[#0F172A] hover:bg-primary hover:text-white"
                }`}
              >
                {plan.price === "Hubungi" ? "Hubungi Admin" : "Pilih Paket"}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[#475569]">
          <HelpCircle className="mr-1 inline h-4 w-4" />
          Harga dapat berubah sesuai jenis pakaian. Hubungi kami untuk info detail.
        </p>
      </div>
    </section>
  );
}
