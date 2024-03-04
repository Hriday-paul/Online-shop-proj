import { Navigation, Pagination, A11y, Autoplay, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomeSlider = () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, EffectCreative, A11y, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }}
            className="mySwiper"
        >

            <SwiperSlide>
                <img className='h-56 mt-4 lg:mt-0 md:h-80 lg:h-[448px] w-full object-cover' src="https://i.ibb.co/PYfvn4r/mpl-pc-laptop-offer-982x500-1.webp" alt="slide image" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-56 mt-4 lg:mt-0 md:h-80 lg:h-[448px] w-full object-cover' src="https://i.ibb.co/DQP9gDb/ezgif-com-webp-to-jpg.jpg" alt="slide image" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-56 mt-4 lg:mt-0 md:h-80 lg:h-[448px] w-full object-cover' src="https://i.ibb.co/R73kvQM/winter-fest-live-wt-sponsors-bottom-982x500.png" alt="slide image" />
            </SwiperSlide>


        </Swiper>
    );
};

export default HomeSlider;