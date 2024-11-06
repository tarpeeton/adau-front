'use client'
import React, { useEffect, useRef , useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Timeline: React.FC = () => {
    const startRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const timelineBottomRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!timelineRef.current || !startRef.current || !progressBarRef.current) return;

        const timelineElement = timelineRef.current;
        const cards = gsap.utils.toArray<HTMLDivElement>('.card') as HTMLDivElement[];

        // Initialize all cards to inactive color
        cards.forEach((card) => {
            gsap.set(card, { backgroundColor: '#222E51', color: '#FFFFFF' });
        });

        // Horizontal scroll effect for the entire timeline
        gsap.fromTo(
            timelineElement,
            { x: 0 },
            {
                x: () => -(timelineElement.scrollWidth - window.innerWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: startRef.current,
                    start: 'top top',
                    end: () => `+=${timelineElement.scrollWidth}`,
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        // Calculate the center of the viewport
                        const viewportCenter = window.innerWidth / 2;

                        // Find the card that is closest to the center of the viewport
                        let closestCardIndex = 0;
                        let minDistance = Infinity;

                        cards.forEach((card, index) => {
                            const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 0.5;
                            const distance = Math.abs(viewportCenter - cardCenter);
                            
                            if (distance < minDistance) {
                                minDistance = distance;
                                closestCardIndex = index;
                            }
                        });

                        // Update active card background and reset others
                        cards.forEach((card, index) => {
                            if (index === closestCardIndex) {
                                gsap.to(card, { backgroundColor: '#FFFFFF', color: '#3A476D', duration: 0.5 });
                            } else {
                                gsap.to(card, { backgroundColor: '#222E51', color: '#FFFFFF', duration: 0.5 });
                            }
                        });

                        // Update the progress bar width based on the active card
                        const progressWidth = ((closestCardIndex + 1) / cards.length) * 100;
                        gsap.to(progressBarRef.current, { width: `${progressWidth}%`, duration: 0.5 });
                    },
                },
            }
        );

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);

    return (
        <div ref={startRef} className="overflow-hidden h-full bg-[#222E51] py-[40px] px-[16px] 2xl:py-[100px] 2xl:pl-[50px] 4xl:px-[200px]">
            <p className='text-[26px] leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-white font-jost'>НАШ ПУТЬ И ПЛАНЫ НА БУДУЩЕЕ</p>
            <div ref={timelineRef} className="flex flex-row justify-evenly flex-nowrap mt-[40px] space-x-[200px] ">
                {/* Timeline Items */}
                {['2020 год', '2021 год', '2022 год', '2023 год', '2023', '2342', '234234'].map((year, index) => (
                    <div
                        key={index}
                        className="card flex flex-col justify-between bg-white  min-w-[400px] transition-colors duration-500 ease-in-out h-[250px]">
                        <div className='p-[25px] '>
                            <p className="text-[#222E51] text-[25px] font-jost font-medium">{year}</p>
                            <div className="h-[150px] mt-[40px]">
                                <p className="text-[#121212] text-[25px] font-jost font-medium">Основание ассоциации</p>
                                <p className="text-[#414141] text-[18px] font-jost font-medium">
                                    Lorem ipsum dolor sit amet consectetur. Consectetur ultrices
                                    volutpat posuere pharetra tempor massa habе
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div ref={progressBarRef} className=" mt-[40px] h-1 bg-white transition-all duration-500" style={{ width: '0%' }}></div>
            <div ref={timelineBottomRef} className="flex flex-row justify-evenly flex-nowrap mt-[40px] space-x-[200px] ">
                {/* Timeline Items */}
                {['2020 год', '2021 год', '2022 год', '2023 год', '2023', '2342', '234234'].map((year, index) => (
                    <div
                        key={index}
                        className="card flex flex-col justify-between bg-white  min-w-[400px] transition-colors duration-500 ease-in-out h-[250px]">
                        <div className='p-[25px] '>
                            <p className="text-[#222E51] text-[25px] font-jost font-medium">{year}</p>
                            <div className="h-[150px] mt-[40px]">
                                <p className="text-[#121212] text-[25px] font-jost font-medium">Основание ассоциации</p>
                                <p className="text-[#414141] text-[18px] font-jost font-medium">
                                    Lorem ipsum dolor sit amet consectetur. Consectetur ultrices
                                    volutpat posuere pharetra tempor massa habе
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline