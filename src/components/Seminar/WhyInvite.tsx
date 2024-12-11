"use client"
import { FC, useEffect, useRef } from 'react';
import gsap from 'gsap';
import useLocale from '@/hooks/useLocale';

const WhyChooseData = [
    {
        number: '01',
        title: {
            ru: 'Знания от экспертов',
            uz: 'Mutaxassislardan bilimlar',
            en: 'Knowledge from experts'
        },
        description: {
            ru: 'Актуальные темы и новейшие знания от ведущих экспертов',
            uz: 'Dolzarb mavzular va yetakchi mutaxassislardan eng yangi bilimlar',
            en: 'Relevant topics and the latest knowledge from leading experts'
        }
    },
    {
        number: '02',
        title: {
            ru: 'Практика',
            uz: 'Amaliyot',
            en: 'Practice'
        },
        description: {
            ru: 'Воркшопы с практическими заданиями',
            uz: 'Amaliy mashqlar bilan workshoplar',
            en: 'Workshops with practical tasks'
        }
    },
    {
        number: '03',
        title: {
            ru: 'Доступ к записям',
            uz: 'Yozuvlarga kirish',
            en: 'Access to recordings'
        },
        description: {
            ru: 'Доступ к записям и материалам после мероприятия',
            uz: 'Tadbirdan so‘ng yozuvlar va materiallarga kirish',
            en: 'Access to recordings and materials after the event'
        }
    },
    {
        number: '04',
        title: {
            ru: 'Новые деловые контакты',
            uz: 'Yangi biznes aloqalari',
            en: 'New business contacts'
        },
        description: {
            ru: 'Расширение профессиональных контактов',
            uz: 'Professional aloqalarni kengaytirish',
            en: 'Expanding professional contacts'
        }
    },
];


const WhyInvite: FC = () => {
    const cardRefs = useRef<HTMLDivElement[]>([]);
    const textRefs = useRef<(HTMLParagraphElement | null)[][]>([]);
    const locale = useLocale()


    useEffect(() => {
        cardRefs.current.forEach((card, index) => {
            if (!textRefs.current[index]) {
                textRefs.current[index] = [];
            }

            const textElements = card.querySelectorAll('p');
            textElements.forEach((el, textIndex) => {
                textRefs.current[index][textIndex] = el as HTMLParagraphElement;
            });

            const tl = gsap.timeline({ paused: true });

            tl.to(card, {
                backgroundColor: '#222E51',
                duration: 0.3,
                ease: 'power2.inOut',
            })
                .to(textRefs.current[index], {
                    color: '#ffffff',
                    duration: 0.2,
                    stagger: 0.05,
                    ease: 'power2.inOut',
                }, '-=0.2');

            card.addEventListener('mouseenter', () => {
                tl.play();
            });

            card.addEventListener('mouseleave', () => {
                tl.reverse();
            });

            gsap.set(card, { backgroundColor: '#F7F8FA' });
            gsap.set(textRefs.current[index], { color: '#414141' });
        });

        return () => {
            cardRefs.current.forEach((card, index) => {
                const tl = gsap.getTweensOf(card);
                tl.forEach(tween => tween.kill());
            });
        };
    }, []);

    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[200px]'>
            <div className='flex flex-col'>
                {/* title and description */}
                <div>
                    <p className='text-[26px] uppercase leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] font-jost'>
                        {
                            locale === 'ru'
                                ? "Почему стоит участвовать?"
                                : locale === 'uz'
                                    ? "Nega ishtirok etish kerak?"
                                    : "Why participate?"
                        }

                    </p>
                    <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[24px] mt-[12px] text-[#414141] font-jost 2xl:mt-[15px]'>



                        {
                            locale === 'ru'
                                ? "Мы объединяем опыт и креативные решения. Наши клиенты выбирают нас за качество, надежность и внимание к их уникальным потребностям."
                                : locale === 'uz'
                                    ? "Biz tajriba va ijodiy yechimlarni birlashtiramiz. Mijozlarimiz bizni sifat, ishonchlilik va ularning o‘ziga xos ehtiyojlariga e’tibor uchun tanlaydilar."
                                    : "We combine experience and creative solutions. Our clients choose us for quality, reliability, and attention to their unique needs."
                        }




                    </p>
                </div>
                {/* CARD */}
                <div className='flex flex-col 2xl:flex-row mt-[20px] 2xl:mt-[50px] gap-[20px]'>
                    {WhyChooseData.map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardRefs.current[index] = el;
                            }}
                            className=' py-[25px] px-[20px] p-[30px] flex flex-col justify-between bg-[#F7F8FA] 2xl:h-[380px] transition-transform duration-800 ease-in-out 2xl:w-[345px] cursor-pointer'
                        >
                            {/* NUMBER */}
                            <div>
                                <p className='text-[26px] leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] font-jost'>{item.number}</p>
                            </div>
                            {/* INFO */}
                            <div className='mt-[40px] 2xl:mt-0 2xl:h-[140px]'>
                                {item.title[locale].split('\n').map((line, lineIndex) => (
                                    <p key={lineIndex} className="text-[22px] leading-[29px] uppercase 2xl:text-[30px] 2xl:leading-[40px] font-jost">
                                        {line}
                                    </p>
                                ))}
                                <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[24px] font-jost mt-[8px] 2xl:mt-[10px]'>{item.description[locale]}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* button */}
                {/* <div className='mt-[20px] 2xl:mt-[40px]'>
                    <button className='buttonBlue'>
                    Записаться на семинар
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default WhyInvite;
