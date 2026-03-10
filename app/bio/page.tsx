"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { MessageCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function BioPage() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, language } = useLanguage()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const bioContent = {
    en: {
      background: `I am a final-year undergraduate student at Shanghai International Studies University, majoring in Digital Media and Communication. My academic journey has been driven by a deep curiosity about the intersection of technology and human communication.

Throughout my studies, I have developed a strong foundation in data analysis, natural language processing, and digital media production. I believe that technology should serve to enhance human connection and understanding, which is why I am passionate about creating AI systems that are both powerful and human-centered.`,
      interests: `Beyond academics, I am fascinated by the rapidly evolving landscape of AI and its applications in everyday life. I enjoy exploring new technologies, reading about cognitive science, and understanding how machines can better serve human needs.

I am also deeply interested in data journalism and visual storytelling. I believe that data, when presented thoughtfully, can illuminate important truths and drive meaningful conversations. In my free time, I enjoy photography, playing chess, and contributing to open-source projects.`,
      goals: `My career goal is to become a product leader who bridges the gap between cutting-edge AI technology and real-world user needs. I want to build products that are not only technically sophisticated but also intuitive and accessible to everyone.

In the short term, I am looking for opportunities to gain hands-on experience in AI product management and data-driven decision making. Long term, I aspire to lead teams that create innovative solutions addressing important social challenges.`,
    },
    zh: {
      background: `我是上海外国语大学数字媒体与传播专业的大四学生。我的学术之旅源于对技术与人类沟通交汇点的深刻好奇心。

在学习过程中，我在数据分析、自然语言处理和数字媒体制作方面建立了扎实的基础。我相信技术应该服务于增强人与人之间的联系和理解，这就是为什么我热衷于创建既强大又以人为本的 AI 系统。`,
      interests: `在学术之外，我对 AI 及其在日常生活中应用的快速发展充满兴趣。我喜欢探索新技术，阅读认知科学相关内容，并理解机器如何更好地服务于人类需求。

我对数据新闻和视觉叙事也有浓厚的兴趣。我相信，当数据被精心呈现时，可以揭示重要的真相并推动有意义的对话。在空闲时间，我喜欢摄影、下棋和为开源项目做贡献。`,
      goals: `我的职业目标是成为一名能够弥合前沿 AI 技术与现实用户需求之间差距的产品负责人。我想构建不仅技术先进，而且对每个人都直观易用的产品。

短期内，我正在寻找在 AI 产品管理和数据驱动决策方面获得实践经验的机会。长期来看，我渴望领导团队创建解决重要社会挑战的创新解决方案。`,
    },
  }

  const content = language === "en" ? bioContent.en : bioContent.zh

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />

      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left side - Photo in oval frame */}
              <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-32">
                <div className="relative">
                  {/* Oval frame */}
                  <div 
                    className="relative overflow-hidden border-2 border-white/20 shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-blue-500/20"
                    style={{
                      width: "260px",
                      height: "360px",
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
                      width: "260px",
                      height: "360px",
                      borderRadius: "50% / 40%",
                    }}
                  ></div>
                </div>
              </div>

              {/* Right side - Bio content */}
              <div className="lg:col-span-8 space-y-8">
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {t("bio.title")}
                  </h1>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>

                {/* Background */}
                <Card className="glass border border-white/10 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-white/15">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {t("bio.background")}
                  </h2>
                  <div className="text-white/70 leading-relaxed space-y-4">
                    {content.background.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </Card>

                {/* Interests */}
                <Card className="glass border border-white/10 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-white/15">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {t("bio.interests")}
                  </h2>
                  <div className="text-white/70 leading-relaxed space-y-4">
                    {content.interests.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </Card>

                {/* Career Goals */}
                <Card className="glass border border-white/10 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-white/15">
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {t("bio.goals")}
                  </h2>
                  <div className="text-white/70 leading-relaxed space-y-4">
                    {content.goals.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </Card>

                {/* Contact Button */}
                <div className="pt-4">
                  <Button
                    className="glass border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 hover:bg-white/10"
                    onClick={() => window.open("mailto:your.email@example.com", "_blank")}
                  >
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    {t("about.cta")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
