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
                gsap.set(card, { backgroundColor: '#222E51', color: '#FFFFFF' })
                const innerDiv = card.querySelector(`.inner-border`)
                if (innerDiv) {
                    gsap.set(innerDiv, { borderColor: '#FFFFFF' })
                }
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
                            const innerDiv = card.querySelector(`.inner-border`)
                            if (card.dataset.id === activeId) {
                                gsap.to(card, {
                                    backgroundColor: '#FFFFFF',
                                    color: '#3A476D',
                                    duration: 0.5,
                                })
                                if (innerDiv) {
                                    gsap.to(innerDiv, {
                                        borderColor: '#3A476D',
                                        duration: 0.5,
                                    })
                                }
                            } else {
                                gsap.to(card, {
                                    backgroundColor: '#222E51',
                                    color: '#FFFFFF',
                                    duration: 0.5,
                                })
                                if (innerDiv) {
                                    gsap.to(innerDiv, {
                                        borderColor: '#FFFFFF',
                                        duration: 0.5,
                                    })
                                }
                            }
                        })

                        // Update the progress bar width based on the active card
                        const progressWidth = ((closestCardIndex) / topCardsRef.current.length) * 45
                        gsap.to(progressBarRef.current, { width: `${progressWidth}%`, duration: 0.4 })
                    },
                },
            })

            return () => {
                ScrollTrigger.killAll()
            }
        }
    }, [])

   

    return (
        <div ref={containerRef} className="overflow-hidden bg-[#222E51] py-[40px] px-[16px] 2xl:py-[100px] 2xl:pl-[50px] 4xl:px-[200px]">
            <p className="text-[26px] leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-white font-jost">
                НАШ ПУТЬ И ПЛАНЫ НА БУДУЩЕЕ
            </p>

            <div>
                <div className="topCARD Sw-full flex flex-row flex-nowrap gap-[120px] mt-[40px]">
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
                                <p className="text-[#222E51] text-[25px] font-jost font-medium">2020</p>
                                <div className="h-[150px] mt-[40px]">
                                    <p className="text-[#121212] text-[25px] font-jost font-medium">Основание ассоциации</p>
                                    <p className="text-[#414141] text-[18px] font-jost font-medium">
                                        Lorem ipsum dolor sit amet consectetur. Consectetur ultrices volutpat posuere pharetra tempor massa habе
                                    </p>
                                </div>
                            </div>
                            <div className="inner-border w-full h-[30px] mt-[-20px] border-dashed border-l-[2px] text-[#222E51] border-[#3E4A6A]">rustam</div>
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
                            className="card flex flex-col justify-between bg-[#3A476D] min-w-[400px] transition-colors duration-500 ease-in-out h-[250px]"
                        >
                            <div className="inner-border w-full h-[30px] mt-[-20px] border-dashed border-r-[2px] border-[#3E4A6A] text-[#222E51]">rustam</div>
                            <div className="p-[25px]">
                                <p className="text-[#222E51] text-[25px] font-jost font-medium">2021</p>
                                <div className="h-[150px] mt-[40px]">
                                    <p className="text-[#121212] text-[25px] font-jost font-medium">Проведение семинара</p>
                                    <p className="text-[#414141] text-[18px] font-jost font-medium">
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
