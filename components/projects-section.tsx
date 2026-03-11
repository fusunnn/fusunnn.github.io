// "use client"

// import { useLanguage } from "@/contexts/language-context"
// import { Card } from "@/components/ui/card"
// import { ArrowRight, Brain, BarChart3, Accessibility, Radio } from "lucide-react"
// import Link from "next/link"

// export interface Project {
//   id: string
//   titleEn: string
//   titleZh: string
//   descriptionEn: string
//   descriptionZh: string
//   icon: React.ReactNode
//   coverImage?: string
//   overviewEn?: string
//   overviewZh?: string
//   problemEn?: string
//   problemZh?: string
//   methodEn?: string
//   methodZh?: string
//   resultsEn?: string
//   resultsZh?: string
//   externalLink?: string
//   images?: string[]
// }

// export const projects: Project[] = [
//   {
//     id: "ai-verification",
//     titleEn: "Knowledge Graph-Based AI Content Verification System",
//     titleZh: "基于知识图谱的 AI 内容验证系统",
//     descriptionEn: "Developed an AI-powered system for content verification using knowledge graphs and natural language processing.",
//     descriptionZh: "开发了一个基于知识图谱和自然语言处理的 AI 内容验证系统。",
//     icon: <Brain className="w-8 h-8" />,
//     coverImage: "/images/portfolio/snetportada.png",
//     overviewEn: "An intelligent content verification system that leverages knowledge graphs and NLP to automatically detect misinformation and verify claims against trusted sources.",
//     overviewZh: "一个智能内容验证系统，利用知识图谱和自然语言处理技术自动检测虚假信息并根据可信来源验证声明。",
//     problemEn: "With the proliferation of online content, distinguishing between accurate information and misinformation has become increasingly challenging. Manual fact-checking is time-consuming and cannot scale to meet the volume of content being produced.",
//     problemZh: "随着网络内容的激增，区分准确信息和虚假信息变得越来越具有挑战性。人工事实核查耗时且无法扩展以满足生产的内容量。",
//     methodEn: "Implemented a multi-stage pipeline combining named entity recognition, relation extraction, and knowledge graph querying. Used transformer-based models for semantic similarity matching and claim decomposition.",
//     methodZh: "实施了一个多阶段流水线，结合命名实体识别、关系提取和知识图谱查询。使用基于 Transformer 的模型进行语义相似度匹配和声明分解。",
//     resultsEn: "Achieved 85% accuracy in claim verification tasks. The system can process thousands of claims per hour, significantly reducing the workload for human fact-checkers.",
//     resultsZh: "在声明验证任务中达到了 85% 的准确率。该系统每小时可以处理数千条声明，显著减少了人工事实核查员的工作量。",
//     externalLink: "https://github.com/example/ai-verification",
//     images: ["/images/portfolio/snetportada.png", "/images/portfolio/blockhouseportada.png"],
//   },
//   {
//     id: "elevator-ads",
//     titleEn: "Elevator Advertisement Recommendation System",
//     titleZh: "电梯广告推荐系统",
//     descriptionEn: "Built a recommendation system for elevator advertisements using machine learning algorithms and user behavior analysis.",
//     descriptionZh: "使用机器学习算法和用户行为分析构建了电梯广告推荐系统。",
//     icon: <BarChart3 className="w-8 h-8" />,
//     coverImage: "/images/portfolio/c2tportada.png",
//     overviewEn: "A smart recommendation engine that optimizes elevator advertisement placement based on building demographics, time patterns, and viewer engagement metrics.",
//     overviewZh: "一个智能推荐引擎，根据建筑物人口统计、时间模式和观众参与度指标优化电梯广告投放。",
//     problemEn: "Traditional elevator advertising lacks targeting capabilities, leading to low engagement rates and inefficient ad spend. Advertisers need a way to reach their target audience more effectively.",
//     problemZh: "传统电梯广告缺乏定向能力，导致参与率低和广告支出效率低下。广告商需要一种更有效地触达目标受众的方式。",
//     methodEn: "Developed collaborative filtering and content-based recommendation algorithms. Integrated real-time data collection through IoT sensors to track foot traffic and viewing patterns.",
//     methodZh: "开发了协同过滤和基于内容的推荐算法。通过物联网传感器集成实时数据收集，跟踪人流量和观看模式。",
//     resultsEn: "Increased advertisement engagement by 40% and improved advertiser ROI by 25%. The system now serves over 10,000 elevator screens across multiple cities.",
//     resultsZh: "广告参与度提高了 40%，广告商投资回报率提高了 25%。该系统目前服务于多个城市的超过 10,000 块电梯屏幕。",
//     images: ["/images/portfolio/c2tportada.png", "/images/portfolio/treblyportada.png"],
//   },
//   {
//     id: "restroom-signage",
//     titleEn: "Public Restroom Signage Usability Study",
//     titleZh: "公共厕所标识可用性研究",
//     descriptionEn: "Conducted UX research on public restroom signage to improve accessibility and user experience.",
//     descriptionZh: "对公共厕所标识进行用户体验研究，以提高可访问性和用户体验。",
//     icon: <Accessibility className="w-8 h-8" />,
//     coverImage: "/images/portfolio/glocalportada.png",
//     overviewEn: "A comprehensive UX research study examining the effectiveness of public restroom signage and proposing evidence-based design improvements for better accessibility.",
//     overviewZh: "一项全面的用户体验研究，研究公共厕所标识的有效性，并提出基于证据的设计改进建议以提高可访问性。",
//     problemEn: "Many public restroom signs are confusing, inconsistent, or inaccessible to people with disabilities, leading to frustration and exclusion.",
//     problemZh: "许多公共厕所标识令人困惑、不一致或对残障人士不可访问，导致挫败感和排斥。",
//     methodEn: "Conducted field studies, user interviews, and eye-tracking experiments. Analyzed signage across 50+ public locations and surveyed 200+ participants from diverse backgrounds.",
//     methodZh: "进行了实地研究、用户访谈和眼动追踪实验。分析了 50 多个公共场所的标识，并调查了 200 多名来自不同背景的参与者。",
//     resultsEn: "Developed a comprehensive design guideline adopted by 3 municipal governments. Recommendations improved wayfinding success rate by 60% in pilot implementations.",
//     resultsZh: "制定了被 3 个市政府采用的综合设计指南。建议在试点实施中将寻路成功率提高了 60%。",
//     images: ["/images/portfolio/glocalportada.png", "/images/portfolio/betrustyportada.png"],
//   },
//   {
//     id: "midnight-media",
//     titleEn: "Awake at Midnight Media Project",
//     titleZh: "午夜醒来媒体项目",
//     descriptionEn: "Created a digital media project exploring late-night content consumption patterns and storytelling.",
//     descriptionZh: "创建了一个数字媒体项目，探索深夜内容消费模式和故事叙述。",
//     icon: <Radio className="w-8 h-8" />,
//     coverImage: "/images/portfolio/baiaportada.png",
//     overviewEn: "An innovative digital media project combining data journalism with creative storytelling to explore the habits and psychology of late-night content consumers.",
//     overviewZh: "一个创新的数字媒体项目，将数据新闻与创意故事叙述相结合，探索深夜内容消费者的习惯和心理。",
//     problemEn: "Little research exists on why people consume content late at night and what types of content resonate with this audience. Media producers lack insights into this significant market segment.",
//     problemZh: "关于人们为什么在深夜消费内容以及什么类型的内容与这些受众产生共鸣的研究很少。媒体制作人缺乏对这一重要市场细分的洞察。",
//     methodEn: "Combined quantitative analysis of streaming platform data with qualitative interviews of night owls. Created interactive data visualizations and multimedia storytelling pieces.",
//     methodZh: "将流媒体平台数据的定量分析与夜猫子的定性访谈相结合。创建了交互式数据可视化和多媒体故事叙述作品。",
//     resultsEn: "The project reached 100,000+ viewers and was featured in digital media publications. Insights were used by 2 streaming platforms to optimize their late-night content strategy.",
//     resultsZh: "该项目触达了 10 万多名观众，并被数字媒体出版物报道。2 个流媒体平台使用了这些洞察来优化其深夜内容策略。",
//     externalLink: "https://example.com/midnight-media",
//     images: ["/images/portfolio/baiaportada.png", "/images/portfolio/siwaportada.png"],
//   },
// ]

