'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Timeline: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const topCardsRef = useRef<HTMLDivElement[]>([])
    const bottomCardsRef = useRef<HTMLDivElement[]>([])
    const progressBarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      
        const allCards = [...topCardsRef.current, ...bottomCardsRef.current]

        if (containerRef.current && allCards.length > 0) {
            // Initial setup of all cards and borders
            allCards.forEach((card) => {
                gsap.set(card, { backgroundColor: '#222E51', color: '#fff' })
                const innerDiv = card.querySelector(`.inner-border`)
                if (innerDiv) {
                    gsap.set(innerDiv, { borderColor: '#FFFFFF' })
                }
                const textElements = card.querySelectorAll('p');
                textElements.forEach((text) => gsap.set(text, { color: '#FFFFFF' , opacity: '50%' }));
            })

            // Calculate the scroll width needed for the animation
            const totalScrollWidth = containerRef.current.scrollWidth

            // ScrollTrigger for horizontal scrolling
            gsap.to(allCards, {
                x: () => -totalScrollWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: () => `+=${totalScrollWidth}`,
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        // Calculate the center of the viewport
                        const viewportCenter = window.innerWidth / 6
                        let closestCardIndex = 0
                        let minDistance = Infinity

                        // Determine which card is closest to the center
                        topCardsRef.current.forEach((card, index) => {
                            const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2
                            const distance = Math.abs(viewportCenter - cardCenter)

                            if (distance < minDistance) {
                                minDistance = distance
                                closestCardIndex = index
                            }
                        })

                        // Update the active card background and border for both top and bottom cards
                        const activeId = topCardsRef.current[closestCardIndex]?.dataset.id

                        allCards.forEach((card) => {
                            const innerDiv = card.querySelector(`.inner-border`);
                            const dateText = card.querySelector(`#date`);
                            const titleText = card.querySelector(`#title`);
                            const descriptionText = card.querySelector(`#description`);
    
                            if (card.dataset.id === activeId) {
                                // Active card styles
                                gsap.to(card, {
                                    backgroundColor: '#FFFFFF',
                                    color: '#3A476D',
                                    duration: 0.2,
                                });
                                if (innerDiv) {
                                    gsap.to(innerDiv, {
                                        borderColor: '#FFFFFF',
                                        duration: 0.2,
                                    });
                                }
                                if (dateText) gsap.to(dateText, { color: '#222E51', opacity: 1, duration: 0.2 });
                                if (titleText) gsap.to(titleText, { color: '#121212', opacity: 1, duration: 0.2 });
                                if (descriptionText) gsap.to(descriptionText, { color: '#414141', opacity: 1, duration: 0.2 });
                            } else {
                                // Non-active card styles
                                gsap.to(card, {
                                    backgroundColor: '#3A476D',
                                    color: '#FFFFFF',
                                    duration: 0.2,
                                });
                                if (innerDiv) {
                                    gsap.to(innerDiv, {
                                        borderColor: '#3A476D',
                                        duration: 0.2,
                                    });
                                }
                                if (dateText) gsap.to(dateText, { color: '#FFFFFF', opacity: 0.5, duration: 0.2 });
                                if (titleText) gsap.to(titleText, { color: '#FFFFFF', opacity: 0.5, duration: 0.2 });
                                if (descriptionText) gsap.to(descriptionText, { color: '#FFFFFF', opacity: 0.5, duration: 0.2 });
                            }
                        });

                        // Update the progress bar width based on the active card
                        const progressWidth = ((closestCardIndex) / topCardsRef.current.length) * 45
                        gsap.to(progressBarRef.current, { width: `${progressWidth}%`, duration: 0.3 })
                    },
                },
            })

            return () => {
                ScrollTrigger.killAll()
            }
        }
    }, [])

   

    return (
        <div  ref={containerRef} className="overflow-hidden bg-[#222E51] py-[40px] px-[16px] 2xl:py-[100px] 2xl:pl-[50px] 4xl:px-[200px]">
            <p  className="text-[26px] leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-white font-jost">
                НАШ ПУТЬ И ПЛАНЫ НА БУДУЩЕЕ
            </p>
            <div className=' overflow-hidden pl-[120]' >
                <div className="topCARD Sw-full flex flex-row flex-nowrap gap-[120px] mt-[40px] ">
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={`top-${index}`}
                            ref={(el) => {
                                if (el) topCardsRef.current[index] = el
                            }}
                            data-id={`card-${index}`}
                            className="card flex flex-col justify-between bg-[#3A476D] min-w-[400px] transition-colors duration-500 ease-in-out h-[250px]"
                        >
                            <div className="p-[25px]">
                                <p id='date' className="text-[25px] font-jost font-medium">2020</p>
                                <div className="h-[150px] mt-[40px]">
                                    <p id='title' className=" text-[25px] font-jost font-medium">Основание ассоциации</p>
                                    <p id='description' className=" text-[18px] font-jost font-medium">
                                        Lorem ipsum dolor sit amet consectetur. Consectetur ultrices volutpat posuere pharetra tempor massa habе
                                    </p>
                                </div>
                            </div>
                            <div className="inner-border w-full h-[30px] mt-[-20px] border-dashed border-l-[2px] text-[#222E51] border-white">rustam</div>
                        </div>
                    ))}
                </div>

                <div className="progress w-full h-[3px] bg-[#3E4A6A] mt-[40px]">
                    <div ref={progressBarRef} className="h-full bg-white w-[200px]" />
                </div>

                <div className="bottomCARDS w-full flex flex-row gap-[120px] mt-[20px] ml-[200px] flex-nowrap">
                    {[...Array(8)].map((_, index) => (
                        <div
                            key={`bottom-${index}`}
                            ref={(el) => {
                                if (el) bottomCardsRef.current[index] = el
                            }}
                            data-id={`card-${index}`}
                            className="card flex flex-col justify-between  min-w-[400px] transition-colors duration-300 ease-in-out h-[250px]"
                        >
                            <div className="inner-border w-full h-[30px] mt-[-20px] border-dashed border-r-[2px] border-[#3E4A6A] text-[#222E51]">rustam</div>
                            <div className="p-[25px]">
                                <p id='date' className="text-[#222E51] text-[25px] font-jost font-medium">2021</p>
                                <div className="h-[150px] mt-[40px]">
                                    <p id='title' className="text-[#121212] text-[25px] font-jost font-medium">Проведение семинара</p>
                                    <p id='description' className="text-[#414141] text-[18px] font-jost font-medium">
                                        Lorem ipsum dolor sit amet consectetur. Consectetur ultrices volutpat posuere pharetra tempor massa habе
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Timeline
