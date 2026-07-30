"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";
import { Package, Clock, CheckCheck, ArrowLeft, Sparkles, Phone, ChevronRight } from "lucide-react";

export default function LaundrySatuanPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".detail-fade", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const features = [
    "Penanganan khusus per item",
    "Presisi tinggi untuk bahan spesial",
    "Setrika profesional rapi maksimal",
    "Proses cepat 1 hari",
    "Bisa pilih treatment tambahan",
    "Packing premium",
  ];

  const steps = [
    { icon: "1", title: "Pilih Item", desc: "Pilih pakaian spesial yang ingin di-laundry" },
    { icon: "2", title: "Konsultasi", desc: "Kami sarankan treatment terbaik" },
    { icon: "3", title: "Proses", desc: "Dicuci dengan metode khusus sesuai bahan" },
    { icon: "4", title: "Selesai", desc: "Dikembalikan dalam kondisi terbaik" },
  ];

  return (
    <div ref={sectionRef}>
      <section className="relative pt-28 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=1200&q=80"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-primary/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="detail-fade flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/#layanan" className="hover:text-white transition-colors">Layanan</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Laundry Satuan</span>
          </div>


          <h1 className="detail-fade text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Laundry Satuan
          </h1>
          <p className="detail-fade text-lg text-white/80 max-w-2xl mb-8">
            Layanan premium untuk pakaian spesial Anda. Setiap item mendapatkan penanganan khusus 
            dengan metode dan deterjen yang disesuaikan dengan jenis bahan.
          </p>

          <div className="detail-fade flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20">
              <Clock className="h-4 w-4" /> 1 Hari
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20">
              <CheckCheck className="h-4 w-4" /> Per Item
            </span>
          </div>

          <a
            href="https://wa.me/6281234567890?text=Halo%20RSix%20Laundry%2C%20saya%20ingin%20tanya%20tentang%20Laundry%20Satuan"
            target="_blank"
            rel="noopener noreferrer"
            className="detail-fade inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-white/90 active:scale-95"
          >
            <Phone className="h-4 w-4" /> Hubungi Kami
          </a>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="detail-fade rounded-2xl bg-gradient-to-br from-primary to-secondary p-8 sm:p-10 text-white shadow-xl mb-16">
          <p className="text-sm font-medium uppercase tracking-wider opacity-80 mb-1">Mulai dari</p>
          <p className="text-4xl sm:text-5xl font-bold mb-2">Rp15.000<span className="text-xl font-normal opacity-80">/item</span></p>
          <p className="opacity-80 mb-6">Harga tergantung jenis item dan bahan, konsultasi gratis</p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20RSix%20Laundry%2C%20saya%20ingin%20pesan%20Laundry%20Satuan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-white/90 active:scale-95"
          >
            <Phone className="h-4 w-4" /> Pesan Sekarang
          </a>
        </div>

        <section className="detail-fade mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">Tentang Laundry Satuan</h2>
              <p className="text-[#475569] leading-relaxed mb-4">
                Laundry satuan adalah layanan premium untuk pakaian dan item spesial yang membutuhkan perhatian lebih. Setiap item mendapatkan penanganan khusus dengan metode, deterjen, dan suhu yang disesuaikan dengan jenis bahan. Cocok untuk pakaian kerja, batik, bahan tipis, atau item dengan harga tinggi.
              </p>
              <p className="text-[#475569] leading-relaxed">
                Kami memahami bahwa setiap pakaian memiliki karakteristik berbeda. Oleh karena itu, sebelum proses pencucian, tim kami akan melakukan inspeksi untuk menentukan treatment terbaik. Hasilnya, pakaian Anda kembali bersih maksimal tanpa risiko kerusakan.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&q=80" alt="Laundry Satuan" fill className="object-cover" sizes="50vw" />
              </div>
            </div>
          </div>
        </section>

        <Link href="/#layanan" className="detail-fade inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="h-4 w-4" /> Kembali ke Layanan
        </Link>

        <h2 className="detail-fade text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6 mt-8">Keunggulan Layanan</h2>
        <div className="detail-fade grid gap-3 sm:grid-cols-2 mb-16">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl bg-[#F8FAFC] p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <CheckCheck className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm text-[#475569]">{f}</span>
            </div>
          ))}
        </div>

        <h2 className="detail-fade text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6">Cara Kerja</h2>
        <div className="detail-fade grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="rounded-2xl bg-[#F8FAFC] p-6 text-center ring-1 ring-gray-100">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                {step.icon}
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-1">{step.title}</h3>
              <p className="text-sm text-[#475569]">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="detail-fade rounded-2xl bg-[#F8FAFC] p-8 sm:p-10 text-center ring-1 ring-gray-100 mb-16">
          <Sparkles className="mx-auto mb-4 h-8 w-8 text-primary" />
          <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Butuh laundry satuan?</h2>
          <p className="text-[#475569] mb-6">Konsultasi gratis dengan tim kami</p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20RSix%20Laundry%2C%20saya%20ingin%20tanya%20tentang%20Laundry%20Satuan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-[#1D4ED8] active:scale-95"
          >
            <Phone className="h-4 w-4" /> Hubungi Via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
