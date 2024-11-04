"use client"
import {FC, useState} from 'react';
import Image from 'next/image';
import Logo from '@/public/logo.svg'

const Header: FC = () => {
    const [openMenu , setIsOpen] = useState(false)

    const handleClickMenu = () => setIsOpen(!openMenu)





     return (
    <div className='px-[16px] py-[12px] flex justify-between'>
        {/* LOGO */}
        <div>
            <Image  src={Logo} width={132} height={63} quality={100}  alt='Logo' className=''/>
        </div>
        {/* LINKS */}
        <div></div>
        
        {/* Hamberger */}
        <div>

        </div>
    </div>
  );
};

export default Header;