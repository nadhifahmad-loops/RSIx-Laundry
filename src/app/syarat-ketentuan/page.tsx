"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";
import { ChevronRight, FileText, Phone, Shield } from "lucide-react";

export default function SyaratKetentuanPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".detail-fade", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <section className="relative pt-28 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=1200&q=80"
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
            <span className="text-white">Syarat & Ketentuan</span>
          </div>

          <div className="detail-fade flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm ring-1 ring-white/20 mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>

          <h1 className="detail-fade text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Syarat & Ketentuan
          </h1>
          <p className="detail-fade text-lg text-white/80 max-w-2xl">
            Dengan menggunakan jasa RSix Laundry, Anda menyetujui syarat dan ketentuan yang berlaku.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-gray max-w-none">
          <h2 className="detail-fade text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
            <Shield className="h-7 w-7 text-primary" />
            Syarat & Ketentuan Umum
          </h2>

          <div className="detail-fade space-y-4 text-[#475569] leading-relaxed mb-12">
            <p>Dengan menyerahkan laundry ke RSix Laundry, maka pelanggan menyatakan tunduk dan patuh terhadap peraturan yang berlaku di RSix Laundry.</p>
            <p>Seluruh transaksi yang dilakukan RSix Laundry, baik transaksi langsung di workshop ataupun di pick up di lokasi pelanggan, dilaksanakan berdasarkan Syarat & Ketentuan yang telah diatur dalam halaman ini.</p>
            <p>Syarat & Ketentuan merupakan dasar yang mengikat dan menjadi bagian yang tidak terpisahkan dari perjanjian atau ketentuan tertulis lainnya.</p>
            <p>RSix Laundry tidak dapat dibebani dengan perjanjian lain selain yang ditulis dalam Syarat & Ketentuan ini kecuali dengan perjanjian tertulis dan ditandatangani oleh manajemen RSix Laundry yang berwenang.</p>
            <p>Semua syarat dan ketentuan yang terdapat di halaman ini bersifat mengikat. Kelalaian pihak konsumen karena tidak membaca aturan yang ada secara cermat tidak membuat pengecualian terhadap berlakunya aturan yang telah ditetapkan.</p>
          </div>

          <h2 className="detail-fade text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6">Aturan Transaksi</h2>
          <div className="detail-fade space-y-4 text-[#475569] leading-relaxed mb-12">
            <p>Transaksi laundry bisa dilakukan di workshop RSix Laundry atau di rumah atau lokasi pelanggan (untuk pick-up).</p>
            <p>Minimal transaksi laundry kiloan adalah 5 kg. Minimal transaksi satuan adalah 3 pcs.</p>
            <p>Kasir/Petugas Delivery akan menghitung jumlah pakaian/laundry dari pelanggan, lalu menimbang berat/mengukur luas untuk karpet/sejenisnya.</p>
            <p className="font-semibold text-[#0F172A]">Pembayaran dapat dilakukan dengan cara berikut:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cash pada saat barang diantar</li>
              <li>Transfer pada saat proses pengerjaan</li>
              <li>Kartu Debit dengan mesin EDC</li>
              <li>QRIS</li>
            </ul>
            <p>Pakaian yang luntur/baju putih kami sarankan untuk dicuci satuan (bukan kiloan).</p>
            <p>Pelanggan WAJIB melakukan pengecekan item yang akan dilaundry, terutama untuk layanan kiloan. Apabila tidak ada informasi bahwa laundry membutuhkan perhatian khusus, maka kami tidak bertanggung jawab terhadap risiko yang terjadi.</p>
            <p>Kerusakan, kelunturan, penyusutan pakaian yang disebabkan dari sifat bahan di luar tanggung jawab dari Kami.</p>
            <p>Untuk Laundry Kiloan semua pakaian kami perlakukan sama. Prinsip laundry kiloan adalah pakaian yang dipakai sehari-hari.</p>
            <p>Item Laundry yang tidak dapat dicuci dan dikeringkan dengan mesin tidak diperbolehkan dimasukkan ke dalam layanan satuan. Segala risiko yang timbul akibat kesalahan layanan tidak menjadi tanggung jawab RSix Laundry.</p>
            <p>Pelanggan akan mendapatkan nota/struk resmi rincian transaksi (jumlah item pakaian, total pembayaran) dari Kami.</p>
            <p>Pembatalan hanya bisa dilakukan sebelum bagian produksi memproses paket laundry. Pembatalan akan dikenakan biaya Rp50.000/nota dan dikenakan biaya kirim bila paket laundry diminta untuk dikirimkan kembali kepada pelanggan.</p>
          </div>

          <h2 className="detail-fade text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6">Layanan Satuan & Kiloan</h2>
          <div className="detail-fade space-y-4 text-[#475569] leading-relaxed mb-12">
            <p>Layanan kiloan hanya berlaku untuk baju dan item laundry yang biasa digunakan sehari-hari dan tidak membutuhkan perlakuan khusus dalam proses membersihkannya.</p>
            <p>Sprei, Bed Cover, Selimut dan item sejenis yang membutuhkan penanganan lebih harus masuk ke layanan satuan.</p>
            <p>Semua item laundry berbahan dasar kulit, baik sintetis maupun asli, harus masuk layanan satuan.</p>
            <p>Semua item laundry dengan harga di atas Rp200.000 (Dua Ratus Ribu Rupiah) dan membutuhkan penanganan khusus, seperti bahan tipis, bahan mudah melar, mudah susut, luntur dan lainnya harus masuk ke dalam layanan satuan.</p>
            <p>Item dengan bahan reguler namun membutuhkan perlakuan khusus seperti sablon mudah pecah, sablon glow in the dark, dan lainnya harus masuk ke dalam layanan satuan.</p>
            <p>Sebelum mengerjakan layanan satuan, kami selalu memastikan pengerjaan yang ada sesuai dengan standar pengerjaan yang disarankan di label baju. Bila tidak ada petunjuk yang terdapat di label baju, kami akan mengerjakan sesuai dengan SOP yang berlaku.</p>
            <p>Apabila pelanggan memiliki informasi khusus terkait penanganan laundry, terutama yang tidak memiliki label standar penanganan, maka pelanggan wajib memberikan informasi tersebut kepada pihak RSix Laundry. Kegagalan dalam penyampaian informasi sehingga menyebabkan terjadinya kerusakan bukan menjadi tanggung jawab RSix Laundry.</p>
            <p>Kerusakan akibat sifat dasar bahan seperti mudah susut, luntur dan lainnya, yang mana tidak ada informasi sebelumnya, bukan menjadi tanggung jawab RSix Laundry.</p>
            <p>Semua item kiloan dicuci, dikeringkan dan disetrika dengan mesin yang sudah terstandar.</p>
            <p className="font-semibold text-[#0F172A]">Pilihan Waktu Pengerjaan Layanan Kiloan:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Super Kilat: 4 Jam / 6 Jam / 12 Jam</li>
              <li>Kilat: 1 Hari / 2 Hari</li>
              <li>Reguler: 3 Hari</li>
            </ul>
            <p className="font-semibold text-[#0F172A] mt-4">Pilihan Waktu Pengerjaan Layanan Satuan:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reguler: Bergantung pada item laundry (Contoh: Kemeja 3 Hari, Karpet 15 Hari)</li>
              <li>Kilat: Setengah waktu pengerjaan reguler</li>
              <li>Kilat Khusus: Setengah dari waktu pengerjaan kilat</li>
            </ul>
          </div>

          <h2 className="detail-fade text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6">Aturan Pick Up & Delivery</h2>
          <div className="detail-fade space-y-4 text-[#475569] leading-relaxed mb-12">
            <p className="font-semibold text-[#0F172A]">Biaya antar-jemput:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Minimal order 5 kg: FREE</li>
              <li>Area Sukodono: FREE</li>
              <li>Di luar area Sukodono / di bawah min. transaksi: dikenakan biaya tambahan</li>
            </ul>
            <p className="font-semibold text-[#0F172A] mt-4">Ketentuan Waktu Penjemputan:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Jadwal Pick Up & Delivery reguler adalah pukul 08.00 sampai 19.00 setiap harinya</li>
              <li>Untuk layanan Super Kilat, pickup paling lambat pukul 16.00</li>
              <li>Apabila butuh penjemputan di luar jam normal, bisa dikoordinasikan terlebih dahulu dengan pihak workshop</li>
              <li>Cancel setelah kurir berangkat sampai saat proses dikenakan biaya Rp50.000</li>
            </ul>
            <p className="font-semibold text-[#0F172A] mt-4">Ketentuan Waktu Pengiriman:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Waktu pengiriman akan menyesuaikan dengan jadwal harian pengiriman dari workshop</li>
              <li>Apabila ada permintaan khusus, harus diinformasikan sebelumnya dan mendapat persetujuan dari pihak workshop</li>
              <li>Pilihan waktu paket service menunjukkan waktu selesai pengerjaan laundry, bukan waktu sampai ke pelanggan</li>
              <li>Perhitungan waktu service dihitung dari diterimanya laundry oleh pihak workshop</li>
              <li>Untuk Layanan Kilat 1 Hari, batas maksimal pengiriman adalah H+1 dari diterimanya laundry oleh pihak workshop</li>
            </ul>
            <p className="font-semibold text-[#0F172A] mt-4">Pembulatan Berat Timbangan:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Berat sampai dengan 0,2 kg: dibulatkan ke bawah</li>
              <li>Berat 0,3 s.d. 0,7 kg: dibulatkan ke bawah</li>
              <li>Berat 0,8 kg ke atas: dibulatkan ke atas</li>
            </ul>
          </div>

          <h2 className="detail-fade text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6">Pengaduan dan Ganti Rugi</h2>
          <div className="detail-fade space-y-4 text-[#475569] leading-relaxed mb-12">
            <p className="font-semibold text-[#0F172A]">Ketentuan Standarisasi Layanan Asosiasi Laundry Indonesia (ASLI):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Kerusakan luntur, susut dan berkerut karena sifat serat bahan bukan tanggung jawab pihak laundry</li>
              <li>Hilangnya benda berharga di dalam laundry dalam proses pencucian bukan tanggung jawab pihak laundry</li>
              <li>Jumlah pakaian yang tidak dihitung oleh customer bukan tanggung jawab laundry dan jumlah hitungan laundry yang dianggap benar</li>
              <li>Kehilangan baju diganti 10x harga layanan (satuan atau kilogram baju yang hilang)</li>
              <li>Pakaian hilang atau rusak di luar batas waktu maksimal pengambilan cucian (1 bulan) bukan tanggung jawab pihak laundry</li>
              <li>Pakaian hilang atau rusak akibat force majeure (banjir, gempa bumi, tanah longsor, kebakaran, dll) di luar tanggung jawab pihak laundry</li>
              <li>Dengan mencuci di tempat kami, customer dianggap setuju dengan segala ketentuan di atas</li>
            </ul>
            <p className="font-semibold text-[#0F172A] mt-4">Layanan Komplain:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Komplain wajib menunjukkan nota transaksi dan KTP Asli, nama di KTP harus sesuai dengan nota</li>
              <li>Tanpa nota atau tanpa menunjukkan KTP asli, komplain tidak diterima</li>
              <li>Komplain selain kehilangan akan kami tangani 1x24 jam setelah pengambilan</li>
              <li>Komplain akan kami tangani paling lambat 14 hari kerja setelah customer melayangkan komplain</li>
              <li>Komplain kehilangan jumlah barang setelah meninggalkan outlet laundry tidak akan dilayani</li>
              <li>Seluruh persyaratan komplain harus terpenuhi tanpa terkecuali</li>
            </ul>
          </div>

          <h2 className="detail-fade text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6">Pengambilan dan Pengiriman Laundry</h2>
          <div className="detail-fade space-y-4 text-[#475569] leading-relaxed mb-12">
            <p className="font-semibold text-[#0F172A]">Pengambilan Laundry:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pengambilan laundry wajib membawa nota/struk resmi untuk diserahkan kembali ke kasir</li>
              <li>Jika nota/struk resmi hilang, pengambilan bisa dengan menunjukkan Kartu Identitas seperti KTP/SIM/Kartu Pelajar atau Mahasiswa</li>
              <li>Pengambilan laundry yang diwakilkan oleh orang lain wajib mengisi buku tamu/serah terima laundry dan menyerahkan fotokopi identitas diri (KTP/SIM)</li>
            </ul>
            <p className="font-semibold text-[#0F172A] mt-4">Pengiriman Laundry:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Pengiriman laundry hanya berlaku untuk paket laundry yang telah memenuhi persyaratan kirim</li>
              <li>Kurir kami akan melakukan konfirmasi terlebih dahulu sebelum melakukan pengiriman barang</li>
              <li>Apabila waktu pengiriman telah disepakati dan kurir kami telah berangkat dari workshop sesuai jadwal, maka waktu pengiriman tidak dapat dicancel atau dialihkan</li>
              <li>Pengiriman ke dua akan dikenakan biaya tambahan, kecuali bila kesalahan ada dari pihak RSix Laundry</li>
            </ul>
          </div>

          <div className="detail-fade rounded-2xl bg-gradient-to-br from-primary to-secondary p-8 sm:p-10 text-white text-center mb-16">
            <Shield className="mx-auto mb-4 h-10 w-10 text-white/80" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ada pertanyaan?</h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Jika Anda membutuhkan informasi lebih lanjut mengenai syarat dan ketentuan yang berlaku, jangan ragu untuk menghubungi kami.
            </p>
            <a
              href="https://wa.me/6281234567890?text=Halo%20RSix%20Laundry%2C%20saya%20ingin%20tanya%20tentang%20syarat%20dan%20ketentuan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-all duration-300 hover:bg-white/90 active:scale-95"
            >
              <Phone className="h-4 w-4" /> Hubungi Via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
