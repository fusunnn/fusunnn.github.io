"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { Award, Trophy, Star, Medal } from "lucide-react"

interface Honor {
  id: string
  nameEn: string
  nameZh: string
  year: number
  descriptionEn?: string
  descriptionZh?: string
  icon: React.ReactNode
}

const honors: Honor[] = [
  {
    id: "honor-1",
    nameEn: "National Scholarship",
    nameZh: "国家奖学金",
    year: 2023,
    descriptionEn: "Awarded for outstanding academic performance and research contributions",
    descriptionZh: "因卓越的学术表现和研究贡献而获奖",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    id: "honor-2",
    nameEn: "First Prize, National AI Innovation Competition",
    nameZh: "全国人工智能创新大赛一等奖",
    year: 2023,
    descriptionEn: "Led a team to develop an AI-powered content verification system",
    descriptionZh: "带领团队开发基于 AI 的内容验证系统",
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: "honor-3",
    nameEn: "Outstanding Student Leader Award",
    nameZh: "优秀学生干部奖",
    year: 2022,
    descriptionEn: "Recognized for leadership in student organizations and campus activities",
    descriptionZh: "因在学生组织和校园活动中的领导表现而获得认可",
    icon: <Star className="w-6 h-6" />,
  },
  {
    id: "honor-4",
    nameEn: "Second Prize, Data Journalism Competition",
    nameZh: "数据新闻竞赛二等奖",
    year: 2022,
    descriptionEn: "Created an interactive data story on digital content consumption",
    descriptionZh: "创作了关于数字内容消费的交互式数据故事",
    icon: <Medal className="w-6 h-6" />,
  },
  {
    id: "honor-5",
    nameEn: "Academic Excellence Scholarship",
    nameZh: "学业优秀奖学金",
    year: 2021,
    descriptionEn: "Awarded for maintaining top 5% GPA in the department",
    descriptionZh: "因保持院系前 5% 的绩点而获奖",
    icon: <Trophy className="w-6 h-6" />,
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

          <div className="space-y-6">
            {honors.map((honor, index) => (
              <div key={honor.id} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-8 top-6 w-3 h-3 bg-yellow-500 rounded-full -translate-x-1/2 hidden md:block group-hover:scale-150 transition-transform duration-300"></div>

                <Card
                  className="glass border border-white/10 p-5 md:ml-16 transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-yellow-500/10 hover:border-white/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="glass rounded-xl p-3 text-yellow-500/80 group-hover:text-yellow-400 transition-colors duration-300">
                      {honor.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                          {language === "en" ? honor.nameEn : honor.nameZh}
                        </h3>
                        <span className="text-white/50 text-sm mt-1 sm:mt-0">{honor.year}</span>
                      </div>
                      {(honor.descriptionEn || honor.descriptionZh) && (
                        <p className="text-white/60 text-sm leading-relaxed">
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
