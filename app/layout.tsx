import type { Metadata } from "next";
import "./globals.css";
import { Barlow_Semi_Condensed, Poppins, Montserrat } from "next/font/google";

// Font default body
const barlow = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-barlow",
});

// Custom heading fonts
const poppinsSemiBold = Poppins({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-poppins-600",
});

const montserratSemiBold = Montserrat({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-montserrat-600",
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
    url: "https://phenomenal-valkyrie-9b41da.netlify.app",
    siteName: "Legend Diving Lembongan",
    images: [
      {
        url: "https://phenomenal-valkyrie-9b41da.netlify.app/images/banner.jpg",
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
    images: ["https://phenomenal-valkyrie-9b41da.netlify.app/images/banner.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${poppinsSemiBold.variable} ${montserratSemiBold.variable}`}>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Diving for Kids in Bali – Fun & Safe Adventures" />
        <meta property="og:description" content="Let your kids explore the underwater world safely with our certified diving instructors in Nusa Lembongan." />
        <meta property="og:image" content="https://phenomenal-valkyrie-9b41da.netlify.app/images/banner.jpg" />
        <meta property="og:url" content="https://phenomenal-valkyrie-9b41da.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body>{children}</body>
    </html>
  );
}
