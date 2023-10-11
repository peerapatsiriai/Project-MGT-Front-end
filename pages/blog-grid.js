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
                                    <h1 className="heading text-center">Blog grid #1</h1>
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
                    <div className="tf-section tf-grid-blog pb-80">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="fl-blog fl-item2 col-lg-4 col-md-6">
                                    <article className="tf-card-article">
                                        <div className="card-media">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-grid-01.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="meta-info flex">
                                            <div className="item art active">Digital Art</div>
                                            <div className="item date">Mon, 08 May </div>
                                        </div>
                                        <div className="card-title">
                                            <h5><Link href="/item-details">Unreal Engine for Fortnite is a big deal</Link></h5>
                                        </div>
                                        <div className="card-bottom flex items-center justify-between">
                                            <div className="author flex items-center justify-between">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Posted by:</span>
                                                    <h6><Link href="/author-2">Cody Fisher</Link> </h6>
                                                </div>
                                            </div>
                                            <Link className="link" href="#"><i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="fl-blog fl-item2 col-lg-4 col-md-6">
                                    <article className="tf-card-article">
                                        <div className="card-media">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-grid-02.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="meta-info flex">
                                            <div className="item art active">Digital Art</div>
                                            <div className="item date">Mon, 08 May </div>
                                        </div>
                                        <div className="card-title">
                                            <h5><Link href="/item-details">Star Atlas Showroom 2.1: Massive ships and pretty skins</Link></h5>
                                        </div>
                                        <div className="card-bottom flex items-center justify-between">
                                            <div className="author flex items-center justify-between">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Posted by:</span>
                                                    <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <Link className="link" href="#"><i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="fl-blog fl-item2 col-lg-4 col-md-6">
                                    <article className="tf-card-article">
                                        <div className="card-media">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-grid-03.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="meta-info flex">
                                            <div className="item art active">Digital Art</div>
                                            <div className="item date">Mon, 08 May </div>
                                        </div>
                                        <div className="card-title">
                                            <h5><Link href="/item-details">Vision Pro: Apple’s mixed-reality headset is here</Link></h5>
                                        </div>
                                        <div className="card-bottom flex items-center justify-between">
                                            <div className="author flex items-center justify-between">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Posted by:</span>
                                                    <h6><Link href="/author-2">Savannah Nguyen</Link> </h6>
                                                </div>
                                            </div>
                                            <Link className="link" href="#"><i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="fl-blog fl-item2 col-lg-4 col-md-6">
                                    <article className="tf-card-article">
                                        <div className="card-media">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-grid-04.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="meta-info flex">
                                            <div className="item art active">Digital Art</div>
                                            <div className="item date">Mon, 08 May </div>
                                        </div>
                                        <div className="card-title">
                                            <h5><Link href="/item-details">New Shrapnel map to mix blossom and blood</Link></h5>
                                        </div>
                                        <div className="card-bottom flex items-center justify-between">
                                            <div className="author flex items-center justify-between">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Posted by:</span>
                                                    <h6><Link href="/author-2">Wade Warren</Link> </h6>
                                                </div>
                                            </div>
                                            <Link className="link" href="#"><i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="fl-blog fl-item2 col-lg-4 col-md-6">
                                    <article className="tf-card-article">
                                        <div className="card-media">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-grid-05.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="meta-info flex">
                                            <div className="item art active">Digital Art</div>
                                            <div className="item date">Mon, 08 May </div>
                                        </div>
                                        <div className="card-title">
                                            <h5><Link href="/item-details">Meta sticks to guns with lighter, VR focussed Quest 3</Link></h5>
                                        </div>
                                        <div className="card-bottom flex items-center justify-between">
                                            <div className="author flex items-center justify-between">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Posted by:</span>
                                                    <h6><Link href="/author-2">Jenny Wilson</Link> </h6>
                                                </div>
                                            </div>
                                            <Link className="link" href="#"><i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="fl-blog fl-item2 col-lg-4 col-md-6">
                                    <article className="tf-card-article">
                                        <div className="card-media">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-grid-06.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="meta-info flex">
                                            <div className="item art active">Digital Art</div>
                                            <div className="item date">Mon, 08 May </div>
                                        </div>
                                        <div className="card-title">
                                            <h5><Link href="/item-details">Shardbound carves out a place for the great comeback</Link></h5>
                                        </div>
                                        <div className="card-bottom flex items-center justify-between">
                                            <div className="author flex items-center justify-between">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Posted by:</span>
                                                    <h6><Link href="/author-2">Annette Black</Link> </h6>
                                                </div>
                                            </div>
                                            <Link className="link" href="#"><i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="fl-blog fl-item2 col-lg-4 col-md-6">
                                    <article className="tf-card-article">
                                        <div className="card-media">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-grid-07.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="meta-info flex">
                                            <div className="item art active">Digital Art</div>
                                            <div className="item date">Mon, 08 May </div>
                                        </div>
                                        <div className="card-title">
                                            <h5><Link href="/item-details">Unreal Engine for Fortnite is a big deal</Link></h5>
                                        </div>
                                        <div className="card-bottom flex items-center justify-between">
                                            <div className="author flex items-center justify-between">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Posted by:</span>
                                                    <h6><Link href="/author-2">Cody Fisher</Link> </h6>
                                                </div>
                                            </div>
                                            <Link className="link" href="#"><i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="fl-blog fl-item2 col-lg-4 col-md-6">
                                    <article className="tf-card-article">
                                        <div className="card-media">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-grid-08.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="meta-info flex">
                                            <div className="item art active">Digital Art</div>
                                            <div className="item date">Mon, 08 May </div>
                                        </div>
                                        <div className="card-title">
                                            <h5><Link href="/item-details">Unreal Engine for Fortnite is a big deal</Link></h5>
                                        </div>
                                        <div className="card-bottom flex items-center justify-between">
                                            <div className="author flex items-center justify-between">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Posted by:</span>
                                                    <h6><Link href="/author-2">Cody Fisher</Link> </h6>
                                                </div>
                                            </div>
                                            <Link className="link" href="#"><i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="fl-blog fl-item2 col-lg-4 col-md-6">
                                    <article className="tf-card-article">
                                        <div className="card-media">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-grid-09.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="meta-info flex">
                                            <div className="item art active">Digital Art</div>
                                            <div className="item date">Mon, 08 May </div>
                                        </div>
                                        <div className="card-title">
                                            <h5><Link href="/item-details">Unreal Engine for Fortnite is a big deal</Link></h5>
                                        </div>
                                        <div className="card-bottom flex items-center justify-between">
                                            <div className="author flex items-center justify-between">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Posted by:</span>
                                                    <h6><Link href="/author-2">Cody Fisher</Link> </h6>
                                                </div>
                                            </div>
                                            <Link className="link" href="#"><i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-md-12 load-more">
                                    <Link href="/blog-grid-1" id="loadmore" className="tf-button-loadmore">
                                        <span>Load More</span>
                                        <i className="icon-loading-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}