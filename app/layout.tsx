import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

// 1. Import Poppins font dengan variable
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Diving Kids Nusa Lembongan | Legend Diving Lembongan",
  description: "Best Diving School in Bali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 2. Tambahkan className dengan variable ke <html>
    <html lang="en" className={poppins.variable}>
      {/* 3. Tambahkan font class global ke body atau gunakan di Tailwind */}
      <body className="font-poppins">{children}</body>
    </html>
  );
}
