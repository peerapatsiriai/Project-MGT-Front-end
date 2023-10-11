import BidModal from "@/components/elements/BidModal"
import Layout from "@/components/layout/Layout"
import { Menu } from '@headlessui/react'
import Link from "next/link"
import { useState } from "react"
export default function Home() {
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
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
                    <div className="tf-section-2 discover-item loadmore-12-item">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="widget-tabs relative">
                                        <div className="tf-soft">
                                            <div className="soft-right">
                                                <Menu as="div" className="dropdown">
                                                    <Menu.Button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton4" aria-haspopup="true" aria-expanded="false">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M10 5V15M7.5 12.6517L8.2325 13.2008C9.20833 13.9333 10.7908 13.9333 11.7675 13.2008C12.7442 12.4683 12.7442 11.2817 11.7675 10.5492C11.28 10.1825 10.64 10 10 10C9.39583 10 8.79167 9.81667 8.33083 9.45083C7.40917 8.71833 7.40917 7.53167 8.33083 6.79917C9.2525 6.06667 10.7475 6.06667 11.6692 6.79917L12.015 7.07417M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span>Sort by: recently added</span>
                                                    </Menu.Button>
                                                    <Menu.Items as="div" className="dropdown-menu d-block" aria-labelledby="dropdownMenuButton">
                                                        <h6>Sort by</h6>
                                                        <Link href="#" className="dropdown-item">
                                                            <div className="sort-filter" href="#">
                                                                <span>Recently added</span>
                                                                <span className="icon-tick"><span className="path2" /></span>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="dropdown-item">
                                                            <div className="sort-filter active" href="#">
                                                                <span>Price: Low to High</span>
                                                                <span className="icon-tick"><span className="path2" /></span>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="dropdown-item">
                                                            <div className="sort-filter" href="#">
                                                                <span>Price: High to Low</span>
                                                                <span className="icon-tick"><span className="path2" /></span>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="dropdown-item">
                                                            <div className="sort-filter" href="#">
                                                                <span>Auction ending soon</span>
                                                                <span className="icon-tick"><span className="path2" /></span>
                                                            </div>
                                                        </Link>
                                                        <h6>Options</h6>
                                                        <Link href="#" className="dropdown-item">
                                                            <div className="sort-filter" href="#">
                                                                <span>Auction ending soon</span>
                                                                <input className="check" type="checkbox" name="check" defaultChecked />
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="dropdown-item">
                                                            <div className="sort-filter" href="#">
                                                                <span>Show lazy minted</span>
                                                                <input className="check" type="checkbox" name="check" />
                                                            </div>
                                                        </Link>
                                                    </Menu.Items>
                                                </Menu>
                                            </div>
                                        </div>
                                        <ul className="widget-menu-tab">
                                            <li className={activeIndex === 1 ? "item-title active" : "item-title"} onClick={() => handleOnClick(1)}>
                                                <span className="inner">Category</span>
                                            </li>
                                            <li className={activeIndex === 2 ? "item-title active" : "item-title"} onClick={() => handleOnClick(2)}>
                                                <span className="inner">Items</span>
                                            </li>
                                            <li className={activeIndex === 3 ? "item-title active" : "item-title"} onClick={() => handleOnClick(3)}>
                                                <span className="inner">Status</span>
                                            </li>
                                            <li className={activeIndex === 4 ? "item-title active" : "item-title"} onClick={() => handleOnClick(4)}>
                                                <span className="inner">Price range</span>
                                            </li>
                                        </ul>
                                        <div className="widget-content-tab pt-10">
                                            <div className="widget-content-inner" style={{ display: `${activeIndex === 1 ? "block" : "none"}` }}>
                                                <div className="row">
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                </div>
                                            </div>
                                            <div className="widget-content-inner" style={{ display: `${activeIndex === 2 ? "block" : "none"}` }}>
                                                <div className="row">
                                                    <div data-wow-delay="0s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0.1s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0.2s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0.3s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0.1s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0.2s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0.3s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0.1s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0.2s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0.3s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0.1s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0.2s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div data-wow-delay="0.4s" className="wow fadeInUp col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                </div>
                                            </div>
                                            <div className="widget-content-inner" style={{ display: `${activeIndex === 3 ? "block" : "none"}` }}>
                                                <div className="row">
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                </div>
                                            </div>
                                            <div className="widget-content-inner" style={{ display: `${activeIndex === 4 ? "block" : "none"}` }}>
                                                <div className="row">
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
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
                                                </div>
                                            </div>
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
                <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
            </Layout>
        </>
    )
}