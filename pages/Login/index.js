import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: false,
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  spaceBetween: 12,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
};

import { useState } from 'react';
export default function Login() {
  const handleBidModal = () => setBidModal(!isBidModal);

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={5}
        pageCls='about-us-page'
      >
        <div>
          <div className='page-title about-us relative'>
            <div className='themesflat-container'>
              <div className='row'>
                <div className='col-12 pages-title'>
                  <div className='content'>
                    <h1
                      data-wow-delay='0s'
                      className='wow fadeInUp'
                    >
                      Project-Mgt Login Page
                    </h1>
                    <p
                      data-wow-delay='0.1s'
                      className='wow fadeInUp'
                    >
                      Please select your role login
                    </p>
                  </div>

                  {/* Card login */}
                  <div className='icon-background'>
                    <img
                      className='absolute item1'
                      src='https://cdn-icons-png.flaticon.com/512/579/579787.png'
                      alt=''
                      style={{ height: '60px', borderRadius: '50px' }}
                    />
                    <img
                      className='absolute item2'
                      src='https://pcper.com/wp-content/uploads/2022/12/raspberrry-pi-logo.png'
                      alt=''
                      style={{ height: '50px' }}
                    />
                    <img
                      className='absolute item3'
                      src='https://static-00.iconduck.com/assets.00/file-type-arduino-icon-2048x2048-47ejdp5s.png'
                      alt=''
                      style={{ height: '80px' }}
                    />
                    <img
                      className='absolute item4'
                      src='https://cdn.vectorstock.com/i/preview-1x/79/07/grade-result-f-minus-isolated-on-white-background-vector-45207907.jpg'
                      alt=''
                      style={{ height: '60px', borderRadius: '50px' }}
                    />
                  </div>
                  <div className='relative'>
                    <Swiper
                      {...swiperOptions}
                      className='swiper-container carousel3-type2'
                    >
                      <div className='swiper-wrapper'>
                        <SwiperSlide>
                          <div className='tf-card-box style-7'>
                            <div className='card-media'>
                              <Link href='/Login/InstructorLogin'>
                                <img
                                  src='https://www.zandax.com/wordpress/wp-content/uploads/2016/12/employee-training1-1.jpg'
                                  alt=''
                                />
                              </Link>
                            </div>
                            <div className='button-place-bid'>
                              <a
                                href='/Login/InstructorLogin'
                                className='tf-button'
                              >
                                <span>Instructor</span>
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='tf-card-box style-7'>
                            <div className='card-media'>
                              <Link href='/'>
                                <img
                                  src='https://im.indiatimes.in/content/itimes/blog/2016/Jun/27/1467009145-life-of-an-engineering-student.jpg'
                                  alt=''
                                />
                              </Link>
                            </div>
                            <div className='button-place-bid'>
                              <a
                                href='/'
                                className='tf-button'
                              >
                                <span>Student</span>
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='tf-card-box style-7'>
                            <div className='card-media'>
                              <Link href='/'>
                                <img
                                  src='https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/08/teacher-accountability-on-student-achievement.jpg'
                                  alt=''
                                />
                              </Link>
                            </div>
                            <div className='button-place-bid'>
                              <a
                                href='/'
                                className='tf-button'
                              >
                                <span>Teacher</span>
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className='tf-card-box style-7'>
                            <div className='card-media'>
                              <Link href='#'>
                                <img
                                  src='https://i.pinimg.com/474x/23/7a/49/237a4942d8f2e635f83266cb0766916f.jpg'
                                  alt=''
                                />
                              </Link>
                            </div>
                            <div className='button-place-bid'>
                              <a
                                href='/'
                                className='tf-button'
                              >
                                <span>admin</span>
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
