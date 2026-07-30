"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Timer, BadgePercent, Sparkles, Smile, ShieldCheck, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const items = [
  { icon: Timer, title: "Express Service", desc: "Pengerjaan cepat dengan layanan express selesai hanya 6 jam." },
  { icon: BadgePercent, title: "Harga Bersahabat", desc: "Harga terjangkau untuk semua kalangan tanpa mengurangi kualitas." },
  { icon: Sparkles, title: "Teknologi Laundry Modern", desc: "Menggunakan mesin dan teknik pencucian terkini." },
  { icon: Smile, title: "Pelayanan Ramah", desc: "Tim profesional yang siap membantu dengan senyuman." },
  { icon: ShieldCheck, title: "Garansi Kebersihan", desc: "Hasil bersih maksimal atau kami cuci ulang gratis." },
  { icon: Clock, title: "Pengerjaan Tepat Waktu", desc: "Tepat waktu sesuai janji, tidak pernah molor." },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll(".wcu-card");
      if (!cards) return;
      gsap.fromTo(cards, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="keunggulan" ref={sectionRef} className="py-20 sm:py-28 bg-[#F8FAFC]">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Kenapa Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Keunggulan <span className="text-primary">RSix Laundry</span>
          </h2>
          <p className="mt-4 text-[#475569]">
            Kami berkomitmen memberikan pelayanan terbaik untuk setiap pelanggan
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="wcu-card group rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-primary/10 hover:-translate-y-0.5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-1.5">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#475569]">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
