import Link from "next/link"
export default function Home() {

    return (
        <>


            <div id="wrapper">
                <div id="page">
                    <div className="section-single-page Maintenance">
                        <Link href="/">
                            <img src="/assets/images/logo/logo.png" alt="" />
                        </Link>
                        <div className="content">
                            <div className="widget-bg-line">
                                <div className="wraper">
                                    <div className="bg-grid-line y top">
                                        <div className="bg-line" />
                                    </div>
                                    <div className="bg-grid-line x left">
                                        <div className="bg-line" />
                                    </div>
                                    <div className="bg-grid-line y bottom">
                                        <div className="bg-line" />
                                    </div>
                                    <div className="bg-grid-line x right">
                                        <div className="bg-line" />
                                    </div>
                                </div>
                            </div>
                            <div className="status">Website Is Under</div>
                            <h1>Maintenance</h1>
                            <p>We’re sorry our staff is still working on the issue for better experience</p>
                            <div className="box-button d-flex justify-content-center">
                                <Link href="/market" className="tf-button style-1 h50 active mr-3">My dashboard<i className="icon-arrow-up-right2" /></Link>
                                <Link href="/" className="tf-button style-1 h50">Back to home<i className="icon-arrow-up-right2" /></Link>
                            </div>
                        </div>
                        <div className="widget-social">
                            <ul className="flex justify-center">
                                <li><Link href="#" className="icon-facebook" /></li>
                                <li><Link href="#" className="icon-twitter" /></li>
                                <li><Link href="#" className="icon-vt" /></li>
                                <li><Link href="#" className="icon-tiktok" /></li>
                                <li><Link href="#" className="icon-youtube" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* /#page */}
            </div>

        </>
    )
}