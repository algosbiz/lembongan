import type React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import WhatsAppButton from "./whatsapp-button";
import ScrollToTopButton from "./scrool-auto";
import PromoBanner from "./promotionBanner";


const showBanner = process.env.NEXT_PUBLIC_SHOW_PROMO_BANNER === "true";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {showBanner && <PromoBanner />}
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
}
