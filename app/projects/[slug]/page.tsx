"use client"

import { useParams } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { projects } from "@/components/projects-section"
import Navbar from "@/components/navbar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Target, Lightbulb, CheckCircle, AlertCircle, Link2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"



export default function ProjectDetailPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const params = useParams()
  const { language, t } = useLanguage()
  const slug = params.slug as string

  const project = projects.find((p) => p.id === slug)

  if (!project) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <Navbar />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {language === "en" ? "Project Not Found 😅" : "项目未找到 😅"}
          </h1>
          <Link href="/#projects">
            <Button className="glass border border-white/20 text-white mt-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "en" ? "Back to Projects" : "返回项目列表"}
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  // const sections = [
  //   {
  //     id: "overview",
  //     titleEn: "Overview",
  //     titleZh: "项目概述",
  //     contentEn: project.overviewEn,
  //     contentZh: project.overviewZh,
  //     icon: <Target className="w-5 h-5" />,
  //     color: "blue",
  //     emoji: "🎯",
  //   },
  //   {
  //     id: "problem",
  //     titleEn: "Problem",
  //     titleZh: "问题背景",
  //     contentEn: project.problemEn,
  //     contentZh: project.problemZh,
  //     icon: <AlertCircle className="w-5 h-5" />,
  //     color: "red",
  //     emoji: "❓",
  //   },
  //   {
  //     id: "method",
  //     titleEn: "Method",
  //     titleZh: "方法论",
  //     contentEn: project.methodEn,
  //     contentZh: project.methodZh,
  //     icon: <Lightbulb className="w-5 h-5" />,
  //     color: "yellow",
  //     emoji: "💡",
  //   },
  //   {
  //     id: "results",
  //     titleEn: "Results",
  //     titleZh: "成果",
  //     contentEn: project.resultsEn,
  //     contentZh: project.resultsZh,
  //     icon: <CheckCircle className="w-5 h-5" />,
  //     color: "green",
  //     emoji: "✅",
  //   },
  // ]
  const sections = [
    {
      id: "context",
      titleEn: "Context",
      titleZh: "项目背景",
      contentEn: project.contextEn,
      contentZh: project.contextZh,
      icon: <AlertCircle className="w-5 h-5" />,
      color: "red",
      emoji: "🌍",
    },
    {
      id: "approach",
      titleEn: "Approach",
      titleZh: "解决方案",
      contentEn: project.approachEn,
      contentZh: project.approachZh,
      icon: <Lightbulb className="w-5 h-5" />,
      color: "yellow",
      emoji: "💡",
    },
    {
      id: "impact",
      titleEn: "Impact",
      titleZh: "项目成果",
      contentEn: project.impactEn,
      contentZh: project.impactZh,
      icon: <CheckCircle className="w-5 h-5" />,
      color: "green",
      emoji: "🚀",
    },
  ]



  const colorClasses: Record<string, string> = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    green: "bg-green-500",
  }

  // return (
  //   <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
  //     <Navbar />

  //     <section className="pt-32 pb-20 px-6">
  //       <div className="max-w-4xl mx-auto">
  //         {/* Back button */}
  //         <Link href="/#projects" className="inline-block mb-8">
  //           <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
  //             <ArrowLeft className="w-4 h-4 mr-2" />
  //             {language === "en" ? "Back to Projects" : "返回项目列表"}
  //           </Button>
  //         </Link>

  //         {/* Title and Icon */}
  //         <div className="flex items-start gap-4 mb-8">
  //           <div className="glass rounded-xl p-4 text-blue-400">
  //             {project.icon}
  //           </div>
  //           <div>
  //             <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
  //               {language === "en" ? project.titleEn : project.titleZh}
  //             </h1>
  //             <p className="text-white/60 text-lg">
  //               {language === "en" ? project.descriptionEn : project.descriptionZh}
  //             </p>
  //           </div>
  //         </div>

  //         {/* External Link */}
  //         {project.externalLink && (
  //           <Card className="glass border border-white/10 p-4 mb-6 flex items-center gap-3 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-white/15">
  //             <Link2 className="w-5 h-5 text-blue-400" />
  //             <span className="text-white/70">
  //               {language === "en" ? "Project Link:" : "项目链接："}
  //             </span>
  //             <a 
  //               href={project.externalLink} 
  //               target="_blank" 
  //               rel="noopener noreferrer"
  //               className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline underline-offset-4"
  //             >
  //               {project.externalLink}
  //             </a>
  //             <ExternalLink className="w-4 h-4 text-blue-400" />
  //           </Card>
  //         )}

  //         {/* Content Sections */}
  //         <div className="space-y-6">
  //           {sections.map((section) => {
  //             const content = language === "en" ? section.contentEn : section.contentZh
  //             if (!content) return null

  //             return (
  //               <Card
  //                 key={section.id}
  //                 className="glass border border-white/10 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-white/15"
  //               >
  //                 <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
  //                   <span className={`w-2 h-2 ${colorClasses[section.color]} rounded-full`}></span>
  //                   <span className="text-white/80">{section.icon}</span>
  //                   {language === "en" ? section.titleEn : section.titleZh} {section.emoji}
  //                 </h2>
  //                 <p className="text-white/70 leading-relaxed">{content}</p>
  //               </Card>
  //             )
  //           })}
  //         </div>

  //         {/* Project Images Gallery - at the bottom */}
  //         {project.images && project.images.length > 0 && (
  //           <div className="mt-12">
  //             <h2 className="text-2xl font-bold text-white mb-6">
  //               {language === "en" ? "Gallery 📸" : "项目图片 📸"}
  //             </h2>

  //             {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //               {project.images.map((image, index) => (
  //                 <div key={index} className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 group">
  //                   <Image
  //                     src={image}
  //                     alt={`${language === "en" ? project.titleEn : project.titleZh} - Image ${index + 1}`}
  //                     fill
  //                     className="object-cover hover:scale-105 transition-transform duration-500"
  //                   />
  //                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  //                 </div>
  //               ))} */}
  //             {/* </div> */}

  //             {/* 网格展示 - 保留原比例，可留白 */}
  //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  //               {project.images.map((image, index) => (
  //                 <div 
  //                   key={index} 
  //                   className="relative aspect-auto rounded-lg overflow-hidden border border-white/10 group cursor-pointer bg-gray-900/50"
  //                   style={{ minHeight: '200px', maxHeight: '300px' }}
  //                   onClick={() => {
  //                     setCurrentImageIndex(index)
  //                     setLightboxOpen(true)
  //                   }}
  //                 >
  //                   <Image
  //                     src={image}
  //                     alt={`${language === "en" ? project.titleEn : project.titleZh} - Image ${index + 1}`}
  //                     width={800}
  //                     height={600}
  //                     className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
  //                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  //                   />
  //                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
  //                     <span className="text-white text-sm bg-black/60 px-3 py-1 rounded-full">
  //                       🔍 {language === "en" ? "Click to enlarge" : "点击放大"}
  //                     </span>
  //                   </div>
  //                 </div>

  //               ))}

  //           </div>
  //         )}
  //       </div>
  //     </section>

  //     {/* 轻量级图片查看器 */}
  //     <Lightbox
  //       open={lightboxOpen}
  //       close={() => setLightboxOpen(false)}
  //       index={currentImageIndex}
  //       slides={project.images?.map(src => ({ src })) || []}
  //       styles={{
  //         container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
  //       }}
  //     />

  //   </main>
  // )
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href="/#projects" className="inline-block mb-8">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "en" ? "Back to Projects" : "返回项目列表"}
            </Button>
          </Link>

          {/* Title and Icon */}
          <div className="flex items-start gap-4 mb-8">
            <div className="glass rounded-xl p-4 text-blue-400">
              {project.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {language === "en" ? project.titleEn : project.titleZh}
              </h1>
              <p className="text-white/60 text-lg">
                {language === "en" ? project.descriptionEn : project.descriptionZh}
              </p>
            </div>
          </div>

          {/* External Link */}
          {project.externalLink && (
            <Card className="glass border border-white/10 p-4 mb-6 flex items-center gap-3 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-white/15">
              <Link2 className="w-5 h-5 text-blue-400" />
              <span className="text-white/70">
                {language === "en" ? "Project Link:" : "项目链接："}
              </span>
              <a 
                href={project.externalLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 underline underline-offset-4"
              >
                {project.externalLink}
              </a>
              <ExternalLink className="w-4 h-4 text-blue-400" />
            </Card>
          )}

          {/* Content Sections */}
          <div className="space-y-6">
            {sections.map((section) => {
              const content = language === "en" ? section.contentEn : section.contentZh
              if (!content) return null

              return (
                <Card
                  key={section.id}
                  className="glass border border-white/10 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-white/15"
                >
                  <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className={`w-2 h-2 ${colorClasses[section.color]} rounded-full`}></span>
                    <span className="text-white/80">{section.icon}</span>
                    {language === "en" ? section.titleEn : section.titleZh} {section.emoji}
                  </h2>
                  <p className="text-white/70 leading-relaxed">{content}</p>
                </Card>
              )
            })}
          </div>

          {/* Project Images Gallery - at the bottom */}
          {project.images && project.images.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">
                {language === "en" ? "Gallery 📸" : "项目图片 📸"}
              </h2>

              {/* 网格展示 - 保留原比例，可留白 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative aspect-auto rounded-lg overflow-hidden border border-white/10 group cursor-pointer bg-gray-900/50"
                    style={{ minHeight: '200px', maxHeight: '300px' }}
                    onClick={() => {
                      setCurrentImageIndex(index)
                      setLightboxOpen(true)
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${language === "en" ? project.titleEn : project.titleZh} - Image ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm bg-black/60 px-3 py-1 rounded-full">
                        🔍 {language === "en" ? "Click to enlarge" : "点击放大"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 轻量级图片查看器 */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentImageIndex}
        slides={project.images?.map(src => ({ src })) || []}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
      />
    </main>
  )
}
