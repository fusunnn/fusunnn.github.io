"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { GraduationCap, BookOpen, Users, Lightbulb } from "lucide-react"

interface Education {
  universityEn: string
  universityZh: string
  majorEn: string
  majorZh: string
  durationEn: string
  durationZh: string
  gpa: string
  activitiesEn: string[]
  activitiesZh: string[]
  researchEn: string[]
  researchZh: string[]
}

const education: Education = {
  universityEn: "Shanghai International Studies University",
  universityZh: "上海外国语大学",
  majorEn: "Network and New Media",
  majorZh: "网络与新媒体",
  durationEn: "2022.09 - 2026.06",
  durationZh: "2022.09 - 2026.06",
  gpa: "3.78/4.0",
  activitiesEn: [
    "President of AI & Data Science Club",
    "Student Ambassador for International Exchange",
    "Volunteer at Tech Innovation Summit",
  ],
  activitiesZh: [
    "AI 与数据科学社团主席",
    "国际交流学生大使",
    "科技创新峰会志愿者",
  ],
  researchEn: [
    "Data Journalism",
    "Natural Language Processing",
    "Knowledge Graphs",
    "Computer Vision",
  ],
  researchZh: [
    "数据新闻",
    "自然语言处理",
    "知识图谱",
    "计算机视觉",
  ],
}

export default function EducationSection() {
  const { t, language } = useLanguage()

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("education.title")}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t("education.subtitle")}
          </p>
        </div>

        <Card className="glass border border-white/10 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/20">
          <div className="flex items-start gap-4 mb-8">
            <div className="glass rounded-xl p-4 text-white/70">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                {language === "en" ? education.universityEn : education.universityZh}
              </h3>
              <p className="text-blue-400 font-medium mb-1">
                {language === "en" ? education.majorEn : education.majorZh}
              </p>
              <p className="text-white/50 text-sm">
                {language === "en" ? education.durationEn : education.durationZh}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* GPA */}
            <div className="glass rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <span className="text-white/70 text-sm font-medium">{t("education.gpa")}</span>
              </div>
              <p className="text-2xl font-bold text-white">{education.gpa}</p>
            </div>

            {/* Campus Activities */}
            <div className="glass rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-white/70 text-sm font-medium">{t("education.activities")}</span>
              </div>
              <ul className="space-y-2">
                {(language === "en" ? education.activitiesEn : education.activitiesZh).map((activity, index) => (
                  <li key={index} className="text-white/80 text-sm leading-relaxed">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Research Interests */}
            <div className="glass rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-blue-400" />
                <span className="text-white/70 text-sm font-medium">{t("education.research")}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {(language === "en" ? education.researchEn : education.researchZh).map((interest, index) => (
                  <span
                    key={index}
                    className="glass px-3 py-1 rounded-full text-xs text-white/80 border border-white/10"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
