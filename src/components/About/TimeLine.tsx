'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { ITimeline } from '@/interface/timeline'
import useLocale from '@/hooks/useLocale';

gsap.registerPlugin(ScrollTrigger)


export interface ITimeLineProps {
    data: ITimeline[]
}

const Timeline: React.FC<ITimeLineProps> = ({data}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Store elements by `data-id`
    const topCardsRef = useRef<Record<string, HTMLDivElement>>({});
    const bottomCardsRef = useRef<Record<string, HTMLDivElement>>({});

    const progressBarRef = useRef<HTMLDivElement | null>(null);
    const locale = useLocale();

    const topCardsData = data.filter((item) => item.position === true);
    const bottomCardsData = data.filter((item) => item.position === false);

    useEffect(() => {
        const allCards = [
            ...Object.values(topCardsRef.current),
            ...Object.values(bottomCardsRef.current),
        ];

        // Default Active States: First card in both topCardsRef and bottomCardsRef
        const setDefaultActiveCards = () => {
            const firstTopCard = Object.values(topCardsRef.current)[0];
            const firstBottomCard = Object.values(bottomCardsRef.current)[0];

            const activateCard = (card: HTMLDivElement | undefined) => {
                if (!card) return;
                const innerDiv = card.querySelector<HTMLDivElement>('.inner-border');
                const innerSpan = card.querySelector<HTMLSpanElement>('.inner-border-span');
                const dateText = card.querySelector<HTMLParagraphElement>('#date');
                const titleText = card.querySelector<HTMLParagraphElement>('#title');
                const descriptionText = card.querySelector<HTMLParagraphElement>('#description');

                // Active card styles
                gsap.to(card, { backgroundColor: '#FFFFFF', color: '#3A476D', duration: 0 });
                if (innerDiv) gsap.to(innerDiv, { borderColor: '#FFFFFF', duration: 0 });
                if (innerSpan) gsap.to(innerSpan, { background: '#FFFFFF', duration: 0 });
                if (dateText) gsap.to(dateText, { color: '#222E51', opacity: 1, duration: 0 });
                if (titleText) gsap.to(titleText, { color: '#121212', opacity: 1, duration: 0 });
                if (descriptionText)
                    gsap.to(descriptionText, { color: '#414141', opacity: 1, duration: 0 });
            };

            activateCard(firstTopCard);
            activateCard(firstBottomCard);
        };

        if (containerRef.current && allCards.length > 0) {
            // Set default active cards
            setDefaultActiveCards();

            // Set initial styles for all cards
            allCards.forEach((card) => {
                gsap.set(card, { backgroundColor: '#222E51', color: '#fff' });
                const innerDiv = card.querySelector<HTMLDivElement>('.inner-border');
                if (innerDiv) {
                    gsap.set(innerDiv, { borderColor: '#FFFFFF' });
                }
                const textElements = card.querySelectorAll<HTMLParagraphElement>('p');
                textElements.forEach((text) =>
                    gsap.set(text, { color: '#FFFFFF', opacity: 0.5 })
                );
            });

            gsap.set(progressBarRef.current, { width: `400px` });

            // Calculate total scroll width
            const totalScrollWidth = containerRef.current.scrollWidth;
            const updateActiveCard = () => {
                const viewportCenter = window.innerWidth / 4; // Adjust for viewport center

                let closestTopCardId: string | null = null;
                let closestBottomCardId: string | null = null;

                let topMinDistance = Infinity;
                let bottomMinDistance = Infinity;

                // Find closest card for `topCardsRef`
                Object.values(topCardsRef.current).forEach((card) => {
                    const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
                    const distance = Math.abs(viewportCenter - cardCenter);

                    if (distance < topMinDistance) {
                        topMinDistance = distance;
                        closestTopCardId = card.dataset.id || null;
                    }
                });

                // Find closest card for `bottomCardsRef`
                Object.values(bottomCardsRef.current).forEach((card) => {
                    const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
                    const distance = Math.abs(viewportCenter - cardCenter);

                    if (distance < bottomMinDistance) {
                        bottomMinDistance = distance;
                        closestBottomCardId = card.dataset.id || null;
                    }
                });

                // Apply styles to all cards
                allCards.forEach((card) => {
                    const isActive =
                        card.dataset.id === closestTopCardId || card.dataset.id === closestBottomCardId;

                    const innerDiv = card.querySelector<HTMLDivElement>('.inner-border');
                    const innerSpan = card.querySelector<HTMLSpanElement>('.inner-border-span');
                    const dateText = card.querySelector<HTMLParagraphElement>('#date');
                    const titleText = card.querySelector<HTMLParagraphElement>('#title');
                    const descriptionText = card.querySelector<HTMLParagraphElement>('#description');

                    if (isActive) {
                        // Active card styles
                        gsap.to(card, { backgroundColor: '#FFFFFF', color: '#3A476D', duration: 0.2 });
                        if (innerDiv) gsap.to(innerDiv, { borderColor: '#FFFFFF', duration: 0.2 });
                        if (innerSpan) gsap.to(innerSpan, { background: '#FFFFFF', duration: 0.2 });
                        if (dateText) gsap.to(dateText, { color: '#222E51', opacity: 1, duration: 0.2 });
                        if (titleText) gsap.to(titleText, { color: '#121212', opacity: 1, duration: 0.2 });
                        if (descriptionText)
                            gsap.to(descriptionText, { color: '#414141', opacity: 1, duration: 0.2 });
                    } else {
                        // Non-active card styles
                        gsap.to(card, { backgroundColor: '#3A476D', color: '#FFFFFF', duration: 0.2 });
                        if (innerDiv) gsap.to(innerDiv, { borderColor: '#3A476D', duration: 0.2 });
                        if (innerSpan) gsap.to(innerSpan, { background: '#3A476D', duration: 0.2 });
                        if (dateText) gsap.to(dateText, { color: '#FFFFFF', opacity: 0.5, duration: 0.2 });
                        if (titleText) gsap.to(titleText, { color: '#FFFFFF', opacity: 0.5, duration: 0.2 });
                        if (descriptionText)
                            gsap.to(descriptionText, { color: '#FFFFFF', opacity: 0.5, duration: 0.2 });
                    }
                });

                // Update progress bar
                gsap.to(progressBarRef.current, { width: `800px`, duration: 0.2 });
            };
            // Horizontal scroll logic with ScrollTrigger
            const scrollAnimation = gsap.to(allCards, {
                x: () => -totalScrollWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: () => `+=${totalScrollWidth}`,
                    scrub: true,
                    pin: true,
                    onUpdate: () => updateActiveCard(),
                },
            });

            // Function to determine and update the active card for both top and bottom sets
         

            // Cleanup ScrollTrigger on unmount
            return () => {
                scrollAnimation.scrollTrigger?.kill();
            };
        }
    }, [data]); // Add data as a dependency



    return (
        <div ref={containerRef} className="overflow-hidden  bg-[#222E51] py-[40px] px-[16px] 2xl:py-[100px] 2xl:pl-[50px] 4xl:px-[200px]">
            <p className="text-[26px] leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-white font-jost">
                НАШ ПУТЬ И ПЛАНЫ НА БУДУЩЕЕ
            </p>
            <div >
                <div className="topCARD w-full flex flex-row flex-nowrap gap-[400px] mt-[40px] ">
                    {topCardsData.map((item) => (
                        <div
                        key={item._rev}
                        ref={(el) => {
                            if (el) topCardsRef.current[`card-${item._rev}`] = el; // Use data-id as the key
                        }}
                            data-id={`card-${item._rev}`} 
                            className="card flex flex-col justify-between bg-[#3A476D] min-w-[400px] transition-colors duration-500 ease-in-out h-[250px]"
                        >
                            <div className="p-[25px]">
                                <p id='date' className="text-[25px] font-jost font-medium">{item.year[locale]}</p>
                                <div className="h-[150px] mt-[40px]">
                                    <p id='title' className=" text-[25px] font-jost font-medium">{item.plan[locale]}</p>
                                    <p id='description' className=" text-[18px] font-jost font-medium">
                                       {item.description[locale]}
                                    </p>
                                </div>
                            </div>
                            <div className="inner-border relative w-full h-[30px] mt-[-20px] border-l-2 border-dashed border-whitete text-[#222E51]">
                                rustam
                                <span className="inner-border-span absolute bottom-[-15px] left-[-5px]  h-[10px] w-[10px] bg-white rounded-full"></span>
                            </div>



                        </div>
                    ))}
                </div>

                <div className="progress w-full h-[3px] bg-[#3E4A6A] mt-[40px]">
                    <div ref={progressBarRef} className="h-full bg-white w-[200px]" />
                </div>

                <div className="bottomCARDS w-full flex flex-row gap-[400px] mt-[20px] ml-[400px] flex-nowrap">
                    {bottomCardsData.map((item) => (
                        <div
                        key={item._rev}
                        ref={(el) => {
                            if (el) bottomCardsRef.current[`card-${item._rev}`] = el; // Use data-id as the key
                        }}
                          
                            data-id={`card-${item._rev}`}
                            className="card flex flex-col justify-between  min-w-[400px] transition-colors duration-300 ease-in-out h-[250px]"
                        >
                            <div className="inner-border relative w-full h-[30px] mt-[-20px] border-l-2 border-dashed border-whitete text-[#222E51]">
                                rustam
                                <span className="inner-border-span absolute top-[-7px] left-[-5px]  h-[10px] w-[10px] bg-white rounded-full"></span>
                            </div>
                            <div className="p-[25px]">
                                <p id='date' className="text-[#222E51] text-[25px] font-jost font-medium">{item.year[locale]}</p>
                                <div className="h-[150px] mt-[40px]">
                                    <p id='title' className="text-[#121212] text-[25px] font-jost font-medium">{item.plan[locale]}</p>
                                    <p id='description' className="text-[#414141] text-[18px] font-jost font-medium">
                                        {item.description[locale]}
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
