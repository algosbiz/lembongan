"use client";

export default function PromoBanner() {
  const promoText = process.env.NEXT_PUBLIC_PROMO_TEXT || "🎉 Default Promo Text";
  return <div className="bg-[#48c4c4] text-[16px] lg:text-[18px] text-white text-center py-3 px-4 font-bold">{promoText}</div>;
}
