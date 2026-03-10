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
      background: `I am a final-year undergraduate at Shanghai International Studies University, majoring in Digital Media and Communication (GPA: 3.78/4.0).

  CET-4: 584 | CET-6: 568 | TEM-4: Excellent. I am fluent in both Chinese and English, with strong reading and writing proficiency.

  During my studies, I developed a solid foundation in data analysis, natural language processing, and digital media production. I am particularly interested in how technology shapes human communication, and I enjoy exploring the intersection of AI, data, and media.`,

      interests: `Beyond academics, I am fascinated by the rapidly evolving world of AI and its growing role in everyday life. I enjoy exploring emerging technologies, reading about cognitive science, and thinking about how intelligent systems can better serve human needs.

  I am also deeply interested in data journalism and visual storytelling. When presented thoughtfully, data can reveal important insights and spark meaningful conversations. 

In my free time, I enjoy photography, working out, and I'm especially fond of zombie-themed films and TV shows!`,

      goals: `My goal is to become a product leader who bridges cutting-edge AI technology with real-world user needs. I want to build products that are not only technically powerful but also intuitive and human-centered.

  In the short term, I am seeking opportunities to gain hands-on experience in AI product management and data-driven decision making. In the long term, I hope to lead teams that create innovative solutions addressing meaningful social challenges.`,
    },

    zh: {
      background: `我是上海外国语大学网络与新媒体专业的大四学生，绩点 3.78 / 4.0。

  大学英语四级 584、六级 568、专业四级优秀，中英文读写流利。

  在大学期间，我逐步建立了数据分析、自然语言处理和数字媒体制作方面的基础能力。我尤其关注技术如何影响人与人之间的沟通，并持续探索 AI、数据与媒体之间的交叉领域。`,

      interests: `在学术之外，我对 AI 技术及其在日常生活中的应用充满兴趣。我喜欢关注新技术的发展，也喜欢阅读认知科学相关内容，思考智能系统如何更好地服务于人类需求。

  同时，我对数据新闻与视觉叙事也非常感兴趣。我相信，当数据被清晰而有逻辑地呈现时，可以帮助人们理解复杂问题，并引发有价值的公共讨论。

  闲暇时间里，我喜欢摄影、健身，还特别喜欢丧尸影视作品！`,

      goals: `我的职业目标是成为一名能够连接前沿 AI 技术与真实用户需求的产品负责人。我希望构建既具备技术深度，又直观易用、以人为中心的产品。

  短期来看，我希望在产品经理和数据驱动决策相关领域积累实践经验；长期来看，我希望能够带领团队打造解决重要社会问题的创新产品。`,
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
                      width: "360px",
                      height: "560px",
                      borderRadius: "50% / 40%",
                    }}
                  >
                    <Image
                      src="/images/lydia/2_1.jpg"
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
                {/* <div className="pt-4">
                  <Button
                    className="glass border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10 hover:bg-white/10"
                    onClick={() => window.open("mailto:your.email@example.com", "_blank")}
                  >
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    {t("about.cta")}
                  </Button>
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  )
}
