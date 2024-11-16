"use client"
import { FC, useState, useEffect, useRef } from 'react'
import SeminarBanner from './seminar-banner'
import SeminarProggram from './seminar-proggram'
import SeminarSpeakers from './seminar-speakers'
import InfoPrice from './seminar-info'
import SeminarOldVideo from './seminar-video'
import UserTestimonials from '../UserTestimonials'
import SeminarActions from './seminar-actions'
import { client } from "@/sanity/lib/client"
import { ISeminarData } from '@/interface/ISeminar/seminar'
import useLocale from '@/hooks/useLocale'
import { useParams } from 'next/navigation'


const MainSeminarItems: FC = () => {
  const [status, setStatus] = useState(false)
  const videoRef = useRef<HTMLDivElement | null>(null)
  const [seminarData, setSeminarData] = useState<ISeminarData | null>(null)
  const locale = useLocale()
  const { slug } = useParams()

  const handleScrollToVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "seminar" && slug.current == $slug][0]{
            ...,
            seminarProgram[]{
              ...,
              speaker-> {
                name,
                position,
                image,
                description
              }
            },
            speakers[]-> {
              name,
              position,
              image,
              description
            }
          }`,
          { slug }
        );
  
        if (data) {
          setSeminarData(data);
          setStatus(data.status === 'new');
        } else {
          console.warn('No data found for the provided slug');
        }
      } catch (error) {
        console.debug('Error fetching seminar data:', error);
      }
    };
  
    if (slug) {
      fetchData();
    }
  }, [locale, slug]);
  



  


  return (
    <div>
      <SeminarBanner
        locale={locale}
        title={seminarData?.title ?? { ru: '', uz: '', en: '' }} // Fallback to an empty object
        description={seminarData?.description ?? { ru: '', uz: '', en: '' }}
        date={seminarData?.date ?? ''} // Fallback to an empty string
        time={seminarData?.time ?? ''} // Fallback to an empty string
        image={seminarData?.image ?? { _type: 'image', asset: { _ref: '', _type: 'reference' } }}
        address={seminarData?.address ?? { ru: '', uz: '', en: '' }}
        status={status}
        onButtonClick={handleScrollToVideo}
      />

      <SeminarProggram program={seminarData?.seminarProgram} locale={locale} />
      <SeminarSpeakers locale={locale} speakers={seminarData?.speakers ?? []} />
      {status ? (<InfoPrice priceData={seminarData?.priceData ?? []} />) : (<div ref={videoRef}><SeminarOldVideo  videoUrl={seminarData?.video?.url}
isFree={seminarData?.video?.isFree}
price={seminarData?.video?.price} /> </div>)}

      <UserTestimonials isShow={false} />
      <SeminarActions />
    </div>
  )
}

export default MainSeminarItems