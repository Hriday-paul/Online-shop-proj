import { Navigation, Pagination, A11y, Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderProduct from '../../shared/SliderProduct/SliderProduct';
import { useEffect, useState } from 'react';

const SwiperSlider = ({ products }) => {
    const [slideView, setSlideView] = useState(4);

    const handleWidth = () => {
        if (window.screen.width < 768) {
            //small device
            setSlideView(2)
        }
        else if (window.screen.width >= 768 && window.screen.width < 1024) {
            //small device
            setSlideView(3)
        }
        else {
            setSlideView(4)
        }
    }
    useEffect(() => {
        handleWidth()
    }, [])
    useEffect(() => {
        window.addEventListener('resize', handleWidth);
        return () => window.removeEventListener('resize', handleWidth);
    }, []);

    return (
        <Swiper
            // install Swiper modules
            slidesPerView={slideView}
            spaceBetween={20}
            loop={true}
            freeMode={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            grabCursor={true}

            pagination={{
                clickable: true,
            }}
            modules={[Pagination, Autoplay, Navigation, A11y, FreeMode]}
            className="mySwiper"
        >

            {products?.map((product) => {
                return <SwiperSlide key={product.id}>
                    <SliderProduct product={product}></SliderProduct>
                </SwiperSlide>
            })}





        </Swiper>
    );
};

export default SwiperSlider;