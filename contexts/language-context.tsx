"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "zh"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.bio": "Bio",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.papers": "Papers",
    "nav.skills": "Skills",
    "nav.honors": "Honors",
    "nav.contact": "Contact",
    "nav.backHome": "Back to Home",

    // Hero Section
    "hero.greeting": "Welcome to my website",
    "hero.name": "Lei Yiting", 
    "hero.title": "Network and New Media Student | Journalism & Technology",
    "hero.tagline": "Exploring the intersection of AI, research, and product thinking.",
    "hero.description": "Undergraduate student at Shanghai International Studies University with experience in AI systems, recommendation systems, data journalism, and digital media production.",
    "hero.viewProjects": "View Projects",
    "hero.downloadResumeEn": "Resume (EN)",
    "hero.downloadResumeZh": "Resume (CN)",

    // Projects Section
    "projects.title": "Projects",
    "projects.subtitle": "Projects in AI, data analysis, and product design",
    "projects.viewDetails": "View Details",
    "projects.context": "Context",
    "projects.approach": "Approach",
    "projects.impact": "Impact",
    "projects.viewProject": "View Project",

    // Experience Section
    "experience.title": "Experience",
    "experience.subtitle": "Professional experience in AI and technology industries",
    "experience.responsibilities": "Responsibilities",
    "experience.achievements": "Key Achievements",
    "experience.viewDetails": "View Details",

    // Skills Section
    "skills.title": "Skills",
    "skills.subtitle": "Technical skills and tools I work with",

    // Papers Section
    "papers.title": "Publications",
    "papers.subtitle": "Academic papers and research contributions",
    "papers.viewOnIEEE": "View on IEEE Xplore",

    // Education Section
    "education.title": "Education",
    "education.subtitle": "Academic background and achievements",
    "education.gpa": "GPA",
    "education.activities": "Campus Activities",
    "education.research": "Research Interests",

    // Honors Section
    "honors.title": "Honors & Awards",
    "honors.subtitle": "Recognition and achievements",

    // Bio Section
    "bio.title": "About Me",
    "bio.background": "Background",
    "bio.interests": "Interests",
    "bio.goals": "Career Goals",

    // Footer / Contact
    "footer.connect": "Let's Connect",
    "footer.connect.project": "Let’s connect and build something meaningful together.",
    "footer.made": "Made with",
    "contact.title": "Contact",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.wechat": "WeChat",
    "contact.qq": "QQ",
  },
  
  zh: {
    // Navbar
    "nav.home": "首页",
    "nav.bio": "关于",
    "nav.projects": "项目",
    "nav.experience": "经历",
    "nav.papers": "论文",
    "nav.skills": "技能",
    "nav.honors": "荣誉",
    "nav.contact": "联系",
    "nav.backHome": "返回首页",

    // Hero Section
    "hero.greeting": "欢迎来到我的个人网站",
    "hero.name": "雷怡婷",
    "hero.tagline": "探索人工智能、研究与产品思维的交叉领域。",

    "hero.title": "网络与新媒体专业 | 新闻传播与技术",
    "hero.description": "上海外国语大学本科生，在 AI 系统、推荐系统、数据新闻和数字媒体制作方面拥有丰富经验。",
    "hero.viewProjects": "查看项目",
    "hero.downloadResumeZh": "简历 (中文)",
    "hero.downloadResumeEn": "简历 (英文)",

    // Projects Section
    "projects.title": "项目",
    "projects.subtitle": "我在 AI、数据分析和产品设计等方面的项目",
    "projects.viewDetails": "查看详情",
    "projects.context": "项目背景",
    "projects.approach": "解决方案",
    "projects.impact": "项目成果",
    "projects.viewProject": "查看项目",

    // Experience Section
    "experience.title": "经历",
    "experience.subtitle": "我在 AI 和科技行业的专业经验",
    "experience.responsibilities": "工作职责",
    "experience.achievements": "主要成就",
    "experience.viewDetails": "查看详情",

    // Skills Section
    "skills.title": "技能",
    "skills.subtitle": "我使用的技术技能和工具",

    // Papers Section
    "papers.title": "学术论文",
    "papers.subtitle": "我的学术论文与研究贡献",
    "papers.viewOnIEEE": "在 IEEE Xplore 查看",

    // Education Section
    "education.title": "教育背景",
    "education.subtitle": "我的学术背景与成就",
    "education.gpa": "绩点",
    "education.activities": "校园活动",
    "education.research": "研究兴趣",

    // Honors Section
    "honors.title": "荣誉与奖项",
    "honors.subtitle": "我获得的认可与成就",

    // Bio Section
    "bio.title": "关于我",
    "bio.background": "背景",
    "bio.interests": "兴趣爱好",
    "bio.goals": "职业目标",

    // Footer / Contact
    "footer.connect": "联系我",
    "footer.connect.project": "欢迎联系我，一起创造一些有价值的事情。",
    "footer.made": "制作于",
    "contact.title": "联系方式",
    "contact.email": "邮箱",
    "contact.phone": "手机",
    "contact.wechat": "微信",
    "contact.qq": "QQ",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "zh")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
