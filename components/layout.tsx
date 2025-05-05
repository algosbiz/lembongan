import type React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
import WhatsAppButton from "./whatsapp-button"
import ScrollToTopButton from "./scrool-auto"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton/>
    </div>
  )
}
