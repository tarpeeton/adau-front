import { FC } from 'react'


const BannerBlog: FC = () => {
    return (
        <div className='bg-[#F7F8FA] px-[16px] pt-[30px] 2xl:px-[50px] 4xl:px-[240px] 2xl:py-[50px]'>
            <div  >
                <p className='text-titleDark  text-[26px] 2xl:text-[45px] font-jost uppercase'>
                    Блог ADAU
                </p>
                <p className='mt-[10px] text-[14px] leadoing-[18px] 2xl:text-[20px] 2xl:leading-[24px] text-title80 2xl:mt-[15px] 2xl:w-[60%]'>
                    Сборник актуальных статей, новостей, аналитики и экспертных мнений в сфере архитектуры и дизайна. Здесь вы найдете информацию о современных трендах, инновациях и лучших практиках
                </p>
                <div className='mt-[30px]'>
                    <button className='buttonBlue'>
                        Подписаться на рассылку
                    </button>
                </div>

            </div>
        </div>
    )
}

export default BannerBlog