// export default function ProjectsSection() {
//   const { t, language } = useLanguage()

//   return (
//     <section id="projects" className="py-20 relative">
//       <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

//       <div className="relative z-10 max-w-6xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//             {t("projects.title")} 🚀
//           </h2>
//           <p className="text-lg text-white/60 max-w-2xl mx-auto">
//             {t("projects.subtitle")}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map((project, index) => (
//             <Link key={project.id} href={`/projects/${project.id}`}>
//               <Card
//                 className="glass border border-white/10 overflow-hidden h-full group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/20"
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 <div className="p-6">
//                   <div className="flex items-start gap-4">
//                     <div className="glass rounded-xl p-3 text-white/70 group-hover:text-blue-400 transition-colors duration-300">
//                       {project.icon}
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
//                         {language === "en" ? project.titleEn : project.titleZh}
//                       </h3>
//                       <p className="text-white/60 text-sm md:text-base leading-relaxed mb-4">
//                         {language === "en" ? project.descriptionEn : project.descriptionZh}
//                       </p>
//                       <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
//                         {t("projects.viewDetails")} 👉
//                         <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { useLanguage } from "@/contexts/language-context"
import { Card } from "@/components/ui/card"
import { ArrowRight, Brain, BarChart3, Accessibility, Radio, Sparkles, Target, Activity, Layers, Eye, Map, PenTool, Zap, Users, Trophy } from "lucide-react"
import Link from "next/link"

