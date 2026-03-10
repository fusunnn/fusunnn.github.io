"use client"

import { useParams } from "next/navigation"
import { useLanguage } from "@/contexts/language-context"
import { experiences } from "@/components/experience-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase, Calendar, CheckCircle, ListChecks } from "lucide-react"
import Link from "next/link"

export default function ExperienceDetailPage() {
  const params = useParams()
  const { language, t } = useLanguage()
  const slug = params.slug as string

  const experience = experiences.find((e) => e.id === slug)

  if (!experience) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <Navbar />
        <div className="pt-32 pb-20 px-6 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {language === "en" ? "Experience Not Found" : "经历未找到"}
          </h1>
          <Link href="/#experience">
            <Button className="glass border border-white/20 text-white mt-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "en" ? "Back to Experience" : "返回经历列表"}
            </Button>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const responsibilities = language === "en" ? experience.responsibilitiesEn : experience.responsibilitiesZh
  const achievements = language === "en" ? experience.achievementsEn : experience.achievementsZh

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href="/#experience" className="inline-block mb-8">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "en" ? "Back to Experience" : "返回经历列表"}
            </Button>
          </Link>

          {/* Header */}
          <Card className="glass border border-white/10 p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="glass rounded-xl p-4 text-white/80">
                <Briefcase className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {language === "en" ? experience.companyEn : experience.companyZh}
                </h1>
                <p className="text-blue-400 text-xl font-medium mb-3">
                  {language === "en" ? experience.roleEn : experience.roleZh}
                </p>
                <div className="flex items-center text-white/50 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {language === "en" ? experience.durationEn : experience.durationZh}
                </div>
              </div>
            </div>
          </Card>

          {/* Description */}
          <Card className="glass border border-white/10 p-6 mb-6">
            <p className="text-white/70 leading-relaxed text-lg">
              {language === "en" ? experience.descriptionEn : experience.descriptionZh}
            </p>
          </Card>

          {/* Responsibilities */}
          {responsibilities && responsibilities.length > 0 && (
            <Card className="glass border border-white/10 p-6 mb-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5 hover:border-white/15">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <ListChecks className="w-5 h-5 text-white/80" />
                {t("experience.responsibilities")}
              </h2>
              <ul className="space-y-3">
                {responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <Card className="glass border border-white/10 p-6 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/5 hover:border-white/15">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <CheckCircle className="w-5 h-5 text-white/80" />
                {t("experience.achievements")}
              </h2>
              <ul className="space-y-3">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
