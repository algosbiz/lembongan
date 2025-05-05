"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const menuItems = [
  {
    title: "Go Diving",
    items: ["Daily Fun Diving", "Dive Sites", "Snorkeling"],
  },
  {
    title: "Visit & Stay",
    items: ["About Us", "Transfer & Lodging", "News"],
  },
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
  {
    title: "Pricing",
    items: ["Price lists", "Special Offers", "General Terms & Conditions"],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null)
  const [animatingOutMenu, setAnimatingOutMenu] = useState<string | null>(null)
  const timeoutRef = useRef<number | null>(null)
  const animationTimeoutRef = useRef<number | null>(null)

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
      if (animationTimeoutRef.current !== null) {
        window.clearTimeout(animationTimeoutRef.current)
      }
    }
  }, [])

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  const handleMouseEnter = (title: string) => {
    // Clear any existing timeouts
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }

    // If we're animating out this menu, stop the animation
    if (animatingOutMenu === title) {
      setAnimatingOutMenu(null)
      if (animationTimeoutRef.current !== null) {
        window.clearTimeout(animationTimeoutRef.current)
        animationTimeoutRef.current = null
      }
    }

    setActiveDesktopMenu(title)
  }

  const handleMouseLeave = (title: string) => {
    // Set a timeout to start the fade-out animation
    timeoutRef.current = window.setTimeout(() => {
      setAnimatingOutMenu(title)

      // Set a timeout to actually remove the menu after animation completes
      animationTimeoutRef.current = window.setTimeout(() => {
        setActiveDesktopMenu(null)
        setAnimatingOutMenu(null)
        animationTimeoutRef.current = null
      }, 200) // Match this to the animation duration

      timeoutRef.current = null
    }, 100)
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main Navbar */}
      <div className="bg-black text-white">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-32 md:w-40 lg:w-48">
                <Image src="/icon/logo.png" alt="Logo" width={200} height={200} className="w-full h-auto object-contain" priority />
              </div>
            </Link>
          </div>

          {/* Right side: Menu items + Contact button */}
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {menuItems.map((item) => (
                <div key={item.title} className="relative" onMouseEnter={() => handleMouseEnter(item.title)} onMouseLeave={() => handleMouseLeave(item.title)}>
                  <button className="px-3 py-2 text-gray-300 hover:text-white transition-colors flex items-center">
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  {(activeDesktopMenu === item.title || animatingOutMenu === item.title) && (
                    <div
                      className={`absolute left-0 top-full bg-black text-white shadow-lg overflow-hidden w-auto min-w-[140px] ${animatingOutMenu === item.title ? "animate-dropdown-out" : "animate-dropdown-in"}`}
                      onMouseEnter={() => handleMouseEnter(item.title)}
                      onMouseLeave={() => handleMouseLeave(item.title)}
                    >
                      <div className="py-1">
                        {item.items.map((subItem) => (
                          <Link key={subItem} href="#" className="block px-4 py-2 text-sm hover:bg-gray-800 transition-colors whitespace-nowrap">
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Button (Desktop) */}
            <Button className="hidden lg:inline-flex ml-2 text-white border-[#45c0c7] bg-[#45c0c7] ">Contact</Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Fade in/out below navbar */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black text-white animate-fade-in-down border-t border-gray-800">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col">
              {menuItems.map((item) => (
                <div key={item.title} className="border-b border-gray-800">
                  <button onClick={() => toggleSubmenu(item.title)} className="flex items-center justify-between w-full py-4 px-2">
                    <span>{item.title}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === item.title ? "transform rotate-180" : ""}`} />
                  </button>

                  {openSubmenu === item.title && (
                    <div className="pl-4 pb-4 space-y-2 animate-fade-in">
                      {item.items.map((subItem) => (
                        <Link key={subItem} href="#" className="block py-2 text-gray-300 hover:text-white transition-colors">
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
