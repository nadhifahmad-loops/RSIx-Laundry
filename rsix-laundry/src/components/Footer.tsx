import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F172A] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#beranda" className="mb-4 flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="RSix Laundry"
                width={36}
                height={36}
                className="h-9 w-auto"
              />
              <span className="text-lg font-bold tracking-tight text-white">
                RSix <span className="text-secondary">Laundry</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Jasa laundry profesional di Sukodono yang melayani berbagai kebutuhan laundry Anda dengan pelayanan cepat dan terpercaya.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Alamat</h3>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <div className="text-sm leading-relaxed text-gray-400">
                PERUMAHAN GRAND CITY PARK BR 04,
                <br />
                Dusun Suko, Suko,
                <br />
                Kecamatan Sukodono,
                <br />
                Kabupaten Sidoarjo,
                <br />
                Jawa Timur 61258
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Jam Operasional</h3>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <div className="text-sm leading-relaxed text-gray-400">
                <p>Senin - Minggu</p>
                <p className="mt-1 font-semibold text-white">08.00 - 20.00</p>
                <p className="mt-2 text-xs">Buka setiap hari, termasuk hari libur</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Kontak</h3>
            <div className="space-y-3">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-secondary">
                <Phone className="h-4 w-4 text-secondary" />
                +62 812-3456-7890
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-secondary">
                <span className="text-xs font-bold text-secondary">IG</span>
                @rsixlaundry
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-secondary">
                <MapPin className="h-4 w-4 text-secondary" />
                Lihat di Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden ring-1 ring-white/10">
          <iframe
            src="https://maps.google.com/maps?q=Grand+City+Park+Sukodono+Sidoarjo&output=embed&t=m&z=15"
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi RSix Laundry"
            className="w-full"
          />
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} RSix Laundry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/syarat-ketentuan" className="text-xs text-gray-500 transition-colors hover:text-secondary">Syarat & Ketentuan</Link>
            <span className="text-gray-600">|</span>
            <p className="text-xs text-gray-500">Made with <span className="text-primary">&hearts;</span> for Sukodono</p>
          </div>
        </div>
      </div>

      <a
        href="#beranda"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-[#1D4ED8] hover:shadow-xl active:scale-90"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </footer>
  );
}
