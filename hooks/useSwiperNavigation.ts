import { useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';

const useSwiperNavigation = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const handlePrev = () => swiperRef.current?.slidePrev();
    const handleNext = () => swiperRef.current?.slideNext();

    return { swiperRef, handlePrev, handleNext };
};

export default useSwiperNavigation;
