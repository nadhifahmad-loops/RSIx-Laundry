"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Inbox, SprayCan, Thermometer, PackageCheck, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { icon: Inbox, num: "01", title: "Serahkan Cucian", desc: "Antar pakaian ke outlet kami atau gunakan layanan antar jemput gratis." },
  { icon: SprayCan, num: "02", title: "Proses Pencucian", desc: "Pakaian dicuci dengan deterjen premium dan teknik profesional." },
  { icon: Thermometer, num: "03", title: "Pengeringan & Setrika", desc: "Dikeringkan dengan suhu tepat dan disetrika rapi." },
  { icon: PackageCheck, num: "04", title: "Siap Diambil / Diantar", desc: "Pakaian bersih, wangi, dan rapi siap diambil atau diantar." },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll(".how-step");
      if (!items) return;
      gsap.fromTo(items, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Cara Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Mudah & <span className="text-primary">Sederhana</span>
          </h2>
          <p className="mt-4 text-[#475569]">
            Hanya 4 langkah mudah untuk pakaian bersih dan wangi
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-16 left-8 right-8 h-0.5 bg-gray-100 hidden lg:block">
            <div className="h-full w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-1000" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="how-step relative text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="block text-sm font-bold text-primary mb-1">{step.num}</span>
                  <h3 className="text-lg font-semibold text-[#0F172A] mb-1.5">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-[#475569] max-w-xs mx-auto">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