export interface Project {
  id: string
  titleEn: string
  titleZh: string
  descriptionEn: string
  descriptionZh: string
  icon: React.ReactNode
  coverImage?: string
  contextEn?: string
  contextZh?: string
  approachEn?: string
  approachZh?: string
  impactEn?: string
  impactZh?: string
  skills?: string[]
  externalLink?: string
  visionEn?:string
  visionZh?:string
  images?: string[]
  role?: string
  recognition?: string[]
}

// export const projects: Project[] = [
//   {
//     id: "aigc-verification",
//     titleEn: "AIGC Content Authenticity Evaluation System Based on Knowledge Graph",
//     titleZh: "基于知识图谱的AIGC媒体内容真实性评测方法",
//     descriptionEn: "Designed a knowledge graph-based evaluation framework for AIGC content authenticity, achieving 80% accuracy in test sets.",
//     descriptionZh: "主导设计并实现了一套基于知识图谱的AIGC内容真实性评测产品框架，测试集准确率达到80%。",
//     icon: <Brain className="w-8 h-8" />,
//     role: "Project Lead",
//     overviewEn: "Led the design and implementation of a knowledge graph-based evaluation framework for assessing the authenticity of AIGC-generated media content, significantly reducing misinformation misclassification.",
//     overviewZh: "主导设计并实现了一套基于知识图谱的AIGC内容真实性评测产品框架，构建知识图谱验证逻辑与评估指标体系，有效降低了虚假信息的误判率。",
//     methodEn: "Developed knowledge graph validation logic and evaluation metrics. Collaborated with Xinhua News Agency, Jiefang Daily, and Zhejiang Tsinghua Yangtze River Delta Research Institute through multiple technical discussions.",
//     methodZh: "构建知识图谱验证逻辑与评估指标体系，带领团队与新华社、解放日报、浙江清华长三角研究院进行多轮技术研讨。",
//     resultsEn: "Achieved 80% accuracy on test sets. Filed 1 invention patent. Won Third Prize in 2025 Shanghai College Student Computer Application Competition and First Prize in 'Challenge Cup'.",
//     resultsZh: "测试集准确率达到80%，申请发明专利1项，获2025年上海市计算机应用能力大赛三等奖、“挑战杯”一等奖。",
//     recognition: ["Xinhua News Agency", "Jiefang Daily", "Yangtze Delta Region Institute"],
//     images: [
//     "/images/projects/aigc/knowledge_graph.jpg",
//     "/images/projects/aigc/flowchart.jpg",
//     "/images/projects/aigc/图片3.jpg",
//     "/images/projects/aigc/web1.jpg",
//     "/images/projects/aigc/web2.jpg",
//     "/images/projects/aigc/上海证券报.jpg",
//     "/images/projects/aigc/解放日报.jpg",
//     "/images/projects/aigc/语言研究院.jpg",
//     "/images/projects/aigc/新传院.jpg",
//     ],
//   },
//   {
//     id: "elevator-ads",
//     titleEn: "An Elevator Advertisement Recommendation System Design based on Machine Vision and Deep Learning",
//     titleZh: "基于视觉传感器的电梯广告精准推荐与分析系统",
//     descriptionEn: "Led the design of an AI-driven elevator ad system using facial recognition for real-time user profiling and dynamic ad matching.",
//     descriptionZh: "主导系统产品设计与功能规划，基于人脸识别构建用户画像逻辑，设计广告动态匹配机制。",
//     icon: <BarChart3 className="w-8 h-8" />,
//     role: "Project Lead",
//     overviewEn: "Designed a real-time AI recommendation system for elevator advertisements, balancing accuracy and latency to meet on-device playback requirements.",
//     overviewZh: "主导系统产品设计与功能规划，基于人脸识别构建用户画像逻辑，设计广告动态匹配机制，协调算法开发与系统实现。",
//     methodEn: "Developed user profiling logic based on facial recognition and designed dynamic ad matching algorithms. Balanced trade-offs between accuracy and response latency.",
//     methodZh: "基于人脸识别构建用户画像逻辑，设计广告动态匹配机制，在精度与响应延迟之间进行权衡设计。",
//     resultsEn: "Achieved 24ms real-time response. Published first-author paper at BDAI 2024 (EI indexed). Awarded University-level Excellent Innovation Project and Merit Award in Computer Competition.",
//     resultsZh: "实现平均24ms实时响应，以第一作者身份撰写论文并发表于2024年BDAI国际会议 (EI收录)，校级优秀大创项目，获计算机大赛优胜奖。",
//     images: [
//     "/images/projects/elevator/图片2.jpg",
//     "/images/projects/elevator/图片3.jpg",
//     "/images/projects/elevator/图片10.jpg",
//     ],
  
