import BidModal from "@/components/elements/BidModal"
import Countdown from '@/components/elements/Countdown'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
const currentTime = new Date()
export default function Home() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>

                <div>
                    <div className="flat-title-page">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="heading text-center">Explore Product</h1>
                                    <ul className="breadcrumbs flex justify-center">
                                        <li className="icon-keyboard_arrow_right">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Explore</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-5 artwork loadmore-12-item-1">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="widget-category-checkbox style-1 mb-30">
                                        <h5 className="active">Status</h5>
                                        <div className="content-wg-category-checkbox">
                                            <form action="#">
                                                <label>Buy now
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>On auction
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>New
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>Featured
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget-category-checkbox style-1 mb-30">
                                        <h5 className="active">Collection</h5>
                                        <div className="content-wg-category-checkbox">
                                            <form action="#">
                                                <label>Digital Art
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>Gaming
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>Gaming
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>Music
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>Photography
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>Typo
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>Crypto
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget-category-checkbox style-1 mb-30">
                                        <h5 className="active">Filter by price</h5>
                                        <div className="content-wg-category-checkbox">
                                            <form action="#">
                                                <label>$0 - $100
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>$100 - $200
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>$200 - $300
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>$300 - $400
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>$400 - $500
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>$500 - $600
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>Over $600
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget-category-checkbox style-1 mb-30">
                                        <h5 className="active">Chains</h5>
                                        <div className="content-wg-category-checkbox">
                                            <form action="#">
                                                <label>Bitcoin
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>Ethereum
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>Cardano
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>Solana
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label>Litecoin
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="widget-category-checkbox style-1">
                                        <h5 className="active">Ratings</h5>
                                        <div className="content-wg-category-checkbox">
                                            <form action="#">
                                                <label><i className="icon-star active" /><i className="icon-star active" /><i className="icon-star active" /><i className="icon-star active" /><i className="icon-star active" />
                                                    <input type="radio" name="rating" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label><i className="icon-star active" /><i className="icon-star active" /><i className="icon-star active" /><i className="icon-star active" /><i className="icon-star" /> &amp; Up
                                                    <input type="radio" name="rating" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label><i className="icon-star active" /><i className="icon-star active" /><i className="icon-star active" /><i className="icon-star" /><i className="icon-star" /> &amp; Up
                                                    <input type="radio" name="rating" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label><i className="icon-star active" /><i className="icon-star active" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /> &amp; Up
                                                    <input type="radio" name="rating" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                                <label><i className="icon-star active" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /> &amp; Up
                                                    <input type="radio" name="rating" />
                                                    <span className="btn-checkbox" />
                                                </label><br />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="row">
                                        <div data-wow-delay="0s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-49.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                    </div>
                                                </div>
                                                <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-50.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                    </div>
                                                </div>
                                                <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-51.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                    </div>
                                                </div>
                                                <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-52.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                    </div>
                                                </div>
                                                <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-53.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                    </div>
                                                </div>
                                                <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-54.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                    </div>
                                                </div>
                                                <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-55.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                    </div>
                                                </div>
                                                <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-56.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                    </div>
                                                </div>
                                                <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-57.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                    </div>
                                                </div>
                                                <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-58.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                    </div>
                                                </div>
                                                <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-59.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                    </div>
                                                </div>
                                                <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-4">
                                                <div className="author flex items-center">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Created by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-60.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
                                                    <div className="featured-countdown">
                                                        <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                                    </div>
                                                </div>
                                                <h5 className="name"><Link href="#">Dayco serpentine belt</Link></h5>
                                                <div className="meta-info flex items-center justify-between">
                                                    <div>
                                                        <span className="text-bid">Current Bid</span>
                                                        <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
            </Layout>
        </>
    )
}