"use client"
import { FC, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useQuery } from '@tanstack/react-query'
import useLocale from '@/hooks/useLocale'
import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'
import { IBlogCategory, IBlog } from '@/interface/IBlogs/blog'
// ICONS
import { FaChevronDown } from "react-icons/fa6"
import { GrLinkNext } from "react-icons/gr"
import formatDate from '@/hooks/useFormatDate'
import { useRouter } from 'next/navigation'
import { usePathname, useSearchParams } from 'next/navigation'

const fetchCategories = async (): Promise<IBlogCategory[]> => {
    return await client.fetch(`*[_type == "blogCategory"]{name,
image,
_id}`)
}

const fetchAllBlogs = async (): Promise<IBlog[]> => {
    return await client.fetch(`*[_type == "blog"]{
       _id,
_createdAt,
title,
slug,
description,
userName,
userOccupation,
userImage,
mainImage,
category,
popular,
additionalContent
    }`)
}

interface IActiveFilter {
    id?: string;
    name: {
        ru: string;
        uz: string;
        en: string;
    };
}



const NewBlogs: FC = () => {
    const [mobileActiveFilter, setMobileActiveFilter] = useState(false)
    const locale = useLocale()
    console.log("SALOM ERROR FIXED XSS ATTACK")

    const [activeFilter, setActiveFilter] = useState<IActiveFilter>({
        id: 'all-articles',
        name: {
            ru: 'Все статьи',
            uz: 'Barcha maqolalar',
            en: 'All Articles',
        },
    });



    const blogContainerRef = useRef<HTMLDivElement | null>(null)
    const filterRef = useRef<HTMLDivElement | null>(null)
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname() // Get the current pathname

    const { data: blogCategories = [], isLoading: isLoadingCategories } = useQuery<IBlogCategory[]>({
        queryKey: ['blogcategoriescomponnets'],
        queryFn: fetchCategories,
    })

    const { data: allBlogs = [], isLoading: isLoadingBlogs } = useQuery<IBlog[]>({
        queryKey: ['blogs'],
        queryFn: fetchAllBlogs,
    })

    useEffect(() => {
        const id = searchParams.get('_id');
        const nameEn = searchParams.get('name');

        // Получаем значения для всех языков, если они есть в URL
        const nameRu = searchParams.get('name_ru') || 'Все статьи';
        const nameUz = searchParams.get('name_uz') || 'Barcha maqolalar';

        if (nameEn && id) {
            setActiveFilter({
                id,
                name: {
                    ru: decodeURIComponent(nameRu),
                    uz: decodeURIComponent(nameUz),
                    en: decodeURIComponent(nameEn),
                },
            });
        }
    }, [searchParams]);



    const handleActiveFilter = () => setMobileActiveFilter(!mobileActiveFilter)

    const handleMobileFilterSelect = (
        categoryId: string,
        categoryName: { ru: string; uz: string; en: string }
    ) => {
        // Update the active filter with all language names
        setActiveFilter({
            id: categoryId,
            name: {
                ru: categoryName.ru,
                uz: categoryName.uz,
                en: categoryName.en,
            },
        });
        setMobileActiveFilter(false);

        const queryParams = new URLSearchParams(window.location.search);

        // Add only the English name and category ID to query params
        queryParams.set('name_en', encodeURIComponent(categoryName.en)); // Adding `name_en` for English name
        queryParams.set('name_ru', encodeURIComponent(categoryName.ru)); // Adding `name_ru` for Russian name
        queryParams.set('name_uz', encodeURIComponent(categoryName.uz)); // Adding `name_uz` for Uzbek name
        queryParams.set('_id', categoryId);

        // Generate the new URL
        const newUrl = `${pathname}?${queryParams.toString()}`;

        // Navigate to the new URL
        router.push(newUrl);
    };


    const filteredBlogs = activeFilter.id === 'all-articles'
        ? allBlogs
        : allBlogs.filter(blog => blog.category?._ref === activeFilter.id)

        useEffect(() => {
            if (filterRef.current) {
              const elements = Array.from(filterRef.current.children);
              if (mobileActiveFilter) {
                gsap.fromTo(
                  elements,
                  { opacity: 0, y: -20 },
                  { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "power2.out" }
                );
              } else {
                gsap.to(elements, { opacity: 0, y: -20, duration: 0.2, stagger: 0.1 });
              }
            }
          }, [mobileActiveFilter]);

    useEffect(() => {
        if (blogContainerRef.current && blogContainerRef.current.children.length > 0) {
          const childrenArray = Array.from(blogContainerRef.current.children);
          
          gsap.fromTo(
            childrenArray,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.2, ease: "power.out" }
          );
        }
      }, [activeFilter]);
      

    return (
        <div className='mt-[80px] 2xl:mt-[200px]  px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
            <p className="text-[26px]  uppercase font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]  ">
                {
                    locale === 'ru'
                        ? "Последние статьи"
                        : locale === 'uz'
                            ? "So‘nggi maqolalar"
                            : "Latest articles"
                }

            </p>

            <div className='hidden 2xl:inline-block  mt-[40px] '>
                <div className='flex flex-row gap-[30px] border-b border-b-[#E4E4E4]'>
                    <button
                        onClick={() =>
                            setActiveFilter({
                                id: 'all-articles',
                                name: {
                                    ru: 'Все статьи',
                                    uz: 'Barcha maqolalar',
                                    en: 'All Articles',
                                },
                            })
                        }

                        className={`pb-[12px] ${activeFilter.id === 'all-articles'
                            ? 'border-b-2 border-[#222E51] text-[#222E51]'
                            : ' text-[#000000]'
                            }`}
                    >
                        <p className='text-[22px] font-medium'>
                            {
                                locale === 'ru'
                                    ? "Все статьи"
                                    : locale === 'uz'
                                        ? "Barcha maqolalar"
                                        : "All articles"
                            }

                        </p>
                    </button>
                    {blogCategories.map((item, index) => (
                        <button
                            onClick={() => setActiveFilter({ name: { ru: item.name.ru, uz: item.name.uz, en: item.name.en }, id: item._id })}
                            key={`${item._id}-${index}`}
                            className={`${index !== 0 ? 'px-[30px] pt-0 pb-[12px] ' : 'pb-[12px]'
                                }  ${activeFilter.id === item._id
                                    ? 'border-b-2 border-[#222E51] text-[#222E51]'
                                    : ' text-[#000000]'
                                }`}
                        >
                            <p className='text-[22px] font-medium'>{item.name[locale]}</p>
                        </button>
                    ))}
                </div>
            </div>
            {/* MOBILE ACTIVE FILTERS */}
            <button onClick={handleActiveFilter} className='w-full mt-[20px] 2xl:hidden flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>
                <p className='text-[15px] font-medium font-jost text-[#222E51]'>
                    {activeFilter.name[locale]}
                </p>
                <div>
                    <FaChevronDown className='text-[#222E51]' />
                </div>
            </button>
            {mobileActiveFilter && (
                <div ref={filterRef}>
                    <p
                        onClick={() =>
                            setActiveFilter({
                                id: 'all-articles',
                                name: {
                                    ru: 'Все статьи',
                                    uz: 'Barcha maqolalar',
                                    en: 'All Articles',
                                },
                            })
                        }

                        className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'
                    >
                        {
                            locale === 'ru'
                                ? "Все статьи"
                                : locale === 'uz'
                                    ? "Barcha maqolalar"
                                    : "All articles"
                        }

                    </p>
                    {blogCategories.map((item, index) => (
                        <p
                            key={`${item._id}-${index}`}
                            onClick={() => handleMobileFilterSelect(item._id, { ru: item.name.ru, uz: item.name.uz, en: item.name.en })}
                            className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'
                        >
                            {item.name[locale]}
                        </p>
                    ))}
                </div>
            )}

            <div ref={blogContainerRef} className='mt-[20px] 2xl:mt-[41px] flex flex-col gap-[30px] 2xl:flex-row 2xl:flex-wrap 2xl:gap-[20px]'>
                {filteredBlogs.map((item, index) => (
                    <div key={`${item._id}-${index}`} className='2xl:w-[335px]'>
                        <Image src={urlFor(item.mainImage.asset._ref).url()} width={345} height={345} quality={100} alt='blogIMage' className=' w-full object-cover h-[220px] 2xl:w-full md:h-[280px]' />
                        <div className='mt-[20px] 2xl:mt-[25px]'>
                            <p className='text-[14px] text-[#A0A0A0] 2xl:text-[17px]'>{formatDate(item._createdAt)}</p>
                            <div className='2xl:h-[120px]'>
                                <p className='text-[20px] mt-[5px] font-medium font-jost text-titleDark 2xl:text-[23px] 4xl:text-[25px] leading-[25px] 2xl:leading-[30px]'>
                                    {item.title[locale].length > 72 ? item.title[locale].slice(0, 72) + "..." : item.title[locale]}
                                </p>
                            </div>

                            <Link href={`/blog/${item.slug.current}`} className='text-[16px] mt-[8px] font-medium text-[#222E51] font-jost 2xl:text-[20px] flex flex-row items-center'>
                                {
                                    locale === 'ru'
                                        ? "Читать статью"
                                        : locale === 'uz'
                                            ? "Maqolani o‘qish"
                                            : "Read article"
                                }

                                <GrLinkNext className='ml-[8px]' />
                            </Link>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default NewBlogs