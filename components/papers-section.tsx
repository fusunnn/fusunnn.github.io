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
    titleEn: "Knowledge Graph-Enhanced Content Verification for Social Media",
    titleZh: "基于知识图谱增强的社交媒体内容验证",
    authors: "Author Name, et al.",
    venueEn: "IEEE International Conference on Data Engineering (ICDE)",
    venueZh: "IEEE 数据工程国际会议 (ICDE)",
    year: 2024,
    abstractEn: "This paper presents a novel approach to content verification using knowledge graphs combined with transformer-based natural language processing. Our method achieves state-of-the-art performance on benchmark datasets while maintaining real-time processing capabilities.",
    abstractZh: "本文提出了一种利用知识图谱结合基于 Transformer 的自然语言处理的新型内容验证方法。我们的方法在基准数据集上实现了最先进的性能，同时保持了实时处理能力。",
    link: "https://ieeexplore.ieee.org/document/10692925",
  },
  {
    id: "paper-2",
    titleEn: "Context-Aware Recommendation System for Digital Advertising",
    titleZh: "数字广告的上下文感知推荐系统",
    authors: "Author Name, et al.",
    venueEn: "IEEE International Conference on Big Data (Big Data)",
    venueZh: "IEEE 大数据国际会议 (Big Data)",
    year: 2023,
    abstractEn: "We propose a context-aware recommendation framework that integrates temporal patterns, location data, and user behavior to optimize digital advertisement placement. Experiments demonstrate significant improvements in engagement metrics compared to baseline methods.",
    abstractZh: "我们提出了一个上下文感知推荐框架，整合了时间模式、位置数据和用户行为来优化数字广告投放。实验表明，与基线方法相比，参与度指标有显著改善。",
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
