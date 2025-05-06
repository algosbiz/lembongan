import Image from "next/image";
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-5 lg:px-0">
      <div className="mx-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="max-w-[180px] w-full">
              <Image src="/icon/lg.png" alt="Logo" width={300} height={300} className="w-full h-auto object-contain" />
            </div>

            <div>
              <h3 className="text-[23px]  mb-4">INFO</h3>
              <ul className="space-y-2">
                {["Virtual Tour", "Pricing", "Mola Mola Dives", "Manta Ray Dives"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-300 text-[20px] hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[23px]  mb-4">CONTACT US</h3>
              <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-5 lg:mb-5">
                <Image src="/icon/manta.png" alt="Logo" width={70} height={70} className="" />
                <Image src="/icon/marine.png" alt="Logo" width={70} height={70} className="" />
                <Image src="/icon/padi.png" alt="Logo" width={70} height={70} className="" />
                <Image src="/icon/green.png" alt="Logo" width={70} height={70} className="" />
              </div>
              <p className="text-[20px]">Mobile: +62 8123 741 8850</p>
              <p className="text-[20px]">Email: info@legend-diving.com</p>
            </div>

            <div className="flex lg:justify-end items-center">
              <div className="max-w-[180px] w-full ">
                <Image src="/icon/trip.png" alt="Logo" width={300} height={300} className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
        {/* Horizontal gray line */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Copyright statement */}
        <div className="py-4 text-center text-[17px] text-gray-300">
          ©Copyright 2012-{new Date().getFullYear()} | Jalan Raya Jungut Batu, Nusa Lembongan, Bali Indonesia | info@divinglembongan.com | Phone: +6281237418850 | All rights reserved
        </div>
        <div className="flex justify-center space-x-1">
          <Image src="/icon/fb.webp" alt="Logo" width={50} height={50} />
          <Image src="/icon/yt.webp" alt="Logo" width={50} height={50} />
          <Image src="/icon/trip.webp" alt="Logo" width={50} height={50} />
          <Image src="/icon/ig.webp" alt="Logo" width={50} height={50} />
          <Image src="/icon/wa.webp" alt="Logo" width={50} height={50} />
          <Image src="/icon/link.webp" alt="Logo" width={50} height={50} />
          <Image src="/icon/tiktok.webp" alt="Logo" width={50} height={50} />
        </div>
      </div>
    </footer>
  );
}
