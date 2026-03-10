"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Paper {
  id: string
  titleEn: string
  titleZh: string
  authors: string
  venueEn: string
  venueZh: string
  year: number
  abstractEn: string
  abstractZh: string
  link: string
}

const papers: Paper[] = [
  {
    id: "paper-1",
    titleEn: "An Elevator Advertisement Recommendation System Design based on Machine Vision and Deep Learning",
    titleZh: "基于机器学习和深度学习的电梯广告推荐系统",
    authors: "First Author",
    venueEn: "BDAI 2024 (EI-indexed)",
    venueZh: "BDAI 2024 国际会议 (EI收录)",
    year: 2024,
    abstractEn: "In recent years, machine vision sensors have been continuously developed and gradually applied to advertising industry for accurate advertisement recommendation. However, because of the isolated environment, it is very difficult to recommend advertisement in elevator cages. In this study, a novel advertisement recommendation system is designed for the elevator, based on machine vision sensors, Raspberry Pi, deep learning neural networks, information management system, and socket communication, which are employed to analyze the features of the passengers in the elevators and recommend the most suitable advertisements for them. This system aims to help advertisers improve the effect of advertising activities. The simulation results show that the proposed system in this paper has a very accurate performance and can be widely applied in the elevators.",
    abstractZh: "近年来，机器视觉传感器不断被开发并逐步应用于广告行业，以实现准确的广告推荐。然而，由于环境偏僻，推荐在电梯笼内投放广告非常困难。本研究设计了一套基于机器视觉传感器、树莓派、深度学习神经网络、信息管理系统和插座通信的新型电梯广告推荐系统，这些系统用于分析电梯乘客的特征并推荐最合适的广告。该系统旨在帮助广告主提升广告活动的效果。模拟结果表明，本文提出的系统性能非常精确，且可广泛应用于电梯。",
    link: "https://ieeexplore.ieee.org/document/10692925",
  },
  {
    id: "paper-2",
    titleEn: "Audience Behavior Analysis System Design for Outdoor Advertising based on Machine Vision",
    titleZh: "基于机器视觉的户外广告受众行为分析系统",
    authors: "Third Author",
    venueEn: "BDAI 2024 (EI-indexed)",
    venueZh: "BDAI 2024 国际会议 (EI收录)",
    year: 2023,
    abstractEn: "In recent years, machine vision technology has been continuously developed and gradually integrated with the advertising and media industry. This study applies machine vision technology to the outdoor advertising scene, with machine vision as the core system, using pedestrian recognition and facial recognition technology to analyze the audience’s response to outdoor advertising, helping advertisers improve the effectiveness and monitoring efficiency of their advertising campaigns. Simulation experiment results show that the machine vision-based outdoor advertising audience behavior analysis system proposed in this study has practical application value.",
    abstractZh: "近年来，机器视觉技术不断发展，并逐步融入广告和媒体行业。本研究将机器视觉技术应用于户外广告领域，以机器视觉为核心系统，利用行人识别和面部识别技术分析受众对户外广告的反应，帮助广告主提升广告活动的效果和监控效率。模拟实验结果表明，本研究提出的基于机器视觉的户外广告受众行为分析系统具有实际应用价值。",
    link: "https://ieeexplore.ieee.org/document/10257089",
  },
]

export default function PapersSection() {
  const { t, language } = useLanguage()

  return (
    <section id="papers" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("papers.title")} 📄
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t("papers.subtitle")}
          </p>
        </div>

        <div className="space-y-6">
          {papers.map((paper, index) => (
            <Card
              key={paper.id}
              className="glass border border-white/10 p-6 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="glass rounded-xl p-3 text-white/70">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {language === "en" ? paper.titleEn : paper.titleZh}
                  </h3>
                  <p className="text-white/70 text-sm mb-2">{paper.authors}</p>
                  <p className="text-blue-400 text-sm font-medium mb-3">
                    {language === "en" ? paper.venueEn : paper.venueZh} | {paper.year}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {language === "en" ? paper.abstractEn : paper.abstractZh}
                  </p>
                  <Button
                    onClick={() => window.open(paper.link, "_blank")}
                    variant="outline"
                    className="bg-transparent border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-sm px-4 py-2 transition-all duration-300 hover:scale-105 hover:bg-white/5"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("papers.viewOnIEEE")}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
