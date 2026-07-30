import Image from "next/image";

const partners = [
  { name: "Shopee", src: "/images/shopee.jpg" },
  { name: "Tokopedia", src: "/images/tokopedia.jpg" },
  { name: "TikTok", src: "/images/tiktok.jpg" },
  { name: "Grab", src: "/images/lazada.jpg" },
];

export default function Partners() {
  return (
    <section className="py-14 sm:py-18 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#475569] mb-8">
          Bekerja Sama Dengan
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-20">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center h-8 sm:h-10">
              <Image
                src={p.src}
                alt={p.name}
                width={p.name === "Tokopedia" || p.name === "TikTok" ? 160 : 120}
                height={p.name === "Tokopedia" || p.name === "TikTok" ? 48 : 36}
                className={`object-contain w-auto ${p.name === "Tokopedia" || p.name === "TikTok" ? "h-9 sm:h-12" : "h-7 sm:h-9"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
