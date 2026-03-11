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
    id: "zjtii",
    companyEn: "Yangtze Delta Region Institute of Tsinghua University, Zhejiang",
    companyZh: "浙江清华长三角研究院",
    roleEn: "AI Research Intern | Haina Cognitive and Intelligence Research Center",
    roleZh: "AI科研实习生 | 海纳认知与智能研究中心",
    durationEn: "Jan 2025 - Mar 2025",
    durationZh: "2025.01 - 2025.03",
    descriptionEn: "Experienced how academic research can translate into real-world technological solutions.",
    descriptionZh: "亲身体验了学术研究如何转化为现实世界的技术解决方案。",
    responsibilitiesEn: [
      "Deeply involved in core AI research projects and patent development",
      "Conducted literature reviews and technical feasibility analysis on frontier AI topics",
      "Wrote bilingual research reports and technical reviews",
      "Assisted in project planning, progress tracking, and milestone coordination"
    ],
    responsibilitiesZh: [
      "深度参与实验室核心AI科研项目和专利申请",
      "负责前沿论文调研与技术可行性分析",
      "撰写中英文科研报告与综述材料",
      "协助制定项目详细计划，跟踪并协调项目进度，确保关键节点按时交付"
    ],
    achievementsEn: [
      "Contributed to an AIGC hallucination detection project, including data collection, statistical analysis, and preliminary algorithm design",
      "Assisted in the database design and system setup for a web platform",
      "Participated in thread defect detection and grain-storage pest recognition projects",
      "Drafted one patent disclosure document",
      "Conducted global research and wrote three analytical reports, later adopted for project reference"
    ],
    achievementsZh: [
      "参与AIGC幻觉检测项目，完成数据采集、数据统计和初步算法设计",
      "协助完成 1 个网站的数据库设计和系统搭建",
      "参与螺纹不合格检测项目、粮仓害虫识别项目并成功完成任务",
      "撰写专利交底书 1 份",
      "通过全球调研，撰写 3 份报告并被采纳使用",
    ],
  },
  {
    id: "sensetime",
    companyEn: "SenseTime",
    companyZh: "商汤科技",
    roleEn: "Business Operations Intern | Intelligent Vehicle Division",
    roleZh: "商务运营实习生 | 智能汽车事业群",
    durationEn: "Jul 2024 - Sep 2024",
    durationZh: "2024.07 - 2024.09",
    descriptionEn: "Learned how business needs, client communication, and product delivery connect in real-world operations.",
    descriptionZh: "在真实业务环境中理解了商业需求、客户沟通与产品交付之间的联系。",
    responsibilitiesEn: [
      "Supported the business team in CRM and daily operations",
      "Organized and analyzed client data, producing structured business reports and dashboards",
      "Participated in the end-to-end process of product sales and delivery",
      "Assisted in the planning and coordination of large-scale internal events",
      "Responsible for event photography, video editing, and copywriting"
    ],
    responsibilitiesZh: [
      "支持商务团队，辅助团队进行客户关系管理",
      "整理并分析客户数据，完成数据报表",
      "参与产品销售、交付等全流程",
      "协助策划和组织大型会议",
      "负责会议摄影、视频剪辑及文案撰写"
    ],
    achievementsEn: [
      "Produced 20+ business reports and maintained customer and operational datasets",
      "Participated in 50+ product sales and delivery workflows",
      "Assisted in organizing a 200+ participant all-hands meeting",
      "Collected historical team materials and produced a 4-minute opening video for the meeting",
      "Received positive feedback from the department"
    ],
    achievementsZh: [
      "完成 20+ 份数据报表和客户数据维护、商务数据维护",
      "参与 50+ 项产品销售、交付等全流程",
      "参与策划并组织 200+ 人规模的全员会议",
      "整理部门成员过往资料，制作 4 min+ 暖场视频",
      "获部门好评"
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
                          {/* {t("experience.viewDetails")} 👉 */}
                          {t("experience.viewDetails")} 
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
