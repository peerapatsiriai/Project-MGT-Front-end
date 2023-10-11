import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} pageCls="contact-us-page relative">

                <div>
                    <div className="flat-title-page">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="heading text-center">Get In Touch</h1>
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
                    <div className="tf-section-2 contact-us">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="widget-gg-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97101.88872869895!2d-74.22688511715344!3d40.487336736141906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1689125037376!5m2!1svi!2s" width="100%" height={460} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 widget-box-icon">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-20">Information</h2>
                                        <p className="pb-40">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/box-icon/address.png" alt="" />
                                        <div className="title"><Link href="#">Office address</Link></div>
                                        <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/box-icon/email.png" alt="" />
                                        <div className="title"><Link href="#">Email</Link></div>
                                        <p>open9@support.com
                                            open9vietnam@support.com</p>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                                    <div className="box-icon-item">
                                        <img src="/assets/images/box-icon/phone.png" alt="" />
                                        <div className="title"><Link href="#">Phone number</Link></div>
                                        <p>(316) 555-0116 <br />
                                            (219) 555-0114</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 widget-box-icon">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-20">Contact us</h2>
                                        <p className="pb-40">Have A Question? Need Help? Don't Hesitate, Drop Us A Line</p>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <form id="commentform" className="comment-form">
                                        <div className="flex gap30">
                                            <fieldset className="name">
                                                <input className="style-1" type="text" id="name" placeholder="Your name*" name="name" tabIndex={2} aria-required="true" required />
                                            </fieldset>
                                            <fieldset className="email">
                                                <input className="style-1" type="email" id="email" placeholder="Email address*" name="email" tabIndex={2} aria-required="true" required />
                                            </fieldset>
                                            <fieldset className="subject">
                                                <input className="style-1" type="text" id="subject" placeholder="Subject" name="subject" tabIndex={2} aria-required="true" required />
                                            </fieldset>
                                        </div>
                                        <fieldset className="message">
                                            <textarea className="style-1" id="message" name="message" rows={4} placeholder="Your message*" tabIndex={4} aria-required="true" required />
                                        </fieldset>
                                        <div className="btn-submit">
                                            <button className="tf-button style-1" type="submit">Send message <i className="icon-arrow-up-right2" /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}