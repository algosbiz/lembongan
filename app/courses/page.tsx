"use client";
import { ThreeDCard } from "@/components/3dCard";
import { AnimatedPin } from "@/components/3dpin";
import CoursePopup from "@/components/coursePopup";
import ExpandableText from "@/components/expandable-text";
import FadeInLeft from "@/components/fadeLeft";
import FadeInRight from "@/components/fadeRight";
import Layout from "@/components/layout";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useRef, useState } from "react";

export default function Courses() {
  const courseData1 = [
    { title: "Intro Dive", description: "Perfect for beginners", image: "/images/couple.jpg" },
    { title: "Advanced Dive", description: "Explore deeper waters", image: "/images/couple.jpg" },
  ];

  const courseData2 = [
    { title: "Rescue Diver", description: "Learn emergency procedures", image: "/images/couple.jpg" },
    { title: "Instructor Training", description: "Teach others to dive", image: "/images/couple.jpg" },
  ];
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [hoveredPopup, setHoveredPopup] = useState<number | null>(null);
  const [activePopupId, setActivePopupId] = useState<number | null>(null);

   const handleImageClick = (id: number) => {
     setActivePopupId(id);
   };

   const closePopup = () => {
     setActivePopupId(null);
   };

  return (
    <Layout>
      <section className="relative hidden md:flex items-center justify-start h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/images/snorkeling.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-72 px-4 lg:px-0">
          <div className="max-w-5xl p-0 rounded-md">
            <FadeInLeft>
              <h1 className="font-poppins-600 lg:text-[75px] text-[40px] leading-tight font-semibold text-white mb-4">SNORKELING DAY TRIPS</h1>
              <Image src="/wiggle.png" width={100} height={100} alt="wiggle" />
            </FadeInLeft>
          </div>
        </div>
      </section>
      <main className="mx-auto">
        <section className="min-h-[645px] flex items-center justify-center bg-cover bg-center transition-all duration-700" style={{ backgroundImage: "url('/bgn.png')" }}>
          <div className="container lg:mx-72 px-4 lg:px-0 pb-[59px] pt-[59px] lg:pb-[130px] lg:pt-[130px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-24">
              {/* LEFT: Image */}
              <FadeInLeft>
                <div>
                  <div className="relative">
                    <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-40 pointer-events-none">
                      <Image src="/hrwm.png" alt="Watermark" width={500} height={500} className="w-[300px] lg:w-[450px] object-contain" />
                    </div>
                    <h4 className="font-montserrat-600 text-[20px] lg:text-[25px] text-[#dcf106]  font-semibold">Your holiday’s highlight!</h4>
                    <h2 className="font-poppins-600 lg:text-[45px] text-[32px] text-white max-w-md font-semibold lg:mb-6 lg:mt-0 mb-5 leading-tight">Set Off On an Exhilarating Day Trip Adventure</h2>
                  </div>
                  <ExpandableText
                    preview="If you're planning a snorkeling adventure from Penida, Lembongan, or Komodo Island, you're in for a treat! These popular destinations are well known for their diverse underwater experiences, including the opportunity to swim alongside manta rays."
                    fullText={
                      <>They serve as an excellent option for those who may not feel ready for scuba diving or are traveling with family. Each location offers the chance to discover colorful coral reefs and a rich variety of marine life.</>
                    }
                    className="text-white  leading-10"
                    symbolColor="#dcf106"
                    onToggle={(state) => setExpanded1(state)}
                  />
                </div>
              </FadeInLeft>
              <FadeInRight>
                <div className="mt-5 lg:mt-0">
                  <div className={`relative w-full overflow-hidden rounded-lg rounded-bl-[100px] shadow-lg transform transition-all duration-500 ${expanded1 ? "pb-[145%] scale-100" : "pb-[88.95%] scale-100"}`}>
                    <Image src="/images/penidak.jpg" alt="Kids Learn" fill className="object-cover" />
                  </div>
                </div>
              </FadeInRight>

              {/* RIGHT: Expandable text */}
            </div>
          </div>
        </section>

        <section className="min-h-[645px] flex items-center justify-center bg-cover bg-center">
          <div className="container lg:mx-72 px-4 lg:px-0 pt-[43px] pb-[50px] lg:pt-[111px] lg:pb-[130px]">
            <h2 className="font-poppins-600 lg:text-[45px] text-[32px] text-[#007c87] lg:text-center font-semibold mb-12">Learn More About Our Snorkeling Trips</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedPin
                heading="Explore the Depths"
                description="Snorkeling and diving adventures await."
                imageSrc="/images/teach.jpg"
                iconSrc="/wiggle.png"
                titles={[
                  { label: "Snorkeling Info", href: "https://example.com/snorkeling" },
                  { label: "Diving Guide", href: "https://example.com/diving" },
                  { label: "Book a Trip", href: "https://example.com/book" },
                ]}
              />

              <AnimatedPin
                titles={[
                  { label: "Course A", href: "/course-a" },
                  { label: "Course B", href: "/course-b" },
                  { label: "Course C", href: "/course-c" },
                ]}
                heading="Snorkeling in Penida"
                description="Start Your Certification"
                imageSrc="/images/teach.jpg"
                iconSrc="/wiggle.png"
              />
              <AnimatedPin
                titles={[
                  { label: "Course A", href: "/course-a" },
                  { label: "Course B", href: "/course-b" },
                  { label: "Course C", href: "/course-c" },
                ]}
                heading="Snorkeling in Komodo"
                description="Start Your Certification"
                imageSrc="/images/teach.jpg"
                iconSrc="/wiggle.png"
              />
            </div>
          </div>
        </section>
        <section className="min-h-[645px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bgn.png')" }}>
          <div className="container lg:mx-72 px-4 lg:px-0 pt-[43px] pb-[50px] lg:pt-[111px] lg:pb-[130px]">
            <h2 className="font-poppins-600 lg:text-[45px] text-[32px] text-white lg:text-center font-semibold mb-12">Learn To Dive</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Grid Item 1 */}
              {/* Grid Item 1 */}
              <div className="relative ">
                {/* Gambar konten */}
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/couple.jpg')" }} />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 h-full flex items-end justify-start px-8 pb-8 text-left">
                    <div>
                      <Image src="/wiggle.png" width={40} height={40} alt="wiggle" />
                      <h3 className="text-white text-2xl font-thin mb-2">Discover Scuba Diving</h3>
                      <p className="text-[#dcf106] text-xl">Swim in Crystal Clear Water</p>
                    </div>
                  </div>
                </div>

                {/* Popup */}
                {hoveredPopup === 1 && <CoursePopup title="Availble Courses" courses={courseData1} onClose={() => setHoveredPopup(null)} />}
              </div>

              {/* Grid Item 2 */}
              <div className="relative">
                {/* Gambar konten */}
                <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/teach.jpg')" }} />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative z-10 h-full flex items-end justify-start px-8 pb-8 text-left">
                    <div>
                      <Image src="/wiggle.png" width={40} height={40} alt="wiggle" />
                      <h3 className="text-white text-2xl font-thin mb-2">Kids Course</h3>
                      <p className="text-[#dcf106] text-xl">Start Your Certification</p>
                    </div>
                  </div>
                </div>

                {/* Popup */}
                {hoveredPopup === 2 && <CoursePopup title="Available Services" courses={courseData2} onClose={() => setHoveredPopup(null)} />}
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-[645px] flex items-center justify-center bg-cover bg-center">
          <div className="container lg:mx-72 px-4 lg:px-0 pt-[43px] pb-[50px] lg:pt-[111px] lg:pb-[130px]">
            <h2 className="font-poppins-600 lg:text-[45px] text-[32px] text-[#007c87] text-center font-semibold mb-12">Our Reviews</h2>
          </div>
        </section>
        <section className="min-h-[645px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bgn.png')" }}>
          <div className="container lg:mx-72 px-4 lg:px-0 pt-[43px] pb-[50px] lg:pt-[111px] lg:pb-[130px]">
            <h2 className="font-poppins-600 lg:text-[45px] text-[32px] text-white text-center font-semibold mb-12">Our Instagram</h2>
          </div>
        </section>
        <section className="min-h-[645px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bgn.png')" }}>
          <div className="container lg:mx-72 px-4 lg:px-0 pt-[43px] pb-[50px] lg:pt-[111px] lg:pb-[130px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ThreeDCard
                title="Explore the Ocean"
                description="Join our guided diving experience and see the underwater world like never before."
                imageUrl="/images/couple.jpg"
                imageAlt="Ocean view"
                linkText="Learn More"
                linkHref="/dive"
                buttonText="Book Now"
                onButtonClick={() => alert("Booking initiated!")}
                onImageClick={handleImageClick}
                popupId={1}
              />

              <ThreeDCard
                title="Explore the Ocean"
                description="Join our guided diving experience and see the underwater world like never before."
                imageUrl="/images/couple.jpg"
                imageAlt="Ocean view"
                linkText="Learn More"
                linkHref="/dive"
                buttonText="Book Now"
                onButtonClick={() => alert("Booking initiated!")}
                onImageClick={handleImageClick}
                popupId={2}
              />
            </div>
            {activePopupId !== null && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                <CoursePopup title={activePopupId === 1 ? "Available Courses" : "Kids Programs"} courses={activePopupId === 1 ? courseData1 : courseData2} onClose={closePopup} />
              </div>
            )}
          </div>
        </section>
      </main>
      <section className="relative hidden md:flex items-center justify-start min-h-[645px] bg-cover bg-center" style={{ backgroundImage: "url('/images/bottombanner.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="relative container lg:mx-72 lg:pt-[118px] lg:pb-[130px]">
          <div className="text-center justify-center items-center flex p-0 rounded-md">
            <FadeInLeft>
              <h2 className="font-poppins-600 lg:text-[45px] text-[25px] leading-tight font-semibold text-white mb-7">
                Nusa Lembongan's Relaxing
                <br />
                Getaways, Exciting Dives, and <br />
                Accomodation
              </h2>
              <div className="w-full justify-center flex mb-7">
                <Image src="/wiggle.png" width={100} height={100} alt="wiggle" />
              </div>
              <p className="text-white font-medium mb-7">
                Embark on a stress-free dive adventure with Legend Diving at Nusa Lembongan.
                <br />
                We provide fast boat transport, accommodation options, fun dives with Mantas
                <br />
                and Molas, plus snorkeling and DSD programs
              </p>
              <div className="gap-10 flex justify-center">
                <Button className="bg-[#ff0000] py-7 px-8 sm:py-7 sm:px-10 text-[20px] ">Contact Us</Button>
                <Button className="bg-[#dcf106] py-7 px-8 sm:py-7 sm:px-10 text-[20px] text-black">Whatsapp</Button>
              </div>
            </FadeInLeft>
          </div>
        </div>
      </section>
    </Layout>
  );
}
