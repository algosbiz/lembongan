"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const menuItems = [
  {
    title: "Go Diving",
    items: ["Daily Fun Diving", "Snorkeling"],
  },
  // {
  //   title: "Visit & Stay",
  //   items: ["About Us", "Transfer & Lodging", "News"],
  // },
  {
    title: "PADI Courses",
    items: ["About Our Courses", "Beginner Courses", "Advanced Courses"],
  },
  {
    title: "Become Pro",
    items: ["Divemaster Courses", "Instructor Development Course", "Beyond Instructor", "Course Director Training"],
  },
  {
    title: "Conservation Courses",
    items: ["About Our Courses", "1.5 Days Courses", "3.5 Days Courses", "6 Days Courses", "3 Weeks Program", "About Marine Megafauna"],
  },
  // {
  //   title: "Pricing",
  //   items: ["Price lists", "Special Offers", "General Terms & Conditions"],
  // },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);
  const [animatingOutMenu, setAnimatingOutMenu] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const animationTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (animatingOutMenu === title) {
      setAnimatingOutMenu(null);
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    }
    setActiveDesktopMenu(title);
  };

  const handleMouseLeave = (title: string) => {
    timeoutRef.current = window.setTimeout(() => {
      setAnimatingOutMenu(title);
      animationTimeoutRef.current = window.setTimeout(() => {
        setActiveDesktopMenu(null);
        setAnimatingOutMenu(null);
      }, 200);
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="w-full">
        {/* Gunakan wrapper tambahan untuk kontrol lebar dan posisi */}
        <div className="mx-72">
          <div className="flex h-20 items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-32 md:w-40 lg:w-48">
                <Image src="/icon/logo.png" alt="Logo" width={200} height={200} className="w-full h-auto object-contain" priority />
              </div>
            </Link>

            {/* Right side menu */}
            <div className="flex items-center">
              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center">
                {menuItems.map((item) => (
                  <div key={item.title} className="relative" onMouseEnter={() => handleMouseEnter(item.title)} onMouseLeave={() => handleMouseLeave(item.title)}>
                    <button className="px-3 py-2 text-gray-300 text-[16px] hover:text-white flex items-center transition-colors">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    {(activeDesktopMenu === item.title || animatingOutMenu === item.title) && (
                      <div className={`absolute left-0 top-full bg-black text-white shadow-lg min-w-[140px] z-50 overflow-hidden ${animatingOutMenu === item.title ? "animate-dropdown-out" : "animate-dropdown-in"}`}>
                        <div className="py-1">
                          {item.items.map((subItem) => (
                            <Link key={subItem} href="#" className="block px-4 py-2 text-sm hover:bg-gray-800 whitespace-nowrap transition-colors">
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Contact button */}
              <Button className="hidden lg:inline-flex ml-4 bg-[#45c0c7] text-white">Contact</Button>

              {/* Mobile menu toggle */}
              <Button variant="ghost" size="icon" className="lg:hidden text-white ml-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black text-white animate-fade-in-down border-t border-gray-800">
          <div className="px-4 py-2">
            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <div key={item.title} className="border-b border-gray-800">
                  <button onClick={() => toggleSubmenu(item.title)} className="flex items-center justify-between w-full py-4 px-2 text-[16px]">
                    <span>{item.title}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === item.title ? "rotate-180" : ""}`} />
                  </button>

                  {openSubmenu === item.title && (
                    <div className="pl-4 pb-4 space-y-2 animate-fade-in">
                      {item.items.map((subItem) => (
                        <Link key={subItem} href="#" className="block py-2 text-gray-300 hover:text-white text-[16px] transition-colors">
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="py-4">
                <Button className="w-full">Contact Us</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
