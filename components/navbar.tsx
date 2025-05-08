"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const menuItems = [
  {
    title: "Locations",
    items: [
      { name: "Nusa Penida", href: "/locations/penida" },
      { name: "Nusa Lembongan", href: "/locations/lembongan" },
      { name: "Komodo", href: "/locations/komodo" },
    ],
  },
  {
    title: "PADI Courses",
    items: [
      { name: "Our Courses", href: "/padi/courses" },
      { name: "GO Professionals", href: "/padi/professionals" },
    ],
  },
  {
    title: "Go Diving",
    items: [
      { name: "Fun Diving", href: "/diving/fun" },
      { name: "Snorkeling", href: "/diving/snorkeling" },
    ],
  },
  {
    title: "Conservation",
    items: [
      { name: "Our Courses", href: "/conservation/courses" },
      { name: "Our Internship", href: "/conservation/internship" },
    ],
  },
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
        <div className="xl:mx-72 ">
          <div className="flex h-20 items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="w-44 md:w-40 lg:w-48">
                <Image src="/icon/logo.png" alt="Logo" width={200} height={200} className="w-full h-auto object-contain" priority />
              </div>
            </Link>

            {/* Right side menu */}
            <div className="flex items-center">
              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center">
                {menuItems.map((item) => (
                  <div key={item.title} className="relative" onMouseEnter={() => handleMouseEnter(item.title)} onMouseLeave={() => handleMouseLeave(item.title)}>
                    <button className="px-3 py-2 font-medium text-gray-300 text-[16px] hover:text-white flex items-center transition-colors">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    {(activeDesktopMenu === item.title || animatingOutMenu === item.title) && (
                      <div className={`absolute left-0 top-full rounded-b-lg bg-black text-white font-medium shadow-lg min-w-[140px] z-50 overflow-hidden ${animatingOutMenu === item.title ? "animate-dropdown-out" : "animate-dropdown-in"}`}>
                        <div className="pt-5">
                          {item.items.map((subItem) => (
                            <Link key={subItem.name} href={subItem.href} className="block px-4  py-3 text-sm hover:bg-[#0d627b] whitespace-nowrap transition-colors">
                              {subItem.name}
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
                {mobileMenuOpen ? <X className="h-10 w-10" /> : <Menu className="h-10 w-10" />}
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
                        <Link key={subItem.name} href={subItem.href} className="block px-4 py-2 text-sm hover:bg-gray-800 whitespace-nowrap transition-colors">
                          {subItem.name}
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
