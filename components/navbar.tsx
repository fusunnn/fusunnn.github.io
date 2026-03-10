"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Globe, Menu, X, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const isSubPage = pathname !== "/" && pathname !== ""
  const isDetailPage = pathname.startsWith("/projects/") || pathname.startsWith("/experience/")

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en")
  }

  const navItems = [
    { id: "home", label: t("nav.home"), type: "scroll" },
    { id: "bio", label: t("nav.bio"), type: "link", href: "/bio" },
    { id: "projects", label: t("nav.projects"), type: "scroll" },
    { id: "experience", label: t("nav.experience"), type: "scroll" },
    { id: "papers", label: t("nav.papers"), type: "scroll" },
    { id: "skills", label: t("nav.skills"), type: "scroll" },
    { id: "honors", label: t("nav.honors"), type: "scroll" },
    { id: "contact", label: t("nav.contact"), type: "scroll" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 outline-none ${isScrolled ? "px-4 py-2" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ${
          isScrolled
            ? "glass rounded-2xl px-6 py-3 border border-white/15"
            : "px-4 sm:px-6 py-4 border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg sm:text-xl font-bold text-white md:flex-1 hover:text-white/80 transition-colors">
            Portfolio
          </Link>

          {isDetailPage && (
            <div className="hidden md:flex items-center mr-6">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 nav-item text-white/75 hover:text-white transition-colors relative"
              >
                <ArrowLeft size={20} />
                <span>{t("nav.backHome")}</span>
              </Link>
            </div>
          )}

          {!isDetailPage && (
            <div className="hidden md:flex items-center space-x-6 mr-6">
              {navItems.map((item) => (
                item.type === "link" ? (
                  <Link
                    key={item.id}
                    href={item.href || "/"}
                    className="nav-item text-white/75 hover:text-white transition-colors relative text-sm"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="nav-item text-white/75 hover:text-white transition-colors relative text-sm"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          )}

          <div className="hidden md:flex items-center">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors glass px-3 py-2 rounded-lg hover:scale-105 duration-300"
              aria-label={`Switch to ${language === "en" ? "Chinese" : "English"} language`}
            >
              <Globe size={16} />
              <span className="text-sm font-medium">{language === "en" ? "中文" : "EN"}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-white hover:text-white/80 transition-colors glass px-2 py-1 rounded-lg ml-2"
              aria-label={`Switch to ${language === "en" ? "Chinese" : "English"} language`}
            >
              <Globe size={14} />
              <span className="text-xs font-medium">{language === "en" ? "中文" : "EN"}</span>
            </button>

            {isDetailPage && (
              <Link
                href="/"
                className="text-white hover:text-white/80 transition-colors glass p-2 rounded-lg"
                aria-label="Back to home"
              >
                <ArrowLeft size={20} />
              </Link>
            )}

            {!isDetailPage && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-white/80 transition-colors glass p-2 rounded-lg"
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            )}
          </div>
        </div>

        {isMobileMenuOpen && !isDetailPage && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 animate-fade-in" role="menu">
            <div className="flex flex-col space-y-3 text-center">
              {navItems.map((item) => (
                item.type === "link" ? (
                  <Link
                    key={item.id}
                    href={item.href || "/"}
                    className="text-white hover:text-white/80 transition-colors py-2"
                    role="menuitem"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white hover:text-white/80 transition-colors py-2"
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
