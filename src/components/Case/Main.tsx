"use client"
import { FC, useState, useEffect, useRef } from 'react'
import CaseBaner from './case-banner'
import AboutCase from './case-about'
import CaseResult from './case-result'
import CaseVideo from './case-video'
import UserTestimonials from '../Seminar/UserTestimonials'
import CaseAction from './case-action'
import { ICase } from '@/interface/ICase/case'
import { useParams } from 'next/navigation'
import { client } from "@/sanity/lib/client"
import useLocale from '@/hooks/useLocale'

const CaseMain: FC = () => {
  const { slug } = useParams()
  const locale = useLocale()
  const [caseData, setCaseData] = useState<ICase | null>(null)
  const [loading, setLoading] = useState(true)

  // Ref for scrolling to CaseResult section
  const caseResultRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const fetchCaseData = async () => {
      if (slug) {
        try {
          const data: ICase = await client.fetch(
            `*[_type == "case" && slug.current == $slug][0]`,
            { slug }
          )
          setCaseData(data)
        } catch (error) {
          console.error("Error fetching case data:", error)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchCaseData()
  }, [slug])

  if (loading) {
    return <div>Loading...</div> // You can replace this with a spinner or loading indicator
  }

  if (!caseData) {
    return <div>Case not found</div>
  }


  // Function to scroll to the CaseResult section
  const scrollToResults = () => {
    caseResultRef.current?.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <div>
      <CaseBaner title={caseData.title} description={caseData.description} slider={caseData.slider} youtubeVideo={caseData.youtubeVideo} />
      <AboutCase locale={locale} onResultsClick={scrollToResults} aboutText={caseData.aboutText} tasks={caseData.tasks} solutions={caseData.solutions} />
      <div ref={caseResultRef}>
        <CaseResult results={caseData.results}
          resultImage={caseData.resultImage} />
      </div>
      <CaseVideo />
      <UserTestimonials isShow={false} />
      <CaseAction />
    </div>
  )
}

export default CaseMain