"use client"

import Image from "next/image"
import { ChevronDown, Download } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const { t, language } = useLanguage()

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = (lang: "en" | "zh") => {
    const filePath = lang === "en" ? "/assets/YitingLei_SISU_2026.pdf" : "/assets/雷怡婷_上外_2026.pdf"
    const link = document.createElement("a")
    link.href = filePath
    link.download = lang === "en" ? "YitingLei_SISU_2026.pdf" : "雷怡婷_上外_2026.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Introduction */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="glass rounded-full p-1 mr-3 sm:mr-4 hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/lydia/3_1.jpg"
                alt="Profile photo"
                width={80}
                height={80}
                className="rounded-full sm:w-[100px] sm:h-[100px]"
              />
            </div>
          </div>

          {/* Welcome Text */}
          {/* <p className="text-sm sm:text-lg text-white/60 mb-4 animate-slide-up">
            {t("hero.greeting")}
          </p> */}

          {/* Main Title */}
          <div className="relative mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white px-2 mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {t("hero.name")}
            </h1>

            <p className="text-sm sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {t("hero.tagline")}
            </p>
          </div>


          {/* CTA Buttons */}
          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button
              onClick={scrollToProjects}
              className="glass border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 group transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              {t("hero.viewProjects")}
            </Button>
          </div> */}

          {/* Resume Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={() => downloadResume("zh")}
              variant="outline"
              className="bg-transparent border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-6 py-3 group transition-all duration-300 hover:scale-105 hover:bg-white/5"
            >
              <Download className="w-4 h-4 mr-2" />
              {t("hero.downloadResumeZh")}
            </Button>
            
            <Button
              onClick={() => downloadResume("en")}
              variant="outline"
              className="bg-transparent border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-6 py-3 group transition-all duration-300 hover:scale-105 hover:bg-white/5"
            >
              <Download className="w-4 h-4 mr-2" />
              {t("hero.downloadResumeEn")}
            </Button>

          </div>

          {/* Scroll Button */}
          <div className="flex justify-center animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <button
              onClick={scrollToProjects}
              className="animate-gentle-bounce hover:scale-110 transition-all duration-500 group"
            >
              <div className="glass rounded-full p-2 sm:p-4 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center border border-white/10 hover:border-white/30 transition-colors">
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white/60 group-hover:text-white transition-colors duration-300" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
