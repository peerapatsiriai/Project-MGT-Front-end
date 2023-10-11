import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>

                <div>
                    <div className="flat-title-page">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="heading text-center">top creators in
                                        <span className="dropdown" id="select-day">
                                            <span className="btn-selector tf-color">
                                                <span>1 day</span>
                                            </span>
                                            <ul>
                                                <li><span>1 day</span></li>
                                                <li><span>3 day</span></li>
                                                <li><span>7 day</span></li>
                                            </ul>
                                        </span>
                                    </h1>
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
                    <div className="tf-section-2">
                        <div className="themesflat-container">
                            <div className="row">
                                <div data-wow-delay="0s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-08.png" alt="" className="avatar" />
                                            <div className="number">1</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-09.png" alt="" className="avatar" />
                                            <div className="number">2</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-10.png" alt="" className="avatar" />
                                            <div className="number">3</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-11.png" alt="" className="avatar" />
                                            <div className="number">4</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.4s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-12.png" alt="" className="avatar" />
                                            <div className="number">5</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.5s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-13.png" alt="" className="avatar" />
                                            <div className="number">6</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-09.png" alt="" className="avatar" />
                                            <div className="number">7</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-10.png" alt="" className="avatar" />
                                            <div className="number">8</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-08.png" alt="" className="avatar" />
                                            <div className="number">9</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-09.png" alt="" className="avatar" />
                                            <div className="number">10</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.4s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-10.png" alt="" className="avatar" />
                                            <div className="number">11</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.5s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-11.png" alt="" className="avatar" />
                                            <div className="number">12</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-12.png" alt="" className="avatar" />
                                            <div className="number">13</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-13.png" alt="" className="avatar" />
                                            <div className="number">14</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-09.png" alt="" className="avatar" />
                                            <div className="number">15</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-10.png" alt="" className="avatar" />
                                            <div className="number">16</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.4s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-08.png" alt="" className="avatar" />
                                            <div className="number">17</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.5s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-09.png" alt="" className="avatar" />
                                            <div className="number">18</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-10.png" alt="" className="avatar" />
                                            <div className="number">19</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-11.png" alt="" className="avatar" />
                                            <div className="number">20</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-12.png" alt="" className="avatar" />
                                            <div className="number">21</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-13.png" alt="" className="avatar" />
                                            <div className="number">22</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.4s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-09.png" alt="" className="avatar" />
                                            <div className="number">23</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.5s" className="wow fadeInUp col-xl-2 col-sm-3 col-6 mb-30">
                                    <div className="tf-author-box style-3 text-center">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-10.png" alt="" className="avatar" />
                                            <div className="number">24</div>
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="widget-pagination pt-25">
                                        <ul className="justify-center">
                                            <li>
                                                <Link href="#"><i className="icon-keyboard_arrow_left" /></Link>
                                            </li>
                                            <li>
                                                <Link href="#">1</Link>
                                            </li>
                                            <li>
                                                <Link href="#">2</Link>
                                            </li>
                                            <li className="active">
                                                <Link href="#">3</Link>
                                            </li>
                                            <li>
                                                <Link href="#">4</Link>
                                            </li>
                                            <li>
                                                <Link href="#">...</Link>
                                            </li>
                                            <li>
                                                <Link href="#"><i className="icon-keyboard_arrow_right" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}