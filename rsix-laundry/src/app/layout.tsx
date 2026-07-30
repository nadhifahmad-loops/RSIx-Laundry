import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RSix Laundry | Laundry Profesional Sukodono",
  description:
    "RSix Laundry melayani laundry kiloan, satuan, sepatu, bed cover, boneka, dan express di wilayah Sukodono dengan pelayanan cepat dan profesional.",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "RSix Laundry | Laundry Profesional Sukodono",
    description:
      "Jasa laundry profesional di Sukodono melayani laundry kiloan, satuan, sepatu, bed cover, boneka, dan express.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${plusJakartaSans.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
