import BidModal from "@/components/elements/BidModal"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
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
                    <div className="tf-section-2 artwork loadmore-12-item-1">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="widget-category-checkbox mb-30">
                                        <h5>Status</h5>
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
                                    <div className="widget-category-checkbox mb-30">
                                        <h5>Collection</h5>
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
                                    <div className="widget-category-checkbox mb-30">
                                        <h5>Filter by price</h5>
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
                                    <div className="widget-category-checkbox mb-30">
                                        <h5>Chains</h5>
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
                                    <div className="widget-category-checkbox mb-30">
                                        <h5>Ratings</h5>
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
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-53.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-54.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-55.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-56.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-27.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-28.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-29.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-30.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-12.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-13.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-14.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-15.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-57.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.1s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-58.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.2s" className="wow fadeInUp fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-59.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-60.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-15.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fl-item-1 col-lg-4 col-md-6">
                                            <div className="tf-card-box style-1">
                                                <div className="card-media">
                                                    <Link href="#">
                                                        <img src="/assets/images/box-item/card-item-57.jpg" alt="" />
                                                    </Link>
                                                    <span className="wishlist-button icon-heart" />
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
                                                        <h6><Link href="/author-2">Kathryn Murphy</Link> </h6>
                                                    </div>
                                                </div>
                                                <div className="divider" />
                                                <div className="meta-info flex items-center justify-between">
                                                    <span className="text-bid">Current Bid</span>
                                                    <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 load-more">
                                            <a id="button-loadmore" className="tf-button-loadmore">
                                                <span>Load More</span>
                                                <i className="icon-loading-1" />
                                            </a>
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