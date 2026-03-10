"use client"

import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "Python", category: "programming" },
  { name: "SQL", category: "programming" },
  { name: "Axure", category: "design" },
  { name: "Data Analysis", category: "analysis" },
  { name: "Product Design", category: "design" },
  { name: "Adobe Creative Suite", category: "design" },
]

const skillCategories = {
  programming: { en: "Programming", zh: "编程" },
  design: { en: "Design", zh: "设计" },
  analysis: { en: "Analysis", zh: "分析" },
}

export default function SkillsSection() {
  const { t, language } = useLanguage()

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge
              key={skill.name}
              variant="outline"
              className="glass glass-hover px-6 py-3 text-base md:text-lg font-medium text-white border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-default"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {skill.name}
            </Badge>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              {language === "en" ? "Programming" : "编程"}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Python</Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">SQL</Badge>
            </div>
          </div>

          <div className="glass rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              {language === "en" ? "Design" : "设计"}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Axure</Badge>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Product Design</Badge>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Adobe Creative Suite</Badge>
            </div>
          </div>

          <div className="glass rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              {language === "en" ? "Analysis" : "分析"}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Data Analysis</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
