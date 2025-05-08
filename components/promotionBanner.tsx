"use client";

import { BackgroundLines } from "./ui/backgroundline";

export default function PromoBanner() {
  const promoText = process.env.NEXT_PUBLIC_PROMO_TEXT || "🎉 Default Promo Text";
  return <div className="bg-[#0d627b] relative text-[16px] lg:text-[18px] text-white text-center py-3 px-4 font-bold">
    <BackgroundLines>
    {promoText}
    </BackgroundLines>
  </div>;
}
