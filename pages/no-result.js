import BidModal from "@/components/elements/BidModal"
import Countdown from "@/components/elements/Countdown"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: '.slider-next',
        prevEl: '.slider-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
}
const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    spaceBetween: 30,
    observer: true,
    observeParents: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        }
    }
}
const currentTime = new Date()
export default function Home() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>

                <div>
                    <div className="page-title no-result">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 data-wow-delay="0s" className="wow fadeInUp heading text-center">No result</h1>
                                    <p data-wow-delay="0.1" className="wow fadeInUp ">Sorry we couldn't find any matches for <span>“NFTs clone”</span>
                                        please try search with another term</p>
                                    <div data-wow-delay="0.2s" className="wow fadeInUp widget-search">
                                        <form action="#" method="get" role="search" className="search-form relative">
                                            <input type="search" id="search" className="search-field style-2" placeholder="Search..." name="s" title="Search for" required />
                                            <button className="search search-submit" type="submit" title="Search">
                                                <i className="icon-search" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section featured-item style-bottom">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section pb-20">
                                        <h2 className="tf-title ">maybe you will like</h2>
                                        <Link href="/explore-3" >Discover more <i className="icon-arrow-right2" /></Link>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <Swiper {...swiperOptions} className="featured pt-10 swiper-container carousel">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="tf-card-box style-1">
                                                    <div className="card-media">
                                                        <Link href="#">
                                                            <img src="/assets/images/box-item/card-item-01.jpg" alt="" />
                                                        </Link>
                                                        <span className="wishlist-button icon-heart" />
                                                        <div className="featured-countdown">
                                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                    <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                    <div className="author flex items-center">
                                                        <div className="avatar">
                                                            <img src="/assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                                        </div>
                                                        <div className="info">
                                                            <span>Created by:</span>
                                                            <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                        </div>
                                                    </div>
                                                    <div className="divider" />
                                                    <div className="meta-info flex items-center justify-between">
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tf-card-box style-1">
                                                    <div className="card-media">
                                                        <Link href="#">
                                                            <img src="/assets/images/box-item/card-item-02.jpg" alt="" />
                                                        </Link>
                                                        <span className="wishlist-button icon-heart" />
                                                        <div className="featured-countdown">
                                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                    <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                    <div className="author flex items-center">
                                                        <div className="avatar">
                                                            <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                        </div>
                                                        <div className="info">
                                                            <span>Created by:</span>
                                                            <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                        </div>
                                                    </div>
                                                    <div className="divider" />
                                                    <div className="meta-info flex items-center justify-between">
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tf-card-box style-1">
                                                    <div className="card-media">
                                                        <Link href="#">
                                                            <img src="/assets/images/box-item/card-item-03.jpg" alt="" />
                                                        </Link>
                                                        <span className="wishlist-button icon-heart" />
                                                        <div className="featured-countdown">
                                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                    <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                    <div className="author flex items-center">
                                                        <div className="avatar">
                                                            <img src="/assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                                        </div>
                                                        <div className="info">
                                                            <span>Created by:</span>
                                                            <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                        </div>
                                                    </div>
                                                    <div className="divider" />
                                                    <div className="meta-info flex items-center justify-between">
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tf-card-box style-1">
                                                    <div className="card-media">
                                                        <Link href="#">
                                                            <img src="/assets/images/box-item/card-item-04.jpg" alt="" />
                                                        </Link>
                                                        <span className="wishlist-button icon-heart" />
                                                        <div className="featured-countdown">
                                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                    <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                    <div className="author flex items-center">
                                                        <div className="avatar">
                                                            <img src="/assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                                                        </div>
                                                        <div className="info">
                                                            <span>Created by:</span>
                                                            <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                        </div>
                                                    </div>
                                                    <div className="divider" />
                                                    <div className="meta-info flex items-center justify-between">
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tf-card-box style-1">
                                                    <div className="card-media">
                                                        <Link href="#">
                                                            <img src="/assets/images/box-item/card-item-01.jpg" alt="" />
                                                        </Link>
                                                        <span className="wishlist-button icon-heart" />
                                                        <div className="featured-countdown">
                                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                    <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                    <div className="author flex items-center">
                                                        <div className="avatar">
                                                            <img src="/assets/images/avatar/avatar-box-05.jpg" alt="Image" />
                                                        </div>
                                                        <div className="info">
                                                            <span>Created by:</span>
                                                            <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                        </div>
                                                    </div>
                                                    <div className="divider" />
                                                    <div className="meta-info flex items-center justify-between">
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tf-card-box style-1">
                                                    <div className="card-media">
                                                        <Link href="#">
                                                            <img src="/assets/images/box-item/card-item-02.jpg" alt="" />
                                                        </Link>
                                                        <span className="wishlist-button icon-heart" />
                                                        <div className="featured-countdown">
                                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                    <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                    <div className="author flex items-center">
                                                        <div className="avatar">
                                                            <img src="/assets/images/avatar/avatar-box-06.jpg" alt="Image" />
                                                        </div>
                                                        <div className="info">
                                                            <span>Created by:</span>
                                                            <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                        </div>
                                                    </div>
                                                    <div className="divider" />
                                                    <div className="meta-info flex items-center justify-between">
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tf-card-box style-1">
                                                    <div className="card-media">
                                                        <Link href="#">
                                                            <img src="/assets/images/box-item/card-item-03.jpg" alt="" />
                                                        </Link>
                                                        <span className="wishlist-button icon-heart" />
                                                        <div className="featured-countdown">
                                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                    <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                    <div className="author flex items-center">
                                                        <div className="avatar">
                                                            <img src="/assets/images/avatar/avatar-box-07.jpg" alt="Image" />
                                                        </div>
                                                        <div className="info">
                                                            <span>Created by:</span>
                                                            <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                        </div>
                                                    </div>
                                                    <div className="divider" />
                                                    <div className="meta-info flex items-center justify-between">
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination" />
                                        <div className="slider-next swiper-button-next" />
                                        <div className="slider-prev swiper-button-prev" />
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 top-collections">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section pb-20">
                                        <h2 className="tf-title ">our latest collection </h2>
                                        <Link href="/explore-3" >Discover more <i className="icon-arrow-right2" /></Link>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <Swiper {...swiperOptions2} className="featured pt-10 swiper-container carousel3">
                                        <div className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="tf-card-collection">
                                                    <Link href="/author-2">
                                                        <div className="media-images-collection">
                                                            <img src="/assets/images/box-item/img-collection-01.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-02.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-03.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-04.jpg" alt="" />
                                                            <div className="author-poster">
                                                                <img src="/assets/images/avatar/avatar-03.png" alt="" className="w-full" />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="card-bottom">
                                                        <div className="author">
                                                            <h5><Link href="/author01">Bored ape#21</Link></h5>
                                                            <div className="infor">@Themesflat</div>
                                                        </div>
                                                        <div className="bottom-right">
                                                            <div className="shop">
                                                                <div className="icon">
                                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p>12 Item</p>
                                                            </div>
                                                            <div className="like">
                                                                <span className="wishlist-button icon-heart" />
                                                                <p>97 like</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tf-card-collection">
                                                    <Link href="/author-2">
                                                        <div className="media-images-collection">
                                                            <img src="/assets/images/box-item/img-collection-05.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-06.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-07.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-08.jpg" alt="" />
                                                            <div className="author-poster">
                                                                <img src="/assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="card-bottom">
                                                        <div className="author">
                                                            <h5><Link href="/author01">Bored ape#21</Link></h5>
                                                            <div className="infor">@Themesflat</div>
                                                        </div>
                                                        <div className="bottom-right">
                                                            <div className="shop">
                                                                <div className="icon">
                                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p>12 Item</p>
                                                            </div>
                                                            <div className="like">
                                                                <span className="wishlist-button icon-heart" />
                                                                <p>97 like</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tf-card-collection">
                                                    <Link href="/author-2">
                                                        <div className="media-images-collection">
                                                            <img src="/assets/images/box-item/img-collection-09.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-10.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-11.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-12.jpg" alt="" />
                                                            <div className="author-poster">
                                                                <img src="/assets/images/avatar/avatar-02.png" alt="" className="w-full" />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="card-bottom">
                                                        <div className="author">
                                                            <h5><Link href="/author01">Bored ape#21</Link></h5>
                                                            <div className="infor">@Themesflat</div>
                                                        </div>
                                                        <div className="bottom-right">
                                                            <div className="shop">
                                                                <div className="icon">
                                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p>12 Item</p>
                                                            </div>
                                                            <div className="like">
                                                                <span className="wishlist-button icon-heart" />
                                                                <p>97 like</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tf-card-collection">
                                                    <Link href="/author-2">
                                                        <div className="media-images-collection">
                                                            <img src="/assets/images/box-item/img-collection-13.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-14.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-15.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-16.jpg" alt="" />
                                                            <div className="author-poster">
                                                                <img src="/assets/images/avatar/avatar-03.png" alt="" className="w-full" />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="card-bottom">
                                                        <div className="author">
                                                            <h5><Link href="/author01">Bored ape#21</Link></h5>
                                                            <div className="infor">@Themesflat</div>
                                                        </div>
                                                        <div className="bottom-right">
                                                            <div className="shop">
                                                                <div className="icon">
                                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p>12 Item</p>
                                                            </div>
                                                            <div className="like">
                                                                <span className="wishlist-button icon-heart" />
                                                                <p>97 like</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tf-card-collection">
                                                    <Link href="/author-2">
                                                        <div className="media-images-collection">
                                                            <img src="/assets/images/box-item/img-collection-01.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-02.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-03.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-04.jpg" alt="" />
                                                            <div className="author-poster">
                                                                <img src="/assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="card-bottom">
                                                        <div className="author">
                                                            <h5><Link href="/author01">Bored ape#21</Link></h5>
                                                            <div className="infor">@Themesflat</div>
                                                        </div>
                                                        <div className="bottom-right">
                                                            <div className="shop">
                                                                <div className="icon">
                                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p>12 Item</p>
                                                            </div>
                                                            <div className="like">
                                                                <span className="wishlist-button icon-heart" />
                                                                <p>97 like</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="tf-card-collection">
                                                    <Link href="/author-2">
                                                        <div className="media-images-collection">
                                                            <img src="/assets/images/box-item/img-collection-01.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-02.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-03.jpg" alt="" />
                                                            <img src="/assets/images/box-item/img-collection-04.jpg" alt="" />
                                                            <div className="author-poster">
                                                                <img src="/assets/images/avatar/avatar-01.png" alt="" className="w-full" />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                    <div className="card-bottom">
                                                        <div className="author">
                                                            <h5><Link href="/author01">Bored ape#21</Link></h5>
                                                            <div className="infor">@Themesflat</div>
                                                        </div>
                                                        <div className="bottom-right">
                                                            <div className="shop">
                                                                <div className="icon">
                                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                    </svg>
                                                                </div>
                                                                <p>12 Item</p>
                                                            </div>
                                                            <div className="like">
                                                                <span className="wishlist-button icon-heart" />
                                                                <p>97 like</p>
                                                            </div>
                                                        </div>
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
                <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
            </Layout >
        </>
    )
}