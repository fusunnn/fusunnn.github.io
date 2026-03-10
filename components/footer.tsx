"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { Mail, Github, Linkedin, Download } from "lucide-react"

export default function Footer() {
  const { t, language } = useLanguage()

  return (
    <footer id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            {t("footer.connect.project")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:your.email@example.com"
            className="glass glass-hover rounded-xl p-6 text-center group transition-all duration-300 hover:scale-105"
          >
            <div className="glass rounded-full p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-1">{t("contact.email")}</h3>
            <p className="text-white/70 text-sm">your.email@example.com</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover rounded-xl p-6 text-center group transition-all duration-300 hover:scale-105"
          >
            <div className="glass rounded-full p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Github className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-1">{t("contact.github")}</h3>
            <p className="text-white/70 text-sm">@yourusername</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover rounded-xl p-6 text-center group transition-all duration-300 hover:scale-105"
          >
            <div className="glass rounded-full p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-1">{t("contact.linkedin")}</h3>
            <p className="text-white/70 text-sm">@yourusername</p>
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover rounded-xl p-6 text-center group transition-all duration-300 hover:scale-105"
          >
            <div className="glass rounded-full p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white font-semibold mb-1">{t("contact.resume")}</h3>
            <p className="text-white/70 text-sm">PDF</p>
          </a>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center pt-8 border-t border-white/10">
          <div className="text-white/75 text-sm">
            {t("footer.made")} <span className="text-red-500">v0</span> © 2026
          </div>
        </div>
      </div>
    </footer>
  )
}
