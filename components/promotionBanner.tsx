"use client";



export default function PromoBanner() {
  const promoText = process.env.NEXT_PUBLIC_PROMO_TEXT || "🎉 Default Promo Text";
  return <div className="bg-[#0d627b] relative text-[16px] lg:text-[18px] text-white text-center  px-4 py-2 font-bold">
   
    {promoText}
   
  </div>;
}
