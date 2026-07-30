"use client";

import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

const testimonials = [
  { name: "Sari Dewi", role: "Ibu Rumah Tangga", rating: 5, text: "Pelayanan sangat cepat dan ramah! Pakaian bersih wangi, harganya juga terjangkau. Langganan tetap deh." },
  { name: "Rudi Hartono", role: "Karyawan Swasta", rating: 5, text: "Laundry express-nya beneran cepat. 6 jam udah selesai, cocok buat orang sibuk seperti saya." },
  { name: "Anisa Putri", role: "Mahasiswi", rating: 5, text: "Pertama kali laundry sepatu di sini, hasilnya bersih banget. Sekarang jadi langganan rutin." },
  { name: "Dimas Prayoga", role: "Warga Sukodono", rating: 4, text: "Tempatnya bersih, pelayanannya profesional. Antar jemputnya tepat waktu." },
  { name: "Maya Kusuma", role: "Guru SD", rating: 5, text: "Bed cover besar saya dicuci bersih sempurna. Wangi dan rapi. Terima kasih RSix Laundry!" },
  { name: "Budi Santoso", role: "Pengusaha", rating: 5, text: "Udah 6 bulan langganan, konsisten kualitasnya. Pakaian kantor selalu rapi dan wangi." },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const max = Math.ceil(testimonials.length / 3) - 1;

  const next = () => setCurrent((p) => Math.min(p + 1, max));
  const prev = () => setCurrent((p) => Math.max(p - 1, 0));

  return (
    <section id="testimoni" className="py-20 sm:py-28 bg-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Apa Kata <span className="text-primary">Pelanggan</span>
          </h2>
          <p className="mt-4 text-[#475569]">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, slideIdx) => (
                <div key={slideIdx} className="grid min-w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {testimonials.slice(slideIdx * 3, slideIdx * 3 + 3).map((item, idx) => (
                    <div
                      key={idx}
                      className="group rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-gray-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:ring-primary/10"
                    >
                      <Quote className="mb-3 h-6 w-6 text-primary/20" />
                      <p className="mb-4 text-sm leading-relaxed text-[#475569]">&ldquo;{item.text}&rdquo;</p>
                      <div className="mb-3 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < item.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`} />
                        ))}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-sm font-bold text-primary">
                          {item.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#0F172A]">{item.name}</p>
                          <p className="text-xs text-[#475569]">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              disabled={current === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: max + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              disabled={current === max}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
