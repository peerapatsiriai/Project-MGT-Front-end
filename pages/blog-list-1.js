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
                                    <h1 className="heading text-center">Blog list #2</h1>
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
                    <div className="tf-section-5 tf-list-blog">
                        <div className="themesflat-container">
                            <div className="row flex flex-wrap">
                                <div className="wrap-inner col-md-8 col-12 ">
                                    <article className="tf-card-article style-1">
                                        <div className="card-media mb-20">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-list-06.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="inner">
                                            <div className="meta-info flex">
                                                <div className="item art active">Digital Art</div>
                                                <div className="item date">Mon, 08 May </div>
                                            </div>
                                            <div className="card-title">
                                                <h5><Link href="/item-details">Sascha Zehe on how to explain blockchain gaming</Link></h5>
                                            </div>
                                            <div className="card-bottom flex items-center justify-between">
                                                <div className="author flex items-center justify-between">
                                                    <div className="avatar">
                                                        <img src="/assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                                    </div>
                                                    <div className="info">
                                                        <span>Posted by:</span>
                                                        <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                    </div>
                                                </div>
                                                <Link className="link" href="#"><i className="icon-arrow-up-right2" /></Link>
                                            </div>
                                        </div>
                                    </article>
                                    <article className="tf-card-article style-1">
                                        <div className="card-media mb-20">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-list-07.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="inner">
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
                                        </div>
                                    </article>
                                    <article className="tf-card-article style-1">
                                        <div className="card-media mb-20">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-list-08.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="inner">
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
                                        </div>
                                    </article>
                                    <article className="tf-card-article style-1">
                                        <div className="card-media mb-20">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-list-09.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="inner">
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
                                        </div>
                                    </article>
                                    <article className="tf-card-article style-1">
                                        <div className="card-media mb-20">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-list-10.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="inner">
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
                                        </div>
                                    </article>
                                    <article className="tf-card-article style-1">
                                        <div className="card-media mb-20">
                                            <Link href="/blog-details">
                                                <img src="/assets/images/blog/blog-list-11.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div className="inner">
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
                                        </div>
                                    </article>
                                </div>
                                <div className="side-bar col-md-4 col-12">
                                    <div className="widget-search">
                                        <form action="#" method="get" role="search" className="search-form relative">
                                            <input type="search" id="search" className="search-field style-1" placeholder="Search..." name="s" title="Search for" required />
                                            <button className="search search-submit" type="submit" title="Search">
                                                <i className="icon-search" />
                                            </button>
                                        </form>
                                    </div>
                                    <div className="widget widget-categories">
                                        <h5 className="title-widget">Categories</h5>
                                        <ul>
                                            <li>
                                                <div className="cate-item"><Link href="#">NFTs</Link></div>
                                                <div className="number">(1.483)</div>
                                            </li>
                                            <li>
                                                <div className="cate-item"><Link href="#">Digital Art</Link></div>
                                                <div className="number">(97)</div>
                                            </li>
                                            <li>
                                                <div className="cate-item"><Link href="#">Crypto</Link></div>
                                                <div className="number">(45)</div>
                                            </li>
                                            <li>
                                                <div className="cate-item"><Link href="#">Technology</Link></div>
                                                <div className="number">(728)</div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget-related-posts">
                                        <h5 className="title-widget">Related posts</h5>
                                        <div className="related-posts-item main">
                                            <div className="card-media">
                                                <img src="/assets/images/blog/sidebar-01.jpg" alt="" />
                                            </div>
                                            <div className="meta-info flex">
                                                <div className="item art active">Digital Art</div>
                                                <div className="item date">Mon, 08 May </div>
                                            </div>
                                            <h5><Link href="/item-details">Lorem ipsum dolor sit amet, consectetur adipiscing pulvinar</Link></h5>
                                        </div>
                                        <div className="related-posts-item">
                                            <div className="card-media">
                                                <img src="/assets/images/blog/sidebar-02.jpg" alt="" />
                                            </div>
                                            <div className="card-content">
                                                <h5><Link href="/item-details">Explore Arc8: Web3 Concepts Meet Gaming</Link></h5>
                                                <div className="item date">Mon, 08 May </div>
                                            </div>
                                        </div>
                                        <div className="related-posts-item">
                                            <div className="card-media">
                                                <img src="/assets/images/blog/sidebar-03.jpg" alt="" />
                                            </div>
                                            <div className="card-content">
                                                <h5><Link href="/item-details">Explore Arc8: Web3 Concepts Meet Gaming</Link></h5>
                                                <div className="item date">Mon, 08 May </div>
                                            </div>
                                        </div>
                                        <div className="related-posts-item">
                                            <div className="card-media">
                                                <img src="/assets/images/blog/sidebar-04.jpg" alt="" />
                                            </div>
                                            <div className="card-content">
                                                <h5><Link href="/item-details">Explore Arc8: Web3 Concepts Meet Gaming</Link></h5>
                                                <div className="item date">Mon, 08 May </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget widget-tag ">
                                        <h5 className="title-widget">Popular tags</h5>
                                        <ul className="flex flex-wrap">
                                            <li><Link href="/blog" className="box-widget-tag">ICO</Link></li>
                                            <li><Link href="/blog" className="box-widget-tag">Digital Art</Link></li>
                                            <li><Link href="/blog" className="box-widget-tag">Gaming</Link></li>
                                            <li><Link href="/blog" className="box-widget-tag">NFTs</Link></li>
                                            <li><Link href="/blog" className="box-widget-tag">Crypto</Link></li>
                                            <li><Link href="/blog" className="box-widget-tag">Concepts</Link></li>
                                            <li><Link href="/blog" className="box-widget-tag">Technology</Link></li>
                                            <li><Link href="/blog" className="box-widget-tag">Land</Link></li>
                                            <li><Link href="/blog" className="box-widget-tag">Web3</Link></li>
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