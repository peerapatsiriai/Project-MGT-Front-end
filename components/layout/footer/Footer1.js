import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer id="footer">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-content flex flex-grow">
                                <div className="widget-logo flex-grow">
                                    <div className="logo-footer" id="logo-footer">
                                        <Link href="/">
                                            <img id="logo_footer" src="/assets/images/logo/logo.png" data-retina="assets/images/logo/logo@2x.png" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="widget widget-menu style-1">
                                    <h5 className="title-widget">Marketplace</h5>
                                    <ul>
                                        <li><Link href="#">All NFTs</Link></li>
                                        <li><Link href="#">Virtual worlds</Link></li>
                                        <li><Link href="#">Domain names</Link></li>
                                        <li><Link href="#">Photography</Link></li>
                                        <li><Link href="#">Digital art</Link></li>
                                        <li><Link href="#">Music</Link></li>
                                    </ul>
                                </div>
                                <div className="widget widget-menu style-2">
                                    <h5 className="title-widget">Resource</h5>
                                    <ul>
                                        <li><Link href="#">Help center</Link></li>
                                        <li><Link href="#">Platform status</Link></li>
                                        <li><Link href="#">Partners</Link></li>
                                        <li><Link href="#">Discount community</Link></li>
                                        <li><Link href="#">Live auctions</Link></li>
                                        <li><Link href="#">Discover</Link></li>
                                    </ul>
                                </div>
                                <div className="widget widget-menu style-3">
                                    <h5 className="title-widget">Account</h5>
                                    <ul>
                                        <li><Link href="#">Authors</Link></li>
                                        <li><Link href="#">My Collection</Link></li>
                                        <li><Link href="#">Author Profile</Link></li>
                                        <li><Link href="#">Go to dashboard</Link></li>
                                        <li><Link href="#">Collection</Link></li>
                                        <li><Link href="#">Create Collection</Link></li>
                                    </ul>
                                </div>
                                <div className="widget-last">
                                    <div className="widget-menu style-4">
                                        <h5 className="title-widget">Company</h5>
                                        <ul>
                                            <li><Link href="#">Help center</Link></li>
                                            <li><Link href="#">Platform status</Link></li>
                                        </ul>
                                    </div>
                                    <h5 className="title-widget mt-30">Join the community</h5>
                                    <div className="widget-social">
                                        <ul className="flex">
                                            <li><Link href="#" className="icon-facebook" /></li>
                                            <li><Link href="#" className="icon-twitter" /></li>
                                            <li><Link href="#" className="icon-vt" /></li>
                                            <li><Link href="#" className="icon-tiktok" /></li>
                                            <li><Link href="#" className="icon-youtube" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} OpeN9 - Made By Themesflat</p>
                        <ul className="flex">
                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
