import { FC } from 'react'



interface IAboutCase {
    locale: 'ru' | "uz" | "en";
    aboutText: {
      en: string;
      ru: string;
      uz: string;
    };
    tasks: Array<{
      _key: string;
      en: string;
      ru: string;
      uz: string;
    }>;
    solutions: Array<{
      _key: string;
      en: string;
      ru: string;
      uz: string;
    }>;
    onResultsClick: () => void; // New prop for the button click
  }



const AboutCase: FC<IAboutCase> = ({ aboutText, tasks, solutions, locale , onResultsClick }) => {

    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div>

            </div>
            <p className='2xl:text-[45px] uppercase text-titleDark font-jost'>О проекте</p>
            <p className='2xl:mt-[20px] 2xl:text-[20px] 2xl:leading-[24px] text-title80 2xl:w-[60%] font-jost'>
                {aboutText[locale]}
            </p>

            <div className='flex flex-col gap-[20px] 2xl:flex-row 2xl:justify-between 2xl:mt-[40px]'>
                <div className='2xl:p-[30px] border border-[#E4E4E4] 2xl:w-[49%]'>
                    <div className=' border-b border-b-[#E4E4E4] pb-[30px]'>
                        <p className=' uppercase text-titleDark text-[] 2xl:text-[30px] font-jost'>Задачи</p>
                    </div>
                    <div className=' mt-[] 2xl:mt-[30px] w-[97%] ml-auto'>
                        <ul className='flex flex-col gap-[20px]'>
                            {tasks.map((item, index) => (
                                <li key={index} className=' list-disc text-[] 2xl:text-[20px] 2xl:leading-[24px] font-jost'>{item[locale]}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='2xl:p-[30px] border border-[#E4E4E4] 2xl:w-[49%]'>
                    <div className='border-b border-b-[#E4E4E4] pb-[30px]'>
                        <p className='uppercase text-titleDark text-[] 2xl:text-[30px] font-jost'>Решения</p>
                    </div>
                    <div className='mt-[] 2xl:mt-[30px]  ml-auto'>
                        <ul className='flex flex-col gap-[20px]'>
                            {solutions.map((item, index) => (
                                <li key={index} className='custom-marker text-[] 2xl:text-[20px] 2xl:leading-[24px] font-jost'>
                                    {item[locale]}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='2xl:w-[30%] 2xl:mt-[40px]'>
                <button onClick={onResultsClick} className='buttonBlue'>
                    Смотреть результаты
                </button>
            </div>
        </div>
    )
}

export default AboutCase