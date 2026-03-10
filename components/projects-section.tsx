"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { ArrowRight, Brain, BarChart3, Accessibility, Radio } from "lucide-react"
import Link from "next/link"

export interface Project {
  id: string
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
  icon: React.ReactNode
  coverImage?: string
  overviewEn?: string
  overviewZh?: string
  problemEn?: string
  problemZh?: string
  methodEn?: string
  methodZh?: string
  resultsEn?: string
  resultsZh?: string
  externalLink?: string
  images?: string[]
}

export const projects: Project[] = [
  {
    id: "ai-verification",
    titleEn: "Knowledge Graph-Based AI Content Verification System",
    titleZh: "基于知识图谱的 AI 内容验证系统",
    descriptionEn: "Developed an AI-powered system for content verification using knowledge graphs and natural language processing.",
    descriptionZh: "开发了一个基于知识图谱和自然语言处理的 AI 内容验证系统。",
    icon: <Brain className="w-8 h-8" />,
    coverImage: "/images/portfolio/snetportada.png",
    overviewEn: "An intelligent content verification system that leverages knowledge graphs and NLP to automatically detect misinformation and verify claims against trusted sources.",
    overviewZh: "一个智能内容验证系统，利用知识图谱和自然语言处理技术自动检测虚假信息并根据可信来源验证声明。",
    problemEn: "With the proliferation of online content, distinguishing between accurate information and misinformation has become increasingly challenging. Manual fact-checking is time-consuming and cannot scale to meet the volume of content being produced.",
    problemZh: "随着网络内容的激增，区分准确信息和虚假信息变得越来越具有挑战性。人工事实核查耗时且无法扩展以满足生产的内容量。",
    methodEn: "Implemented a multi-stage pipeline combining named entity recognition, relation extraction, and knowledge graph querying. Used transformer-based models for semantic similarity matching and claim decomposition.",
    methodZh: "实施了一个多阶段流水线，结合命名实体识别、关系提取和知识图谱查询。使用基于 Transformer 的模型进行语义相似度匹配和声明分解。",
    resultsEn: "Achieved 85% accuracy in claim verification tasks. The system can process thousands of claims per hour, significantly reducing the workload for human fact-checkers.",
    resultsZh: "在声明验证任务中达到了 85% 的准确率。该系统每小时可以处理数千条声明，显著减少了人工事实核查员的工作量。",
    externalLink: "https://github.com/example/ai-verification",
    images: ["/images/portfolio/snetportada.png", "/images/portfolio/blockhouseportada.png"],
  },
  {
    id: "elevator-ads",
    titleEn: "Elevator Advertisement Recommendation System",
    titleZh: "电梯广告推荐系统",
    descriptionEn: "Built a recommendation system for elevator advertisements using machine learning algorithms and user behavior analysis.",
    descriptionZh: "使用机器学习算法和用户行为分析构建了电梯广告推荐系统。",
    icon: <BarChart3 className="w-8 h-8" />,
    coverImage: "/images/portfolio/c2tportada.png",
    overviewEn: "A smart recommendation engine that optimizes elevator advertisement placement based on building demographics, time patterns, and viewer engagement metrics.",
    overviewZh: "一个智能推荐引擎，根据建筑物人口统计、时间模式和观众参与度指标优化电梯广告投放。",
    problemEn: "Traditional elevator advertising lacks targeting capabilities, leading to low engagement rates and inefficient ad spend. Advertisers need a way to reach their target audience more effectively.",
    problemZh: "传统电梯广告缺乏定向能力，导致参与率低和广告支出效率低下。广告商需要一种更有效地触达目标受众的方式。",
    methodEn: "Developed collaborative filtering and content-based recommendation algorithms. Integrated real-time data collection through IoT sensors to track foot traffic and viewing patterns.",
    methodZh: "开发了协同过滤和基于内容的推荐算法。通过物联网传感器集成实时数据收集，跟踪人流量和观看模式。",
    resultsEn: "Increased advertisement engagement by 40% and improved advertiser ROI by 25%. The system now serves over 10,000 elevator screens across multiple cities.",
    resultsZh: "广告参与度提高了 40%，广告商投资回报率提高了 25%。该系统目前服务于多个城市的超过 10,000 块电梯屏幕。",
    images: ["/images/portfolio/c2tportada.png", "/images/portfolio/treblyportada.png"],
  },
  {
    id: "restroom-signage",
    titleEn: "Public Restroom Signage Usability Study",
    titleZh: "公共厕所标识可用性研究",
    descriptionEn: "Conducted UX research on public restroom signage to improve accessibility and user experience.",
    descriptionZh: "对公共厕所标识进行用户体验研究，以提高可访问性和用户体验。",
    icon: <Accessibility className="w-8 h-8" />,
    coverImage: "/images/portfolio/glocalportada.png",
    overviewEn: "A comprehensive UX research study examining the effectiveness of public restroom signage and proposing evidence-based design improvements for better accessibility.",
    overviewZh: "一项全面的用户体验研究，研究公共厕所标识的有效性，并提出基于证据的设计改进建议以提高可访问性。",
    problemEn: "Many public restroom signs are confusing, inconsistent, or inaccessible to people with disabilities, leading to frustration and exclusion.",
    problemZh: "许多公共厕所标识令人困惑、不一致或对残障人士不可访问，导致挫败感和排斥。",
    methodEn: "Conducted field studies, user interviews, and eye-tracking experiments. Analyzed signage across 50+ public locations and surveyed 200+ participants from diverse backgrounds.",
    methodZh: "进行了实地研究、用户访谈和眼动追踪实验。分析了 50 多个公共场所的标识，并调查了 200 多名来自不同背景的参与者。",
    resultsEn: "Developed a comprehensive design guideline adopted by 3 municipal governments. Recommendations improved wayfinding success rate by 60% in pilot implementations.",
    resultsZh: "制定了被 3 个市政府采用的综合设计指南。建议在试点实施中将寻路成功率提高了 60%。",
    images: ["/images/portfolio/glocalportada.png", "/images/portfolio/betrustyportada.png"],
  },
  {
    id: "midnight-media",
    titleEn: "Awake at Midnight Media Project",
    titleZh: "午夜醒来媒体项目",
    descriptionEn: "Created a digital media project exploring late-night content consumption patterns and storytelling.",
    descriptionZh: "创建了一个数字媒体项目，探索深夜内容消费模式和故事叙述。",
    icon: <Radio className="w-8 h-8" />,
    coverImage: "/images/portfolio/baiaportada.png",
    overviewEn: "An innovative digital media project combining data journalism with creative storytelling to explore the habits and psychology of late-night content consumers.",
    overviewZh: "一个创新的数字媒体项目，将数据新闻与创意故事叙述相结合，探索深夜内容消费者的习惯和心理。",
    problemEn: "Little research exists on why people consume content late at night and what types of content resonate with this audience. Media producers lack insights into this significant market segment.",
    problemZh: "关于人们为什么在深夜消费内容以及什么类型的内容与这些受众产生共鸣的研究很少。媒体制作人缺乏对这一重要市场细分的洞察。",
    methodEn: "Combined quantitative analysis of streaming platform data with qualitative interviews of night owls. Created interactive data visualizations and multimedia storytelling pieces.",
    methodZh: "将流媒体平台数据的定量分析与夜猫子的定性访谈相结合。创建了交互式数据可视化和多媒体故事叙述作品。",
    resultsEn: "The project reached 100,000+ viewers and was featured in digital media publications. Insights were used by 2 streaming platforms to optimize their late-night content strategy.",
    resultsZh: "该项目触达了 10 万多名观众，并被数字媒体出版物报道。2 个流媒体平台使用了这些洞察来优化其深夜内容策略。",
    externalLink: "https://example.com/midnight-media",
    images: ["/images/portfolio/baiaportada.png", "/images/portfolio/siwaportada.png"],
  },
]

export default function ProjectsSection() {
  const { t, language } = useLanguage()

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("projects.title")} 🚀
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card
                className="glass border border-white/10 overflow-hidden h-full group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="glass rounded-xl p-3 text-white/70 group-hover:text-blue-400 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                        {language === "en" ? project.titleEn : project.titleZh}
                      </h3>
                      <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
                        {language === "en" ? project.descriptionEn : project.descriptionZh}
                      </p>
                      <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                        {t("projects.viewDetails")} 👉
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
