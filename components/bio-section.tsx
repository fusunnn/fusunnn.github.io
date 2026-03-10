"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BioSection() {
  const { t, language } = useLanguage()

  const bioContent = {
    en: {
      intro: `I am a final-year undergraduate student at Shanghai International Studies University, majoring in Digital Media and Communication. My academic journey has been driven by a deep curiosity about the intersection of technology and human communication.`,
      passion: `I am passionate about creating AI systems that are both powerful and human-centered. Beyond academics, I am fascinated by the rapidly evolving landscape of AI and its applications in everyday life.`,
    },
    zh: {
      intro: `我是上海外国语大学数字媒体与传播专业的大四学生。我的学术之旅源于对技术与人类沟通交汇点的深刻好奇心。`,
      passion: `我热衷于创建既强大又以人为本的 AI 系统。在学术之外，我对 AI 及其在日常生活中应用的快速发展充满兴趣。`,
    },
  }

  const content = language === "en" ? bioContent.en : bioContent.zh

  return (
    <section id="bio" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("bio.title")} 👋
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Photo in oval frame */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative">
              {/* Oval frame - made larger */}
              <div 
                className="relative overflow-hidden border-2 border-white/20 shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-blue-500/20"
                style={{
                  width: "300px",
                  height: "400px",
                  borderRadius: "50% / 40%",
                }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Profile photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative glow */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-3xl -z-10 opacity-50"
                style={{
                  width: "300px",
                  height: "400px",
                  borderRadius: "50% / 40%",
                }}
              ></div>
            </div>
          </div>

          {/* Right side - Bio content */}
          <div className="lg:col-span-8 space-y-6">
            <Card className="glass border border-white/10 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-white/15">
              <p className="text-white/80 text-lg leading-relaxed">
                {content.intro}
              </p>
            </Card>

            <Card className="glass border border-white/10 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-white/15">
              <p className="text-white/80 text-lg leading-relaxed">
                {content.passion}
              </p>
            </Card>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/bio">
                <Button
                  className="glass border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 hover:bg-white/10"
                >
                  {language === "en" ? "Read More About Me" : "了解更多"} →
                </Button>
              </Link>
              <Button
                className="glass border border-blue-500/50 hover:border-blue-400 text-blue-400 font-semibold px-6 py-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 hover:bg-blue-500/10"
                onClick={() => window.open("mailto:your.email@example.com", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {t("about.cta")} 💬
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
