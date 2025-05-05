  "use client";
import CoursePopup from "@/components/coursePopup";
  import ExpandableText from "@/components/expandable-text";
  import Layout from "@/components/layout";
  import { Button } from "@/components/ui/button";
  import Image from "next/image";
  import Link from "next/link";
  import { useRef, useState } from "react";

export default function Home() {
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
const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);


  const handleMouseEnter = (index: number) => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    setHoveredPopup(index);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setHoveredPopup(null);
    }, 200); // beri waktu pengguna memindahkan mouse ke popup
  };

    return (
      <Layout>
        <section className="relative hidden md:flex items-center justify-start h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-5xl p-0 rounded-md">
              <h1 className="text-[90px] leading-tight font-semibold text-white mb-4">Diving Kids Nusa Lembongan</h1>
            </div>
          </div>
        </section>
        <main className="mx-auto">
          <section className="mb-12 h-[1080px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="text-5xl text-white font-semibold mb-6 mt-12">Kids Courses</h2>
                  <p className="text-3xl text-white">Fun for every member of the Family</p>
                  <div className="flex gap-10 items-center">
                    <p className=" text-[#d3ed1e] text-5xl">IDR 1.000.000</p>
                    <Button className="bg-[#ff0000] py-8 px-12">
                      <p className="text-white font-semibold text-lg">Book Now</p>
                    </Button>
                  </div>
                  <div className="flex gap-10 items-center">
                    <div>
                      <Image src="/icon/onboard.png" alt="Logo" width={80} height={80} />
                    </div>
                    <div className="max-w-60">
                      <h3 className="text-white text-2xl">ONBOARD</h3>
                      <p className="text-[#d3ed1e] text-xl">Emergency Oxygen, Life Vests, First Aid Kit</p>
                    </div>
                  </div>
                  <div className="flex gap-10 items-center">
                    <div>
                      <Image src="/icon/meals.png" alt="Logo" width={80} height={80} />
                    </div>
                    <div className="max-w-60">
                      <h3 className="text-white text-2xl">MEALS & DRINKS</h3>
                      <p className="text-[#d3ed1e] text-xl">Lunch, Free Flow Water, Tea, Coffee, Fruit</p>
                    </div>
                  </div>
                  <div className="flex gap-10 items-center">
                    <div>
                      <Image src="/icon/service.png" alt="Logo" width={80} height={80} />
                    </div>
                    <div className="max-w-64">
                      <h3 className="text-white text-2xl">OUR SERVICE</h3>
                      <p className="text-[#d3ed1e] text-xl">Small group of 2 students Professional Instructors</p>
                    </div>
                  </div>
                  <div className="flex gap-10 items-center">
                    <div>
                      <Image src="/icon/rentals.png" alt="Logo" width={80} height={80} />
                    </div>
                    <div className="max-w-60">
                      <h3 className="text-white text-2xl">RENTAL</h3>
                      <p className="text-[#d3ed1e] text-xl">Full Set Of Equipment</p>
                    </div>
                  </div>
                </div>
                <div>
                  {/* Responsive YouTube Embed */}
                  <div className="relative w-full pb-[96.95%] h-0 overflow-hidden rounded-lg rounded-bl-[200px] shadow-lg">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/7fe9FkdmqTM"
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex items-center justify-center">
            <div className="container mx-72 flex-col px-4 pb-40">
              <p className="text-center text-3xl font-semibold mb-5">Ultimate Fun For Your Kids</p>
              <h2 className="text-center text-[#007c87] text-5xl font-semibold mb-16">ALL Diving Kids Nusa Lembongan</h2>
              <ExpandableText
                preview="Our Padi diving kids Nusa Lembongan courses start from 8 years old in the swimming pool. Later at the age of 10, they can start going out into the sea. Excitingly, from the age of 12, we have more advanced diving courses for young ones! It’s important to realize, your children will always be under the direct"
                fullText={
                  <>
                    supervision of our{" "}
                    <Link href="/instructors" className="text-[#007c87]">
                      experienced team of PADI Instructors
                    </Link>
                    . Our purpose is to keep them in a safe environment and ensure that they have the best experience to remember. With this in mind, let’s get the whole family involved and give your kids the chance to discover the joys of
                    blowing bubbles!
                  </>
                }
                className="text-[#8f7887]"
              />
            </div>
          </section>
          <section className="mb-12 min-h-[700px] flex items-center justify-center bg-cover bg-center transition-all duration-700" style={{ backgroundImage: "url('/bgn.png')" }}>
            <div className="container mx-72 px-4 pb-20 pt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
                {/* LEFT: Image */}
                <div>
                  <div className={`relative w-full overflow-hidden rounded-lg rounded-br-[200px] shadow-lg transform transition-all duration-500 ${expanded ? "pb-[140%] scale-105" : "pb-[80.95%] scale-100"}`}>
                    <Image src="/images/kidslearn.jpg" alt="Kids Learn" fill className="object-cover" />
                  </div>
                </div>

                {/* RIGHT: Expandable text */}
                <div>
                  <p className="text-2xl text-[#cce819] font-semibold">For The Youngest</p>
                  <h2 className="text-5xl text-white max-w-lg font-semibold mb-6 mt-8">Bubble Maker – from 8 years old</h2>
                  <ExpandableText
                    preview="Bubblemaker is as fun as it sounds – a chance for your kids to blow bubbles. In effect, children who are at least 8 years old can use SCUBA gear to breathe underwater and swim around in shallow water."
                    fullText={
                      <>
                        Overall, have a party or celebrate a birthday by throwing a memorable, exciting Bubblemaker adventure. Your little one will get a chance to experience SCUBA diving under the direct care and supervision of a Padi Pro.{" "}
                        <br />
                        While they take their first breaths underwater in water shallower than 2 meters, they’ll also learn about scuba diving equipment. A child must be 8 years old or older. Besides, kids must be comfortable in the water,
                        but no prior experience is necessary. While Parental approval is required, lots of fun is expected! –{" "}
                        <Link href="/instructors" className="text-[#cce819]">
                          contact us for more details.
                        </Link>
                      </>
                    }
                    className="text-[#b7d6d1] text-3xl leading-10"
                    symbolColor="#cce819"
                    onToggle={(state) => setExpanded(state)}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="mb-12 min-h-[700px] flex items-center justify-center bg-cover bg-center transition-all duration-700">
            <div className="container mx-72 px-4 pb-20 pt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
                {/* LEFT: Image */}
                <div>
                  <p className="text-2xl text-black font-semibold">Things Are Getting Serious</p>
                  <h2 className="text-5xl text-[#007c87] max-w-lg font-semibold mb-6 mt-8">Try Dive – From 10 Years Old</h2>
                  <ExpandableText
                    preview="Bubblemaker is as fun as it sounds – a chance for your kids to blow bubbles. In effect, children who are at least 8 years old can use SCUBA gear to breathe underwater and swim around in shallow water."
                    fullText={
                      <>
                        Overall, have a party or celebrate a birthday by throwing a memorable, exciting Bubblemaker adventure. Your little one will get a chance to experience SCUBA diving under the direct care and supervision of a Padi Pro.{" "}
                        <br />
                        While they take their first breaths underwater in water shallower than 2 meters, they’ll also learn about scuba diving equipment. A child must be 8 years old or older. Besides, kids must be comfortable in the water,
                        but no prior experience is necessary. While Parental approval is required, lots of fun is expected! –{" "}
                        <Link href="/instructors" className="text-[#007c87]">
                          contact us for more details.
                        </Link>
                      </>
                    }
                    className="text-[#8f7887] text-3xl leading-10"
                    symbolColor="#007c87"
                    onToggle={(state) => setExpanded1(state)}
                  />
                </div>
                <div>
                  <div className={`relative w-full overflow-hidden rounded-lg rounded-bl-[200px] shadow-lg transform transition-all duration-500 ${expanded1 ? "pb-[140%] scale-105" : "pb-[80.95%] scale-100"}`}>
                    <Image src="/images/kidsboy.jpg" alt="Kids Learn" fill className="object-cover" />
                  </div>
                </div>

                {/* RIGHT: Expandable text */}
              </div>
            </div>
          </section>
          <section className="mb-12 min-h-[700px] flex items-center justify-center bg-cover bg-center transition-all duration-700" style={{ backgroundImage: "url('/bgn.png')" }}>
            <div className="container mx-72 px-4 pb-20 pt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
                {/* LEFT: Image */}
                <div>
                  <div className={`relative w-full overflow-hidden rounded-lg rounded-br-[200px] shadow-lg transform transition-all duration-500 ${expanded2 ? "pb-[140%] scale-105" : "pb-[80.95%] scale-100"}`}>
                    <Image src="/images/kidsface.jpg" alt="Kids Learn" fill className="object-cover" />
                  </div>
                </div>

                {/* RIGHT: Expandable text */}
                <div>
                  <p className="text-2xl text-[#cce819] font-semibold">Their Very First Certificate</p>
                  <h2 className="text-5xl text-white max-w-lg font-semibold mb-6 mt-8">PADI Junior Open Water – From 10 years old</h2>
                  <ExpandableText
                    preview="Does your family take diving trips often? Well, now the little ones can start joining in. From the age of 10, they can gain their PADI Junior Open Water Certification."
                    fullText={
                      <>
                        To begin with, they will complete all the modules of the course like any other person, adult or not, but the equipment and the depths will be adapted for their age.
                        <br />
                        Also, our experienced team of PADI Instructors will ensure they understand all the theoretical explanations. <br />
                        Accordingly, diving concepts will be adapted to things that children can relate to. Besides, they will gain a diving certification for life that will automatically be upgraded from Junior to adult. For full details
                        please see our Padi Open Water Course– contact us for more details.
                        <Link href="/instructors" className="text-[#cce819]">
                          contact us for more details.
                        </Link>
                      </>
                    }
                    className="text-[#b7d6d1] text-3xl leading-10"
                    symbolColor="#cce819"
                    onToggle={(state) => setExpanded2(state)}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="mb-12 min-h-[700px] flex items-center justify-center bg-cover bg-center transition-all duration-700">
            <div className="container mx-72 px-4 pb-20 pt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
                {/* LEFT: Image */}
                <div>
                  <p className="text-2xl text-black font-semibold">Your Kids Are Growing Together with Their Skills</p>
                  <h2 className="text-5xl text-[#007c87] max-w-lg font-semibold mb-6 mt-8">PADI Junior Avanced Open Water – From 12 years old</h2>
                  <ExpandableText
                    preview="BAs they grow a bit older and after receiving a junior open water certification, they can start enrolling in more advanced kids diving courses. Accordingly, few options are available for your teens"
                    fullText={
                      <>
                        to continue increasing their experience. There are different course options with which they reach a max depth of 21 meters all between the ages of 12 to 14.
                        <br />
                        Padi Junior Advanced Course, Padi Junior Rescue Course, Padi Junior Master Scuba Diver: Ages 12-14.
                        <br />
                        Eventually, when turning 15 of age, depth and buddy restrictions will be automatically updated. Young divers who were initially certified as a junior open water diver can receive their new card from their PADI Dive
                        Center or PADI’s website. Moreover, there is no special action that needs to be taken to get your new card – contact us for more details.
                        <Link href="/instructors" className="text-[#007c87]">
                          contact us for more details.
                        </Link>
                      </>
                    }
                    className="text-[#8f7887] text-3xl leading-10"
                    symbolColor="#007c87"
                    onToggle={(state) => setExpanded3(state)}
                  />
                </div>
                <div>
                  <div className={`relative w-full overflow-hidden rounded-lg rounded-bl-[200px] shadow-lg transform transition-all duration-500 ${expanded3 ? "pb-[140%] scale-105" : "pb-[80.95%] scale-100"}`}>
                    <Image src="/images/kidsduo.jpg" alt="Kids Learn" fill className="object-cover" />
                  </div>
                </div>

                {/* RIGHT: Expandable text */}
              </div>
            </div>
          </section>
          <section className="min-h-[700px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bgn.png')" }}>
            <div className="container mx-auto px-4">
              <h2 className="text-5xl text-white text-center font-semibold mb-12">Related Diving Offers</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Grid Item 1 */}
                {/* Grid Item 1 */}
                <div className="relative " onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                  {/* Gambar konten */}
                  <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/couple.jpg')" }} />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 h-full flex items-end justify-start px-8 pb-8 text-left">
                      <div>
                        <h3 className="text-white text-2xl font-thin mb-2">Our Course</h3>
                        <p className="text-[#d3ed1e] text-xl">Swim in Crystal Clear Water</p>
                      </div>
                    </div>
                  </div>

                  {/* Popup */}
                  {hoveredPopup === 1 && <CoursePopup title="Availble Courses" courses={courseData1} onClose={() => setHoveredPopup(null)} />}
                </div>

                {/* Grid Item 2 */}
                <div className="relative" onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                  {/* Gambar konten */}
                  <div className="relative h-[400px] w-full overflow-hidden rounded-xl shadow-lg">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/teach.jpg')" }} />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 h-full flex items-end justify-start px-8 pb-8 text-left">
                      <div>
                        <h3 className="text-white text-2xl font-thin mb-2">Our Service</h3>
                        <p className="text-[#d3ed1e] text-xl">Start Your Certification</p>
                      </div>
                    </div>
                  </div>

                  {/* Popup */}
                  {hoveredPopup === 2 && <CoursePopup title="Available Services" courses={courseData2} onClose={() => setHoveredPopup(null)} />}
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    );
  }
