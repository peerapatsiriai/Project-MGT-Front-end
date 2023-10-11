import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                    <div className="flat-title-page blog-detail">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <ul className="breadcrumbs flex">
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
                    <div className="tf-section tf-blog-detail pb-48">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="wrapper col-md-8">
                                    <div className="inner-content mr-20">
                                        <h2 className="title-post">Star Atlas Showroom 2.1: Massive ships and pretty skins</h2>
                                        <div className="meta-post flex justify-between mt-10 items-center">
                                            <div className="author flex items-center justify-between">
                                                <div className="avatar">
                                                    <img src="/assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                                                </div>
                                                <div className="info">
                                                    <span>Posted by:</span>
                                                    <h6><Link href="/author-2">Marvin McKinney</Link> </h6>
                                                </div>
                                            </div>
                                            <div className="meta-info flex">
                                                <div className="item art active">NFTs</div>
                                                <div className="item date">Mon, 08 May</div>
                                                <div className="item comment">0 Comment</div>
                                            </div>
                                        </div>
                                        <div className="divider" />
                                        <div className="title">If you are an investor, trying to pick which blockchain game to pour your money into, how do you tease apart the gold and the mud?</div>
                                        <div className="image">
                                            <img src="/assets/images/blog/blog-detail-01.png" alt="Image" />
                                        </div>
                                        <div className="inner-post">
                                            <h3 className="heading">The answer has changed for Yan Liberman over the past few years.</h3>
                                            <p>Yan is a founder at Delphi Digital, an organisation which started out researching crypto, moved into consulting (actually building stuff) and then moved into full-on investment. Delphi have financed scores of projects, including Polemos. Eighty-five people say they work for Delphi on LinkedIn, double what is listed on the website. That speaks to explosive growth.
                                            </p>
                                            <blockquote>
                                                <span className="icon-quote" />
                                                <p>
                                                    Hal: So Yan, you’ve been through some ups and downs because you were in crypto in 2017. So you experienced the fluctuations of the market a few times since then. I think two big downturns, and we’re still in the second of those. Is that exhausting?
                                                </p>
                                            </blockquote>
                                            <div className="image-box">
                                                <img src="/assets/images/blog/blog-detail-02.png" alt="Image" />
                                            </div>
                                            <p>Yan: I like to invest and something that helps me excel is just having a very large tolerance for risk. And so the swings up are euphoric and the swings down can be tough. I think what ends up happening is you just, you’re dead inside from the volatility.</p>
                                        </div>
                                        <div className="inner-post style-1">
                                            <h3 className="heading ">Countdown to Zero</h3>
                                            <p>At a preview of the device days before its launch, Meta gave reporters a glimpse of the type of user it had in mind by showcasing apps like Tribe XR, a virtual training environment for DJs learning how to use complex equipment.
                                            </p>
                                            <div className="image-box">
                                                <div className="w-full">
                                                    <img src="/assets/images/blog/blog-detail-03.png" alt="Image" />
                                                </div>
                                                <div className="w-full">
                                                    <img src="/assets/images/blog/blog-detail-04.png" alt="Image" />
                                                </div>
                                            </div>
                                            <p>The latest demo version of Illuvium’s city builder Zero was due out in February. It’s here now, released yesterday, so I can stop whining.</p>
                                            <p>Our experts Caveman and Moggy have been playing and passing on their wisdom. Right now, there’s only a small group of people who could benefit from knowing exactly how to maximise resource production by the placement of footpaths, but we’ve got them covered</p>
                                        </div>
                                        <div className="divider style-1" />
                                        <div className="bottom flex justify-between items-center">
                                            <div className="widget-tag flex items-center">
                                                <h3 className="title-widget">Tags:</h3>
                                                <ul className="flex flex-wrap gap4 items-center">
                                                    <li><Link href="#">nfts</Link></li>
                                                    <li><Link href="#">crypto</Link></li>
                                                    <li><Link href="#">cyfonii</Link></li>
                                                    <li><Link href="#">collection</Link></li>
                                                </ul>
                                            </div>
                                            <div className="widget-social">
                                                <ul className="flex">
                                                    <li><Link href="#" className="icon-facebook" /></li>
                                                    <li><Link href="#" className="icon-twitter" /></li>
                                                    <li><Link href="#" className="icon-linkedin2" /></li>
                                                    <li><Link href="#" className="icon-instagram" /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="related-post">
                                            <div className="prev">
                                                <Link href="#"><i className="icon-keyboard_arrow_left" />Previous post</Link>
                                                <div className="action items-center left flex mt-16">
                                                    <img src="/assets/images/blog/related-01.jpg" alt="" />
                                                    <div className="content">
                                                        <h5>Unreal Engine for Fortnite is a big deal</h5>
                                                        <div className="meta-info flex">
                                                            <div className="item date">Mon, 08 May</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="next text-end">
                                                <Link href="#">Next post<i className="icon-keyboard_arrow_right" /></Link>
                                                <div className="action items-center right flex mt-16">
                                                    <div className="content">
                                                        <h5>Regulators step in, mayhem ensues</h5>
                                                        <div className="meta-info flex justify-end">
                                                            <div className="item date">Mon, 08 May</div>
                                                        </div>
                                                    </div>
                                                    <img src="/assets/images/blog/related-02.jpg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-comment">
                                            <h3>Comment (5)</h3>
                                            <ul>
                                                <li className="comment-box">
                                                    <img src="/assets/images/avatar/avatar-user-01.jpg" alt="" />
                                                    <div className="comment-right">
                                                        <div className="top flex justify-between items-center">
                                                            <div className="info">
                                                                <h5>Annette Black</h5>
                                                            </div>
                                                            <span>Mon, 08 May </span>
                                                        </div>
                                                        <p >Nullam ornare a magna quis aliquet. Duis suscipit eros in suscipit venenatis. Pellentesque quis efficitur leo. Maecenas accumsan est in nibh interdum, quis dignissim neque scelerisque.</p>
                                                        <Link href="#">Reply</Link>
                                                    </div>
                                                </li>
                                                <li className="comment-box rep">
                                                    <img src="/assets/images/avatar/avatar-user-02.jpg" alt="" />
                                                    <div className="comment-right">
                                                        <div className="top flex justify-between items-center">
                                                            <div className="info">
                                                                <h5>Annette Black</h5>
                                                            </div>
                                                            <span>Mon, 08 May </span>
                                                        </div>
                                                        <p >Nullam ornare a magna quis aliquet. Duis suscipit eros in suscipit venenatis. Pellentesque quis efficitur leo. Maecenas accumsan est in nibh interdum, quis dignissim neque scelerisque.</p>
                                                        <Link href="#">Reply</Link>
                                                    </div>
                                                </li>
                                                <li className="comment-box">
                                                    <img src="/assets/images/avatar/avatar-user-03.jpg" alt="" />
                                                    <div className="comment-right">
                                                        <div className="top flex justify-between items-center">
                                                            <div className="info">
                                                                <h5>Annette Black</h5>
                                                            </div>
                                                            <span>Mon, 08 May </span>
                                                        </div>
                                                        <p >Nullam ornare a magna quis aliquet. Duis suscipit eros in suscipit venenatis. Pellentesque quis efficitur leo. Maecenas accumsan est in nibh interdum, quis dignissim neque scelerisque.</p>
                                                        <Link href="#">Reply</Link>
                                                    </div>
                                                </li>
                                                <li className="comment-box">
                                                    <img src="/assets/images/avatar/avatar-user-04.jpg" alt="" />
                                                    <div className="comment-right">
                                                        <div className="top flex justify-between items-center">
                                                            <div className="info">
                                                                <h5>Annette Black</h5>
                                                            </div>
                                                            <span>Mon, 08 May </span>
                                                        </div>
                                                        <p >Nullam ornare a magna quis aliquet. Duis suscipit eros in suscipit venenatis. Pellentesque quis efficitur leo. Maecenas accumsan est in nibh interdum, quis dignissim neque scelerisque.</p>
                                                        <Link href="#">Reply</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget-reply">
                                            <h3 className="heading">
                                                Leave A Reply
                                            </h3>
                                            <p>Your email address will not be published. Required fields are marked *</p>
                                            <form id="commentform" className="comment-form">
                                                <div className="flex justify-between">
                                                    <fieldset className="name">
                                                        <input type="text" id="name" placeholder="Your name*" className="style-1" name="name" tabIndex={2} aria-required="true" required />
                                                    </fieldset>
                                                    <fieldset className="email">
                                                        <input type="email" id="email" placeholder="Email address*" className="style-1" name="email" tabIndex={2} aria-required="true" required />
                                                    </fieldset>
                                                </div>
                                                <fieldset className="message">
                                                    <textarea id="message" name="message" rows={4} placeholder="Your comment*" className="style-1 m-0" tabIndex={4} aria-required="true" required />
                                                </fieldset>
                                                <div className="btn-submit text-center">
                                                    <button type="submit">
                                                        Submit comment
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="side-bar col-md-4">
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