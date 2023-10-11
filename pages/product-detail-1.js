import BarChart from "@/components/elements/BarChart"
import Countdown from "@/components/elements/Countdown"
import Layout from "@/components/layout/Layout"
import FeaturedSlider1 from "@/components/slider/FeaturedSlider1"
import { Menu } from '@headlessui/react'
import Link from "next/link"
const currentTime = new Date()
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>

                <div>
                    <div className="tf-section-2 product-detail">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div data-wow-delay="0s" className="wow fadeInLeft tf-card-box style-5">
                                        <div className="card-media mb-0">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/product-01.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <h6 className="price gem"><i className="icon-gem" /></h6>
                                        <div className="wishlist-button">10<i className="icon-heart" /></div>
                                        <div className="featured-countdown">
                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                        </div>
                                    </div>
                                    <div data-wow-delay="0s" className="wow fadeInLeft tf-card-box style-5">
                                        <div className="card-media mb-0">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/product-02.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <h6 className="price gem"><i className="icon-gem" /></h6>
                                        <div className="wishlist-button">10<i className="icon-heart" /></div>
                                        <div className="featured-countdown">
                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                        </div>
                                    </div>
                                    <div data-wow-delay="0s" className="wow fadeInLeft tf-card-box style-5">
                                        <div className="card-media mb-0">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/product-03.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <h6 className="price gem"><i className="icon-gem" /></h6>
                                        <div className="wishlist-button">10<i className="icon-heart" /></div>
                                        <div className="featured-countdown">
                                            <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div data-wow-delay="0s" className="wow fadeInRight infor-product">
                                        <div className="text">8SIAN Main Collection <span className="icon-tick"><span className="path1" /><span className="path2" /></span></div>
                                        <div className="menu_card">
                                            <Menu as="div" className="dropdown">
                                                <div className="icon">
                                                    <Menu.Button as="a" className="btn-link" aria-expanded="false">
                                                        <i className="icon-link-1" />
                                                    </Menu.Button>
                                                    <Menu.Items as="div" className="dropdown-menu show d-block">
                                                        <Link className="dropdown-item" href="#"><i className="icon-link" />Copy link</Link>
                                                        <Link className="dropdown-item" href="#"><i className="icon-facebook" />Share on facebook</Link>
                                                        <Link className="dropdown-item mb-0" href="#"><i className="icon-twitter" />Share on twitter</Link>
                                                    </Menu.Items>
                                                </div>
                                            </Menu>
                                            <Menu as="div" className="dropdown">
                                                <div className="icon">
                                                    <Menu.Button as="a" className="btn-link" aria-expanded="false">
                                                        <i className="icon-content" />
                                                    </Menu.Button>
                                                    <Menu.Items as="div" className="dropdown-menu show d-block">
                                                        <Link className="dropdown-item" href="#"><i className="icon-refresh" />Refresh metadata</Link>
                                                        <Link className="dropdown-item mb-0" href="#"><i className="icon-report" />Report</Link>
                                                    </Menu.Items>
                                                </div>
                                            </Menu>
                                        </div>
                                        <h2>Themesflat #0270</h2>
                                        <div className="author flex items-center mb-30">
                                            <div className="avatar">
                                                <img src="/assets/images/avatar/avatar-box-05.jpg" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Owned by:</span>
                                                <h6><Link href="/author01">Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="meta mb-20">
                                            <div className="meta-item view">
                                                <i className="icon-show" />208 view
                                            </div>
                                            <div className="meta-item rating">
                                                <i className="icon-link-2" />Top #2 trending
                                            </div>
                                            <div className="meta-item favorites">
                                                <i className="icon-heart" />10 favorites
                                            </div>
                                        </div>
                                    </div>
                                    <div data-wow-delay="0s" className="wow fadeInRight product-item time-sales">
                                        <h6><i className="icon-clock" />Sale ends May 22 at 9:39</h6>
                                        <div className="content">
                                            <div className="text">Current price</div>
                                            <div className="flex justify-between">
                                                <p>0,032 ETH <span>$58,11</span></p>
                                                <Link href="#" className="tf-button style-1 h50 w216">Place a bid<i className="icon-arrow-up-right2" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-wow-delay="0s" className="wow fadeInRight product-item description">
                                        <h6><i className="icon-description" />Description</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            <p>8,888 NFTs of beautiful, Asian women painstakingly-crafted where even the most intricate details are steeped in historical significance. We envision 8SIAN being a global, inclusive community that brings together members who share admiration for Asian cultures. We want to represent, educate and build a lasting presence in the NFT space.</p>
                                        </div>
                                    </div>
                                    <div data-wow-delay="0s" className="wow fadeInRight product-item history">
                                        <h6><i className="icon-description" />Price History</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            {/* <div className="chart">
                                                <canvas id="myChart" />
                                            </div> */}
                                            <BarChart />
                                        </div>
                                    </div>
                                    <div data-wow-delay="0s" className="wow fadeInRight product-item details">
                                        <h6><i className="icon-description" />Details</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            <div className="details-item">
                                                <span>Contract Address</span>
                                                <span className="tf-color">0x1984...c38f</span>
                                            </div>
                                            <div className="details-item">
                                                <span>Token ID</span>
                                                <span className="tf-color">0270</span>
                                            </div>
                                            <div className="details-item">
                                                <span>Token Standard</span>
                                                <span >ERC-721</span>
                                            </div>
                                            <div className="details-item">
                                                <span>Chain</span>
                                                <span >Ethereum</span>
                                            </div>
                                            <div className="details-item">
                                                <span>Last Updated</span>
                                                <span >8 months ago</span>
                                            </div>
                                            <div className="details-item mb-0">
                                                <span>Creator Earnings</span>
                                                <span >8%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-wow-delay="0s" className="wow fadeInRight product-item traits">
                                        <h6><i className="icon-description" />Traits</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            <div className="trait-item">
                                                <p>Apparel</p>
                                                <div className="title">Bathrobe Red 1%</div>
                                                <p>Floor: 0,056 ETH</p>
                                            </div>
                                            <div className="trait-item">
                                                <p>Background</p>
                                                <div className="title">Orange 5%</div>
                                                <p>Floor: 0,056 ETH</p>
                                            </div>
                                            <div className="trait-item">
                                                <p>Earrings</p>
                                                <div className="title">None 60%</div>
                                                <p>Floor: 0,037 ETH</p>
                                            </div>
                                            <div className="trait-item">
                                                <p>Apparel</p>
                                                <div className="title">Bathrobe Red 1%</div>
                                                <p>Floor: 0,056 ETH</p>
                                            </div>
                                            <div className="trait-item">
                                                <p>Background</p>
                                                <div className="title">Orange 5%</div>
                                                <p>Floor: 0,056 ETH</p>
                                            </div>
                                            <div className="trait-item">
                                                <p>Earrings</p>
                                                <div className="title">None 60%</div>
                                                <p>Floor: 0,037 ETH</p>
                                            </div>
                                            <div className="trait-item">
                                                <p>Apparel</p>
                                                <div className="title">Bathrobe Red 1%</div>
                                                <p>Floor: 0,056 ETH</p>
                                            </div>
                                            <div className="trait-item">
                                                <p>Background</p>
                                                <div className="title">Orange 5%</div>
                                                <p>Floor: 0,056 ETH</p>
                                            </div>
                                            <div className="trait-item">
                                                <p>Earrings</p>
                                                <div className="title">None 60%</div>
                                                <p>Floor: 0,037 ETH</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-12">
                                    <div className="product-item offers">
                                        <h6><i className="icon-description" />Offers</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            <div className="table-heading">
                                                <div className="column">Price</div>
                                                <div className="column">USD Price</div>
                                                <div className="column">Quantity</div>
                                                <div className="column">Floor Diference</div>
                                                <div className="column">Expiration</div>
                                                <div className="column">Form</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0034</h6></div>
                                                <div className="column">$6,60</div>
                                                <div className="column">3</div>
                                                <div className="column">90% below</div>
                                                <div className="column">In 26 day</div>
                                                <div className="column"><span className="tf-color">273E40</span></div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0034</h6></div>
                                                <div className="column">$6,60</div>
                                                <div className="column">3</div>
                                                <div className="column">90% below</div>
                                                <div className="column">In 26 day</div>
                                                <div className="column"><span className="tf-color">273E40</span></div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0034</h6></div>
                                                <div className="column">$6,60</div>
                                                <div className="column">3</div>
                                                <div className="column">90% below</div>
                                                <div className="column">In 26 day</div>
                                                <div className="column"><span className="tf-color">273E40</span></div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0034</h6></div>
                                                <div className="column">$6,60</div>
                                                <div className="column">3</div>
                                                <div className="column">90% below</div>
                                                <div className="column">In 26 day</div>
                                                <div className="column"><span className="tf-color">273E40</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-12">
                                    <div className="product-item item-activity mb-0">
                                        <h6><i className="icon-two-arrow rotateZ90" />Item activity</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            <div className="table-heading">
                                                <div className="column">Event</div>
                                                <div className="column">Price</div>
                                                <div className="column">Form</div>
                                                <div className="column">To</div>
                                                <div className="column">Date</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column flex items-center"><i className="icon-two-arrow" />Transfer</div>
                                                <div className="column">-/-</div>
                                                <div className="column"><span className="tf-color">985DE3</span></div>
                                                <div className="column"><span className="tf-color">Nosyu</span></div>
                                                <div className="column">19h ago</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column flex items-center"><i className="icon-sale" />Sale</div>
                                                <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0319</h6></div>
                                                <div className="column"><span className="tf-color">985DE3</span></div>
                                                <div className="column"><span className="tf-color">Nosyu</span></div>
                                                <div className="column">19h ago</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column flex items-center"><i className="icon-two-arrow" />Transfer</div>
                                                <div className="column">-/-</div>
                                                <div className="column"><span className="tf-color">985DE3</span></div>
                                                <div className="column"><span className="tf-color">Nosyu</span></div>
                                                <div className="column">19h ago</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column flex items-center"><i className="icon-sale" />Sale</div>
                                                <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0319</h6></div>
                                                <div className="column"><span className="tf-color">985DE3</span></div>
                                                <div className="column"><span className="tf-color">Nosyu</span></div>
                                                <div className="column">19h ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 featured-item style-bottom">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section pb-20">
                                        <h2 className="tf-title ">Related artworks</h2>
                                        <Link href="/explore-3" >Discover more <i className="icon-arrow-right2" /></Link>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <FeaturedSlider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}