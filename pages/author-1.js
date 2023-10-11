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
                                <div data-wow-delay="0s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-01.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order tf-color">#1</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-02.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order tf-color">#2</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-03.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order tf-color">#3</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-04.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#4</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-05.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#5</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-06.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#6</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-01.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#7</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-02.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#8</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-03.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#9</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-04.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#10</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-05.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#11</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-06.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#12</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-01.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#13</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-02.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#14</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-03.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#15</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-04.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#16</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-05.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#17</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-06.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#18</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-01.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#19</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-02.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#20</div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-lg-4 col-md-6 mb-30">
                                    <div className="tf-author-box style-2 type-1">
                                        <div className="author-avatar ">
                                            <img src="/assets/images/avatar/avatar-03.png" alt="" className="avatar" />
                                        </div>
                                        <div className="author-infor ">
                                            <h5><Link href="/author-2">Arlene McCoy</Link></h5>
                                            <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                        </div>
                                        <div className="order opacity-01">#21</div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="widget-pagination">
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