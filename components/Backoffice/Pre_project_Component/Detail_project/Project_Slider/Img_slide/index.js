import Link from 'next/link';
import { Autoplay, EffectCoverflow, FreeMode, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation, FreeMode, EffectCoverflow],
  loop: false,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: false,
  freeMode: false,
  watchSlidesProgress: true,
  effect: 'coverflow',
  grabCursor: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -20,
    depth: 0,
    modifier: 1,
    scale: 0.9,
    slideShadows: false,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    prevEl: '.prev-3d',
    nextEl: '.next-3d',
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
};

import { useState } from 'react';
export default function TitileSlider3() {
  const [isBidModal, setBidModal] = useState(false);
  const handleBidModal = () => setBidModal(!isBidModal);
  return (
    <>
      <Swiper
        {...swiperOptions}
        className='swiper-container swiper-3d-3cardfull'
      >
        {/* Slide Content */}
        <SwiperSlide>
          <div className='tf-card-box style-3'>
            <div className='card-media'>
              <Link href='#'>
                <img
                  src='https://pbs.twimg.com/media/F7_u7RobsAAvqZy?format=jpg&name=small'
                  alt=''
                />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* End Slide Content */}

        {/* Slide Content Clone */}
        <SwiperSlide>
          <div className='tf-card-box style-3'>
            <div className='card-media'>
              <Link href='#'>
                <img
                  src='https://pbs.twimg.com/media/F8XcRm4bMAAEP2o?format=jpg&name=small'
                  alt=''
                />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='tf-card-box style-3'>
            <div className='card-media'>
              <Link href='#'>
                <img
                  src='https://pbs.twimg.com/media/F8SQfFsaUAAeuL7?format=jpg&name=small'
                  alt=''
                />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='tf-card-box style-3'>
            <div className='card-media'>
              <Link href='#'>
                <img
                  src='https://pbs.twimg.com/media/F8NEEC5aIAAWJWy?format=jpg&name=small'
                  alt=''
                />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='tf-card-box style-3'>
            <div className='card-media'>
              <Link href='#'>
                <img
                  src='https://pbs.twimg.com/media/F8sUpiLaAAA9-YV?format=jpg&name=small'
                  alt=''
                />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='tf-card-box style-3'>
            <div className='card-media'>
              <Link href='#'>
                <img
                  src='https://pbs.twimg.com/media/F8cIRQfawAAPoHq?format=jpg&name=small'
                  alt=''
                />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        {/* End Slide Content Clone */}
      </Swiper>
      <div className='swiper-button-next next-3d over' />
      <div className='swiper-button-prev prev-3d over' />
    </>
  );
}
