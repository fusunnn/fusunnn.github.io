// "use client"

// import { useLanguage } from "@/contexts/language-context"
// import { Card } from "@/components/ui/card"
// import { Award, Trophy, Star, Medal } from "lucide-react"

// interface Honor {
//   id: string
//   nameEn: string
//   nameZh: string
//   year: number
//   descriptionEn?: string
//   descriptionZh?: string
//   icon: React.ReactNode
// }

// const honors: Honor[] = [
//   {
//     id: "honor-1",
//     nameEn: "National Scholarship",
//     nameZh: "国家奖学金",
//     year: 2023,
//     descriptionEn: "Awarded for outstanding academic performance and research contributions",
//     descriptionZh: "因卓越的学术表现和研究贡献而获奖",
//     icon: <Trophy className="w-6 h-6" />,
//   },
//   {
//     id: "honor-2",
//     nameEn: "First Prize, National AI Innovation Competition",
//     nameZh: "全国人工智能创新大赛一等奖",
//     year: 2023,
//     descriptionEn: "Led a team to develop an AI-powered content verification system",
//     descriptionZh: "带领团队开发基于 AI 的内容验证系统",
//     icon: <Award className="w-6 h-6" />,
//   },
//   {
//     id: "honor-3",
//     nameEn: "Outstanding Student Leader Award",
//     nameZh: "优秀学生干部奖",
//     year: 2022,
//     descriptionEn: "Recognized for leadership in student organizations and campus activities",
//     descriptionZh: "因在学生组织和校园活动中的领导表现而获得认可",
//     icon: <Star className="w-6 h-6" />,
//   },
//   {
//     id: "honor-4",
//     nameEn: "Second Prize, Data Journalism Competition",
//     nameZh: "数据新闻竞赛二等奖",
//     year: 2022,
//     descriptionEn: "Created an interactive data story on digital content consumption",
//     descriptionZh: "创作了关于数字内容消费的交互式数据故事",
//     icon: <Medal className="w-6 h-6" />,
//   },
//   {
//     id: "honor-5",
//     nameEn: "Academic Excellence Scholarship",
//     nameZh: "学业优秀奖学金",
//     year: 2021,
//     descriptionEn: "Awarded for maintaining top 5% GPA in the department",
//     descriptionZh: "因保持院系前 5% 的绩点而获奖",
//     icon: <Trophy className="w-6 h-6" />,
//   },
// ]

// export default function HonorsSection() {
//   const { t, language } = useLanguage()

//   return (
//     <section id="honors" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

//       <div className="relative z-10 max-w-4xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//             {t("honors.title")}
//           </h2>
//           <p className="text-lg text-white/60 max-w-2xl mx-auto">
//             {t("honors.subtitle")}
//           </p>
//         </div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/50 via-white/20 to-transparent hidden md:block"></div>

//           <div className="space-y-6">
//             {honors.map((honor, index) => (
//               <div key={honor.id} className="relative group">
//                 {/* Timeline dot */}
//                 <div className="absolute left-8 top-6 w-3 h-3 bg-yellow-500 rounded-full -translate-x-1/2 hidden md:block group-hover:scale-150 transition-transform duration-300"></div>

//                 <Card
//                   className="glass border border-white/10 p-5 md:ml-16 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-white/20"
//                   style={{ animationDelay: `${index * 100}ms` }}
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="glass rounded-xl p-3 text-yellow-500/80 group-hover:text-yellow-400 transition-colors duration-300">
//                       {honor.icon}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
//                         <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
//                           {language === "en" ? honor.nameEn : honor.nameZh}
//                         </h3>
//                         <span className="text-white/50 text-sm mt-1 sm:mt-0">{honor.year}</span>
//                       </div>
//                       {(honor.descriptionEn || honor.descriptionZh) && (
//                         <p className="text-white/60 text-sm leading-relaxed">
//                           {language === "en" ? honor.descriptionEn : honor.descriptionZh}
//                         </p>
//                       )}
//                     </div>
//                   </div>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Award, Trophy, Star, Medal, Sparkles, Gift, Target, Zap, Crown, Gem, Flame } from "lucide-react"

interface Honor {
  id: string
  nameEn: string
  nameZh: string
  year: number
  semester?: string
  descriptionEn?: string
  descriptionZh?: string
  icon: React.ReactNode
  level?: string
}

