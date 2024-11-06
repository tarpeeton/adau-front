"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MobileTimeLineData } from '@/constants/MobileTimeLine';

gsap.registerPlugin(ScrollTrigger);

const MobileTimeLine: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);











  useEffect(() => {
    const cards = cardsRef.current;

    if (cards.length > 0 && containerRef.current) {
      // Set initial styles for cards
      gsap.set(cards, { yPercent: 200, backgroundColor: '#3A476D', color: '#FFFFFF' });

      // Create a timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top',
          end: `+=${MobileTimeLineData.length * window.innerHeight}`, // Total scroll distance
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // For each card, animate in and out
      MobileTimeLineData.forEach((item, index) => {
        const card = cards[index];

        // Animate the progress bar to align with the active card
        tl.to(progressBarRef.current, {
          height: ((index + 1) / MobileTimeLineData.length) * 100 + '%',
          backgroundColor: '#FFFFFF',
          duration: 0.5,
        });

        // Animate card in
        tl.to(
          card,
          {
            yPercent: 0,
            duration: 0.5,
            backgroundColor: '#FFFFFF',
            color: '#222E51',
          },
          '-=0.5' // Overlap with progress bar animation
        );

        // Hold the card on screen
        tl.to({}, { duration: 0.5 });

        // Animate card out
        tl.to(card, {
          yPercent: -80,
          duration: 0.4,
          backgroundColor: '#3A476D',
          color: '#FFFFFF',
        });

        // Reset progress bar color if not the last card
        if (index < MobileTimeLineData.length) {
          tl.to(progressBarRef.current, {
            backgroundColor: '#3E4A6A',
            duration: 0.03,
          });
        }
      });
    }
  }, [MobileTimeLineData]);

  return (
    <div ref={containerRef} className='mt-[80px] w-full bg-[#222E51] pt-[40px] px-[16px] overflow-hidden h-[500px]'>
      <p className='text-[26px] text-white uppercase font-jost'>Наш путь и планы на будущее</p>
      <div className='flex flex-row justify-between mt-[40px] overflow-hidden relative h-full'>
        {/* Progress bar */}
        <div className='w-[1%] bg-titleWhite text-[#222E51] relative'>
          <div ref={progressBarRef} className='absolute bottom-0 left-0 w-full bg-[#3E4A6A]'  />
        </div>

        <div className='flex flex-col gap-0 w-[98%] '>
          <div className='relative h-[190px] w-full'>
            {MobileTimeLineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                data-id={item.id}
                className='absolute top-0 left-0 w-full h-full bg-[#3A476D] p-[16px]'
              >
                <p className='text-[18px] font-jost font-medium'>{item.year} год</p>
                <p className='text-[18px] font-jost font-medium mt-[25px]'>{item.title}</p>
                <p className='text-[14px] font-jost mt-[5px]'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTimeLine;
