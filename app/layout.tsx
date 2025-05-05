import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Diving Kids Nusa Lembongan | Legend Diving Lembongan",
  description: "Best Diving School in Bali",

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: "Diving for Kids in Bali – Fun & Safe Adventures",
    description: "Let your kids explore the underwater world safely with our certified diving instructors in Nusa Lembongan.",
    url: "https://phenomenal-valkyrie-9b41da.netlify.app", // Ganti dengan domain asli
    siteName: "Legend Diving Lembongan",
    images: [
      {
        url: "https://phenomenal-valkyrie-9b41da.netlify.app/images/banner.jpg", // Ganti dengan URL gambar OG
        width: 1200,
        height: 630,
        alt: "Kids scuba diving in Bali",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diving for Kids in Bali – Fun & Safe Adventures",
    description: "Fun and safe scuba diving programs for children in Nusa Lembongan, Bali.",
    images: ["https://phenomenal-valkyrie-9b41da.netlify.app/images/banner.jpg"], // Ganti juga ini
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Fallback for crawlers that don’t use metadata object */}
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Diving for Kids in Bali – Fun & Safe Adventures" />
        <meta property="og:description" content="Let your kids explore the underwater world safely with our certified diving instructors in Nusa Lembongan." />
        <meta property="og:image" content="https://phenomenal-valkyrie-9b41da.netlify.app/images/banner.jpg" />
        <meta property="og:url" content="https://phenomenal-valkyrie-9b41da.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className="font-poppins">{children}</body>
    </html>
  );
}
