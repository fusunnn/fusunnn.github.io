"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Briefcase, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export interface Experience {
  id: string
  companyEn: string
  companyZh: string
  roleEn: string
  roleZh: string
  durationEn: string
  durationZh: string
  descriptionEn: string
  descriptionZh: string
  responsibilitiesEn?: string[]
  responsibilitiesZh?: string[]
  achievementsEn?: string[]
  achievementsZh?: string[]
}

export const experiences: Experience[] = [
  {
    id: "sensetime",
    companyEn: "SenseTime",
    companyZh: "商汤科技",
    roleEn: "Business Operations Intern",
    roleZh: "商业运营实习生",
    durationEn: "2023.06 - 2023.09",
    durationZh: "2023.06 - 2023.09",
    descriptionEn: "Worked on business operations and strategy for AI products, contributing to market analysis and product positioning.",
    descriptionZh: "参与 AI 产品的商业运营和战略工作，为市场分析和产品定位做出贡献。",
    responsibilitiesEn: [
      "Conducted market research and competitive analysis for AI products",
      "Supported product positioning and go-to-market strategy development",
      "Collaborated with cross-functional teams on business development initiatives",
      "Prepared reports and presentations for senior management",
    ],
    responsibilitiesZh: [
      "为 AI 产品进行市场研究和竞争分析",
      "支持产品定位和上市策略制定",
      "与跨职能团队合作开展业务发展计划",
      "为高级管理层准备报告和演示文稿",
    ],
    achievementsEn: [
      "Identified 3 new market opportunities leading to pilot programs",
      "Improved operational efficiency by 20% through process optimization",
      "Contributed to successful launch of 2 AI product features",
    ],
    achievementsZh: [
      "识别了 3 个新市场机会，促成试点项目",
      "通过流程优化将运营效率提高了 20%",
      "参与了 2 个 AI 产品功能的成功发布",
    ],
  },
  {
    id: "zjtii",
    companyEn: "Zhejiang Tsinghua Yangtze River Delta Research Institute",
    companyZh: "之江清华长三角研究院",
    roleEn: "AI Research Intern",
    roleZh: "AI 研究实习生",
    durationEn: "2022.12 - 2023.03",
    durationZh: "2022.12 - 2023.03",
    descriptionEn: "Conducted research on AI systems and contributed to the development of innovative machine learning solutions.",
    descriptionZh: "进行 AI 系统研究，为创新机器学习解决方案的开发做出贡献。",
    responsibilitiesEn: [
      "Researched and implemented machine learning algorithms",
      "Processed and analyzed large-scale datasets",
      "Collaborated with senior researchers on publication projects",
      "Developed prototypes for AI applications",
    ],
    responsibilitiesZh: [
      "研究和实现机器学习算法",
      "处理和分析大规模数据集",
      "与高级研究人员合作进行论文项目",
      "开发 AI 应用原型",
    ],
    achievementsEn: [
      "Co-authored 2 papers published in IEEE conferences",
      "Developed a data processing pipeline reducing analysis time by 50%",
      "Presented research findings at internal seminars",
    ],
    achievementsZh: [
      "共同撰写了 2 篇发表在 IEEE 会议上的论文",
      "开发了数据处理流水线，将分析时间减少了 50%",
      "在内部研讨会上展示研究成果",
    ],
  },
]

export default function ExperienceSection() {
  const { t, language } = useLanguage()

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("experience.title")} 💼
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-white/20 to-transparent hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Link key={exp.id} href={`/experience/${exp.id}`}>
                <div className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-8 w-3 h-3 bg-blue-500 rounded-full -translate-x-1/2 hidden md:block group-hover:scale-150 transition-transform duration-300"></div>

                  <Card
                    className="glass border border-white/10 p-6 md:ml-16 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/20 cursor-pointer"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="glass rounded-xl p-3 text-white/70 group-hover:text-white transition-colors duration-300">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                            {language === "en" ? exp.companyEn : exp.companyZh}
                          </h3>
                          <div className="flex items-center text-white/50 text-sm mt-1 sm:mt-0">
                            <Calendar className="w-4 h-4 mr-1" />
                            {language === "en" ? exp.durationEn : exp.durationZh}
                          </div>
                        </div>
                        <p className="text-blue-400 font-medium mb-3">
                          {language === "en" ? exp.roleEn : exp.roleZh}
                        </p>
                        <p className="text-white/60 leading-relaxed mb-4">
                          {language === "en" ? exp.descriptionEn : exp.descriptionZh}
                        </p>
                        <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                          {t("experience.viewDetails")} 👉
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