//   },
//   {
//     id: "restroom-signage",
//     titleEn: "Public Restroom Signage Usability Study: 'Are Restroom Signs Confusing?'",
//     titleZh: "《厕所标识“男女不分”?我们走访了200个公共厕所》",
//     descriptionEn: "Led a field study surveying 200+ public restrooms in Shanghai, analyzing signage confusion and accessibility issues.",
//     descriptionZh: "带领团队实地走访上海市200余个公共厕所，发现标识混乱对不同群体的使用障碍。",
//     icon: <Map className="w-8 h-8" />,
//     role: "Project Lead",
//     overviewEn: "Conducted a large-scale field study on public restroom signage in Shanghai, identifying accessibility barriers and transforming findings into a data journalism piece.",
//     overviewZh: "带领团队实地走访上海市200余个公共厕所，采集并分析了大量标识图片与用户反馈数据，发现标识混乱对不同群体的使用障碍。",
//     methodEn: "Collected and analyzed signage images and user feedback data. Performed data cleaning, statistical analysis, and visualization to support findings.",
//     methodZh: "采集并分析了大量标识图片与用户反馈数据，完成数据清洗、统计分析与可视化制图。",
//     resultsEn: "Published on The Paper (澎湃新闻), 2,500+ reads on WeChat, awarded 'Pai Editor's Choice: No. 1 in Data Journalism Category'.",
//     resultsZh: "作品发表于澎湃新闻，在公众号平台获得2500+阅读量，被评为“湃客编辑部优质稿件-数据新闻类NO.1”。",
//     images: [
//     "/images/projects/restroom/图片1.jpg",
//     "/images/projects/restroom/图片2.jpg",
//     "/images/projects/restroom/图片3.jpg",
//     "/images/projects/restroom/图片6.jpg",
//     ],
//     externalLink: "https://m.thepaper.cn/newsDetail_forward_27876371",
//   },
//   {
//     id: "midnight-media",
//     titleEn: "'Awake at Midnight' Multimedia Journalism Project",
//     titleZh: "“在午夜清醒着”融合新闻报道产品",
//     descriptionEn: "Responsible for content planning, shooting, and editing for WeChat and Douyin, achieving 50K+ total exposures.",
//     descriptionZh: "负责公众号与抖音账号的内容策划、拍摄与排版，累计发布7篇推送、17个短视频，全网总曝光量超过5w+。",
//     icon: <Radio className="w-8 h-8" />,
//     role: "Content Creator & Operator",
//     overviewEn: "Produced and operated a multimedia journalism project exploring late-night content consumption patterns and storytelling.",
//     overviewZh: "负责公众号与抖音账号的内容策划、拍摄与排版，累计发布7篇公众号推送、17个抖音短视频。",
//     methodEn: "Planned content strategy, filmed videos, edited materials, and managed social media operations across multiple platforms.",
//     methodZh: "负责内容策划、拍摄与排版，管理多平台社交媒体运营。",
//     resultsEn: "Total exposures exceeded 50,000+, with a single article reaching 8,000+ reads. Average engagement rate (likes/comments) reached 5%.",
//     resultsZh: "全网总曝光量超过5w+，单篇最高阅读量达8k，互动率（点赞/评论）平均达到5%。",
//     externalLink: "https://mp.weixin.qq.com/s/CO4_CE3FIkKxxfXCOx_FiQ",
//   },
//   {
//     id: "calmwave",
//     titleEn: "'CalmWave' Mental Health App Interface Design",
//     titleZh: "“CalmWave”心理健康软件数字界面设计",
//     descriptionEn: "Designed a mental health app from concept to high-fidelity prototype based on user research and competitive analysis.",
//     descriptionZh: "策划了一款心理健康App，通过用户访谈与竞品分析，完成42页高保真交互原型图设计。",
//     icon: <PenTool className="w-8 h-8" />,
//     role: "Product Designer",
//     overviewEn: "Identified social needs for mental health support among young adults and designed a user-centered mental health application.",
//     overviewZh: "洞察当代年轻人心理焦虑的社会需求，策划了一款心理健康App，通过20+用户访谈与10+竞品分析。",
//     methodEn: "Conducted 20+ user interviews and 10+ competitive analyses. Wrote PRD, designed 42-page high-fidelity interactive prototype, and iterated based on user feedback.",
//     methodZh: "通过20+用户访谈与10+竞品分析，输出完整需求分析报告，主导撰写PRD文档。完成42页高保真交互原型图的设计。",
//     resultsEn: "Reduced core task completion time by 20% through optimized interface flow based on user feedback.",
//     resultsZh: "根据用户反馈优化界面流程，将核心任务完成时间缩短了20%。",
//     externalLink: "https://app.mockplus.cn/s/PeR9bDD6G?",
//   },
// ]


