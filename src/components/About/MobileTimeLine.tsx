"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ITimeLineProps } from './TimeLine'
import useLocale from '@/hooks/useLocale';
gsap.registerPlugin(ScrollTrigger);

const MobileTimeLine: React.FC<ITimeLineProps> = ({data}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const locale = useLocale()







  useEffect(() => {
    const cards = cardsRef.current;
  
    if (cards.length > 0 && containerRef.current) {
      // Set initial styles for cards
      gsap.set(cards, { yPercent: 200, backgroundColor: '#3A476D', color: '#FFFFFF' });
  
      // Create a ScrollTrigger timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${data.length * 100}vh`, // Adjust to the total scroll length
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
  
      data.forEach((item, index) => {
        const card = cards[index];
  
        // Animate the progress bar for each card
        tl.to(
          progressBarRef.current,
          {
            height: ((index + 1) / data.length) * 100 + '%',
            duration: 0.5,
            backgroundColor: '#FFFFFF',
          },
          index * 1.5 // Stagger progress bar updates
        );
  
        // Animate the card into view
        tl.to(
          card,
          {
            yPercent: 0,
            duration: 0.6,
            backgroundColor: '#FFFFFF',
            color: '#222E51',
            ease: 'power1.out',
          },
          `-=${0.5}` // Overlap with progress bar animation
        );
  
        // Hold the card briefly
        tl.to({}, { duration: 0.6 });
  
        // Animate the card out of view
        tl.to(card, {
          yPercent: -80,
          duration: 0.6,
          backgroundColor: '#3A476D',
          color: '#FFFFFF',
          ease: 'power1.in',
        });
  
        // Reset the progress bar color if it's not the last card
        if (index < data.length - 1) {
          tl.to(progressBarRef.current, {
            backgroundColor: '#3E4A6A',
            duration: 0.2,
          });
        }
      });
    }
  }, [data]);
  

  return (
    <div ref={containerRef} className='mt-[80px] w-full bg-[#222E51] pt-[40px] px-[16px] overflow-hidden h-[500px]'>
      <p className='text-[26px] text-white uppercase font-jost'>Наш путь и планы на будущее</p>
      <div className='flex flex-row justify-between mt-[40px] overflow-hidden relative h-full'>
        {/* Progress bar */}
        <div className='w-[0.5%] bg-titleWhite text-[#222E51] relative'>
          <div ref={progressBarRef} className='absolute bottom-0 left-0 w-full bg-[#3E4A6A]'  />
        </div>

        <div className='flex flex-col gap-0 w-[98%] '>
          <div className='relative h-[190px] w-full'>
            {data.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                data-id={item._rev}
                className='absolute top-0 left-0 w-full h-full bg-[#3A476D] p-[16px]'
              >
                <p className='text-[18px] font-jost font-medium'>{item.year[locale]} год</p>
                <p className='text-[18px] font-jost font-medium mt-[25px]'>{item.plan[locale]}</p>
                <p className='text-[14px] font-jost mt-[5px]'>{item.description[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTimeLine;
