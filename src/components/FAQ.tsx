"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle, Sparkles } from "lucide-react";

const faqs = [
  { q: "Apakah menerima laundry express?", a: "Ya, kami menyediakan layanan express dengan estimasi selesai dalam 6 jam. Cocok untuk Anda yang membutuhkan pakaian cepat siap pakai." },
  { q: "Berapa lama pengerjaan laundry reguler?", a: "Untuk laundry reguler, pengerjaan selesai dalam 1x24 jam. Waktu dapat berbeda tergantung jenis dan jumlah pakaian." },
  { q: "Apakah bisa antar jemput?", a: "Tentu! Kami menyediakan layanan antar jemput GRATIS untuk area Sukodono dan sekitarnya. Cukup hubungi kami via WhatsApp." },
  { q: "Apakah menerima laundry sepatu?", a: "Ya, kami menerima laundry sepatu dengan proses khusus yang menjaga bentuk dan kualitas sepatu Anda." },
  { q: "Bagaimana cara pemesanannya?", a: "Sangat mudah! Anda bisa menghubungi kami langsung via WhatsApp, datang ke outlet kami di Grand City Park, atau menggunakan form pemesanan online." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#F8FAFC]">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Pertanyaan <span className="text-primary">Umum</span>
          </h2>
          <p className="mt-4 text-[#475569]">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-[#0F172A] sm:text-base">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#475569] transition-all duration-300 ${
                    openIndex === i ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-gray-100 px-6 py-4">
                  <p className="text-sm leading-relaxed text-[#475569]">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-lg text-center">
          <div className="rounded-2xl bg-primary/5 p-6 ring-1 ring-primary/10">
            <MessageCircle className="mx-auto mb-3 h-8 w-8 text-primary" />
            <p className="text-sm font-medium text-[#0F172A]">Masih punya pertanyaan?</p>
            <p className="mb-4 text-sm text-[#475569]">Jangan ragu untuk menghubungi kami</p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-xl active:scale-95"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