export const projects: Project[] = [

{
  id: "aigc-verification",
  titleEn: "AIGC Content Authenticity Evaluation System Based on Knowledge Graph",
  titleZh: "基于知识图谱的AIGC媒体内容真实性评测方法",

  descriptionEn:
    "Designed and implemented a knowledge graph-based framework to evaluate the authenticity of AIGC-generated media content, achieving 80% accuracy on test datasets.",
  descriptionZh:
    "设计并实现基于知识图谱的AIGC媒体内容真实性评测框架，在测试集上达到80%的识别准确率。",

  icon: <Brain className="w-8 h-8" />,
  role: "Project Lead",

  contextEn:
    "With the rapid growth of AIGC-generated media content, hallucinated information has become a critical challenge for news verification. This project aimed to design a systematic evaluation framework to assess the authenticity of AI-generated media content.",
  contextZh:
    "在AIGC深度参与媒体生产的背景下，生成内容中的“幻觉”问题对新闻真实性带来了挑战。本项目旨在设计一套系统化评测框架，用于评估AIGC媒体内容的真实性。",

  approachEn:
    "Designed the core verification logic based on knowledge graph reasoning and built a structured evaluation pipeline for media content authenticity. Developed evaluation metrics and conducted technical discussions with Xinhua News Agency, Jiefang Daily, and Zhejiang Tsinghua Yangtze River Delta Research Institute.",
  approachZh:
    "构建基于知识图谱推理的验证逻辑，设计媒体内容真实性评测流程与指标体系，并与新华社、解放日报、浙江清华长三角研究院进行多轮技术研讨。",

  impactEn:
    "Achieved 80% accuracy on evaluation test sets. Filed 1 invention patent. Won First Prize in the 'Challenge Cup' and Third Prize in the 2025 Shanghai Computer Application Competition.",
  impactZh:
    "测试集准确率达到80%，申请发明专利1项，获“挑战杯”一等奖与2025年上海市计算机应用能力大赛三等奖。",

  recognition: ["Xinhua News Agency", "Jiefang Daily", "Yangtze Delta Region Institute"],

  images: [
    "/images/projects/aigc/knowledge_graph.jpg",
    "/images/projects/aigc/flowchart.jpg",
    "/images/projects/aigc/图片3.jpg",
    "/images/projects/aigc/web1.jpg",
    "/images/projects/aigc/web2.jpg",
    "/images/projects/aigc/上海证券报.jpg",
    "/images/projects/aigc/解放日报.jpg",
    "/images/projects/aigc/语言研究院.jpg",
    "/images/projects/aigc/新传院.jpg"
  ]
},

{
  id: "elevator-ads",
  titleEn:
    "Elevator Advertisement Recommendation System Based on Machine Vision",
  titleZh: "基于视觉传感器的电梯广告精准推荐系统",

  descriptionEn:
    "Led the design of an AI-driven elevator advertising system using machine vision for real-time audience profiling and ad matching.",
  descriptionZh:
    "主导设计基于机器视觉的电梯广告推荐系统，实现实时用户画像与广告动态匹配。",

  icon: <BarChart3 className="w-8 h-8" />,
  role: "Project Lead",

  contextEn:
    "Traditional elevator advertising lacks personalization and data-driven targeting. This project explored how machine vision and deep learning could enable real-time audience analysis and dynamic ad recommendation.",
  contextZh:
    "传统电梯广告缺乏数据驱动的精准投放能力。本项目探索利用机器视觉与深度学习技术实现实时人群识别与广告动态推荐。",

  approachEn:
    "Designed user profiling logic based on facial recognition and developed dynamic ad-matching algorithms. Balanced trade-offs between recognition accuracy and response latency for real-time system performance.",
  approachZh:
    "基于人脸识别构建用户画像逻辑，设计广告动态匹配算法，并在识别精度与系统响应延迟之间进行优化权衡。",

  impactEn:
    "Achieved 24ms real-time response latency. Published first-author paper at BDAI 2024 (EI indexed). Awarded University-level Excellent Innovation Project.",
  impactZh:
    "实现平均24ms实时响应，以第一作者身份在BDAI 2024国际会议发表论文（EI收录），获校级优秀大创项目。",
  images: [
    "/images/projects/elevator/BDAI_1.jpg",
    "/images/projects/elevator/BDAI_3.jpg",
    "/images/projects/elevator/图片9.jpg",
    "/images/projects/elevator/图片2.jpg",
    "/images/projects/elevator/图片3.jpg",
    "/images/projects/elevator/图片1.jpg",
    "/images/projects/elevator/图片4.jpg",
    "/images/projects/elevator/图片5.jpg",
    "/images/projects/elevator/图片11.jpg",
  ]
},

{
  id: "calmwave",
  titleEn: "'CalmWave' Mental Health App Design",
  titleZh: "CalmWave心理健康App产品设计",

  descriptionEn:
    "Designed a mental health mobile application prototype from user research to high-fidelity interface design.",
  descriptionZh:
    "从用户研究到高保真原型设计，完成心理健康App产品方案。",

  icon: <PenTool className="w-8 h-8" />,
  role: "Product Designer",

  contextEn:
    "Increasing anxiety among young adults highlights the need for accessible mental health support tools. This project explored a user-centered product solution.",
  contextZh:
    "当代年轻人的心理焦虑问题日益突出，本项目尝试设计一款以用户为中心的心理健康产品。",

  approachEn:
    "Conducted 20+ user interviews and 10+ competitive analyses. Wrote PRD documentation and designed a 42-page high-fidelity interactive prototype.",
  approachZh:
    "通过20+用户访谈与10+竞品分析完成需求研究，撰写PRD文档并设计42页高保真交互原型。",

  impactEn:
    "Optimized interface interaction flow based on user feedback and reduced core task completion time by 20%.",
  impactZh:
    "根据用户反馈优化交互流程，使核心任务完成时间缩短20%。",


  externalLink:
    "https://app.mockplus.cn/s/PeR9bDD6G?"
},

{
  id: "restroom-signage",
  titleEn: "Public Restroom Signage Usability Study",
  // titleEn: "When Restroom Signs Fail: A Data Analysis of User Experience Across 200 Public Facilities",
  titleZh: "公共厕所标识可用性研究",

  descriptionEn:
    "Led a field research project surveying 200+ public restrooms in Shanghai to analyze signage usability and accessibility issues.",
  descriptionZh:
    "带领团队实地调研上海市200余个公共厕所，研究标识设计的可用性与可达性问题。",

  icon: <Map className="w-8 h-8" />,
  role: "Project Lead",

  contextEn:
    "Public restroom signage can create confusion for different user groups, especially tourists and elderly people. This project investigated usability issues through large-scale field research.",
  contextZh:
    "公共厕所标识设计常导致不同用户群体产生识别困扰。本项目通过大规模实地调研分析标识设计的可用性问题。",

  approachEn:
    "Conducted field surveys across 200+ public restrooms in Shanghai. Collected signage images and user feedback data, followed by data cleaning, statistical analysis, and visualization.",
  approachZh:
    "走访上海市200余个公共厕所，采集标识图片与用户反馈数据，并完成数据清洗、统计分析与可视化呈现。",

  impactEn:
    "Published as a data journalism article on The Paper. Achieved 2,500+ reads and was awarded 'Pai Editor's Choice – No.1 in Data Journalism Category'.",
  impactZh:
    "作品《厕所标识“男女不分”？我们走访了200个公共厕所》发表于澎湃新闻平台，微信公众号平台获得2500+阅读量，并被评为“湃客编辑部优质稿件—数据新闻类NO.1”。",


  images: [
    "/images/projects/restroom/图片1.jpg",
    "/images/projects/restroom/图片2.jpg",
    "/images/projects/restroom/图片3.jpg",
    "/images/projects/restroom/图片6.jpg",
    "/images/projects/restroom/图片4.jpg",
    "/images/projects/restroom/图片7.jpg",
  ],

  externalLink:
    "https://m.thepaper.cn/newsDetail_forward_27876371"
},

{
  id: "midnight-media",
  titleEn: "'Awake at Midnight' Multimedia Journalism Project",
  titleZh: "“在午夜清醒着”融合新闻项目",

  descriptionEn:
    "Produced and operated a multimedia journalism project exploring late-night content consumption.",
  descriptionZh:
    "策划并运营融合媒体项目，探索青年群体的午夜内容消费与叙事表达。",

  icon: <Radio className="w-8 h-8" />,
  role: "Content Creator & Operator",

  contextEn:
    "Late-night digital media consumption is growing among young audiences, yet storytelling formats remain limited. This project explored new narrative forms through multimedia storytelling.",
  contextZh:
    "年轻群体的午夜内容消费不断增长，但相关叙事形式仍较单一。本项目尝试通过融合媒体叙事进行内容创新。",

  approachEn:
    "Planned content strategy, produced videos and long-form articles, and managed multi-platform publishing across WeChat and Douyin.",
  approachZh:
    "负责内容策划、视频拍摄、排版编辑及多平台发布运营。",

  impactEn:
    "Published 7 articles and 17 short videos with total exposure exceeding 50,000+. Highest single article reached 8,000 reads.",
  impactZh:
    "累计发布7篇公众号文章、17条短视频，全网曝光量超过5万，单篇最高阅读量达8000。",


  externalLink:
    "https://mp.weixin.qq.com/s/CO4_CE3FIkKxxfXCOx_FiQ",
  
   visionEn: "No matter how times change or how the medium evolves, humanity's need for quality resources and desire for profound, diverse thinking will never change. In an ever-shifting media landscape, our goal remains the same: to continue using words as our medium to tell stories that touch hearts and inspire thought, regardless of length or form.",
   visionZh: "无论时代如何变迁、传播介质如何变化，人类对优质稀缺资源的需求和对深刻多元思想的渴望永远不会改变。在不断变化的媒体景观中，我们的目标始终是无论时间长短、形势如何，继续以字为媒，传递那些能触动人心、引发思考的故事。"
}



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
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {language === "en" ? project.titleEn : project.titleZh}
                        </h3>
                        {project.role && (
                          <span className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/60">
                            {project.role}
                          </span>
                        )}
                      </div>
                      <p className="text-white/60 text-sm md:text-base leading-relaxed mb-3">
                        {language === "en" ? project.descriptionEn : project.descriptionZh}
                      </p>
                      {project.recognition && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.recognition.map((item, i) => (
                            <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                        {/* {t("projects.viewDetails")} 👉 */}
                        {t("projects.viewDetails")} 
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