const honors: Honor[] = [
  {
    id: "mcm-f",
    nameEn: "Finalist, Mathematical Contest in Modeling (MCM)",
    nameZh: "美国大学生数学建模竞赛 F奖",
    year: 2025,
    descriptionEn: "Top 1% worldwide",
    descriptionZh: "全球前 1%",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    id: "challenge-cup",
    nameEn: "First Prize, 'Challenge Cup' National College Student Competition",
    nameZh: "“挑战杯”全国大学生课外学术科技作品大赛 一等奖",
    year: 2025,
    icon: <Crown className="w-6 h-6" />,
  },

  {
    id: "computer-ability-1",
    nameEn: "Merit Award, Shanghai College Student Computer Application Competition",
    nameZh: "上海市大学生计算机应用能力大赛 优胜奖",
    year: 2025,
    icon: <Zap className="w-6 h-6" />,
  },
  {
    id: "computer-ability-2",
    nameEn: "Third Prize, Shanghai College Student Computer Application Competition",
    nameZh: "上海市大学生计算机应用能力大赛 三等奖",
    year: 2025,
    icon: <Target className="w-6 h-6" />,
  },

  {
    id: "du-zhongyuan",
    nameEn: "Du Zhongyuan News Practice Scholarship - Social Practice Award",
    nameZh: "杜重远新闻实践奖学金 社会实践奖",
    year: 2025,
    descriptionEn: "Shanghai International Studies University",
    descriptionZh: "上海外国语大学",
    icon: <Gift className="w-6 h-6" />,
  },
  {
    id: "apmcm",
    nameEn: "Second Prize, Asia-Pacific Mathematical Contest in Modeling (APMCM)",
    nameZh: "亚太地区大学生数学建模竞赛 二等奖",
    year: 2024,
    descriptionEn: "Top 15% worldwide",
    descriptionZh: "全球前 15%",
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: "media-competition",
    nameEn: "Third Prize, University Student Campus Media Competition",
    nameZh: "大学生校园媒体大赛 三等奖",
    year: 2024,
    descriptionEn: "Data Content and Digital Creativity Category",
    descriptionZh: "数据内容和数字创意类别",
    icon: <Medal className="w-6 h-6" />,
  },
  {
    id: "computer-ability-3",
    nameEn: "Merit Award, Shanghai College Student Computer Application Competition",
    nameZh: "上海市大学生计算机应用能力大赛 优胜奖",
    year: 2024,
    icon: <Sparkles className="w-6 h-6" />,
  },

  {
    id: "scholarship-2425-1",
    nameEn: "Outstanding Student Scholarship - Special Prize",
    nameZh: "优秀学生奖学金 单项奖",
    year: 2024,
    semester: "Fall",
    icon: <Flame className="w-6 h-6" />,
  },
    {
    id: "scholarship-2324-2",
    nameEn: "Outstanding Student Scholarship - Second Prize",
    nameZh: "优秀学生奖学金 二等奖",
    year: 2024,
    semester: "Spring",
    icon: <Gem className="w-6 h-6" />,
  },
    {
    id: "scholarship-2324-1",
    nameEn: "Outstanding Student Scholarship - Second Prize",
    nameZh: "优秀学生奖学金 二等奖",
    year: 2023,
    semester: "Fall",
    icon: <Gem className="w-6 h-6" />,
  },
    {
    id: "scholarship-2223-2",
    nameEn: "Outstanding Student Scholarship - Third Prize",
    nameZh: "优秀学生奖学金 三等奖",
    year: 2023,
    semester: "Spring",
    icon: <Star className="w-6 h-6" />,
  },
    {
    id: "scholarship-2223-1",
    nameEn: "Outstanding Student Scholarship - Third Prize",
    nameZh: "优秀学生奖学金 三等奖",
    year: 2022,
    semester: "Fall",
    icon: <Star className="w-6 h-6" />,
  },
]

export default function HonorsSection() {
  const { t, language } = useLanguage()

  return (
    <section id="honors" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("honors.title")}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t("honors.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/50 via-white/20 to-transparent hidden md:block"></div>

          <div className="space-y-4">
            {honors.map((honor, index) => (
              <div key={honor.id} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-8 top-6 w-3 h-3 bg-yellow-500 rounded-full -translate-x-1/2 hidden md:block group-hover:scale-150 transition-transform duration-300"></div>

                <Card
                  className="glass border border-white/10 p-4 md:ml-16 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-white/20"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="glass rounded-xl p-2.5 text-yellow-500/80 group-hover:text-yellow-400 transition-colors duration-300">
                      {honor.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                        <h3 className="text-base font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
                          {language === "en" ? honor.nameEn : honor.nameZh}
                        </h3>
                        <div className="flex items-center gap-2 text-sm">
                          {honor.semester && (
                            <span className="text-white/40">
                              {language === "en" ? honor.semester : honor.semester === "Fall" ? "秋季" : "春季"}
                            </span>
                          )}
                          <span className="text-white/50">{honor.year}</span>
                        </div>
                      </div>
                      {(honor.descriptionEn || honor.descriptionZh) && (
                        <p className="text-white/50 text-xs leading-relaxed">
                          {language === "en" ? honor.descriptionEn : honor.descriptionZh}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

