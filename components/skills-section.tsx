// "use client"

// import { useLanguage } from "@/contexts/language-context"
// import { Badge } from "@/components/ui/badge"

// const skills = [
//   { name: "Python", category: "programming" },
//   { name: "SQL", category: "programming" },
//   { name: "Axure", category: "design" },
//   { name: "Data Analysis", category: "analysis" },
//   { name: "Product Design", category: "design" },
//   { name: "Adobe Creative Suite", category: "design" },
// ]

// const skillCategories = {
//   programming: { en: "Programming", zh: "编程" },
//   design: { en: "Design", zh: "设计" },
//   analysis: { en: "Analysis", zh: "分析" },
// }

// export default function SkillsSection() {
//   const { t, language } = useLanguage()

//   return (
//     <section id="skills" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

//       <div className="relative z-10 max-w-4xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//             {t("skills.title")}
//           </h2>
//           <p className="text-lg text-white/75 max-w-2xl mx-auto">
//             {t("skills.subtitle")}
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-4">
//           {skills.map((skill, index) => (
//             <Badge
//               key={skill.name}
//               variant="outline"
//               className="glass glass-hover px-6 py-3 text-base md:text-lg font-medium text-white border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-default"
//               style={{ animationDelay: `${index * 50}ms` }}
//             >
//               {skill.name}
//             </Badge>
//           ))}
//         </div>

//         {/* Skill Categories */}
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="glass rounded-xl p-6 text-center">
//             <h3 className="text-xl font-bold text-white mb-3">
//               {language === "en" ? "Programming" : "编程"}
//             </h3>
//             <div className="flex flex-wrap justify-center gap-2">
//               <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">Python</Badge>
//               <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">SQL</Badge>
//             </div>
//           </div>

//           <div className="glass rounded-xl p-6 text-center">
//             <h3 className="text-xl font-bold text-white mb-3">
//               {language === "en" ? "Design" : "设计"}
//             </h3>
//             <div className="flex flex-wrap justify-center gap-2">
//               <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Axure</Badge>
//               <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Product Design</Badge>
//               <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Adobe Creative Suite</Badge>
//             </div>
//           </div>

//           <div className="glass rounded-xl p-6 text-center">
//             <h3 className="text-xl font-bold text-white mb-3">
//               {language === "en" ? "Analysis" : "分析"}
//             </h3>
//             <div className="flex flex-wrap justify-center gap-2">
//               <Badge className="bg-green-500/20 text-green-300 border-green-500/30">Data Analysis</Badge>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui/badge"

const skills = [
  // 编程开发
  { name: "Python", category: "programming" },
  { name: "C", category: "programming" },
  { name: "SQL", category: "programming" },
  { name: "HTML5", category: "programming" },
  // 设计与原型
  { name: "Axure", category: "design" },
  { name: "XMind", category: "design" },
  { name: "Visio", category: "design" },
  { name: "PS", category: "design" },
  { name: "PR", category: "design" },
  { name: "Ai", category: "design" },
  // 数据分析
  { name: "Data Analysis", category: "analysis" },
  { name: "Data Visualization", category: "analysis" },
  // 新闻采编（新增分类）
  { name: "Interviewing", category: "journalism" },
  { name: "Photography", category: "journalism" },
  { name: "Video Editing", category: "journalism" },
  { name: "Copywriting", category: "journalism" },
  { name: "News Writing", category: "journalism" },
  // 办公工具（新增分类）
  { name: "Office", category: "office" },
]

const skillCategories = {
  programming: { en: "Programming", zh: "编程" },
  design: { en: "Design", zh: "设计" },
  analysis: { en: "Analysis", zh: "分析" },
  journalism: { en: "Journalism", zh: "新闻采编" },
  office: { en: "Office", zh: "办公工具" },
}

export default function SkillsSection() {
  const { t, language } = useLanguage()

  // 按分类整理技能
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill.name)
    return acc
  }, {} as Record<string, string[]>)

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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Object.entries(skillCategories).map(([key, label]) => (
            <div key={key} className="glass rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-3">
                {language === "en" ? label.en : label.zh}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {skillsByCategory[key]?.map((skillName) => {
                  // 根据分类设置不同颜色
                  let colorClass = "bg-blue-500/20 text-blue-300 border-blue-500/30"
                  if (key === "design") colorClass = "bg-purple-500/20 text-purple-300 border-purple-500/30"
                  if (key === "analysis") colorClass = "bg-green-500/20 text-green-300 border-green-500/30"
                  if (key === "journalism") colorClass = "bg-orange-500/20 text-orange-300 border-orange-500/30"
                  if (key === "office") colorClass = "bg-gray-500/20 text-gray-300 border-gray-500/30"
                  
                  return (
                    <Badge key={skillName} className={colorClass}>
                      {skillName}
                    </Badge>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}