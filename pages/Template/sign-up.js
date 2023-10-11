import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>

                <div className="tf-section-2 pt-60 widget-box-icon">
                    <div className="themesflat-container w920">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="heading-section-1">
                                    <h2 className="tf-title pb-16">Create you account</h2>
                                    <p className="pb-40">Let’s get started with your 30 days free trial</p>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="widget-login">
                                    <form id="commentform" className="comment-form">
                                        <fieldset className="name">
                                            <label>Name *</label>
                                            <input type="text" id="name" placeholder="Your name*" name="name" tabIndex={2} aria-required="true" required />
                                        </fieldset>
                                        <fieldset className="email">
                                            <label>Email *</label>
                                            <input type="email" id="email" placeholder="mail@website.com" name="email" tabIndex={2} aria-required="true" required />
                                        </fieldset>
                                        <fieldset className="password">
                                            <label>Password *</label>
                                            <input className="password-input" type="password" id="password" placeholder="Min. 8 character" name="password" tabIndex={2} aria-required="true" required />
                                            <i className="icon-show password-addon" id="password-addon" />
                                        </fieldset>
                                        <fieldset className="password">
                                            <label>Confirm password *</label>
                                            <input className="password-input" type="password" id="password" placeholder="Confirm password " name="password" tabIndex={2} aria-required="true" required />
                                            <i className="icon-show password-addon" id="password-addon" />
                                            <div className="widget-category-checkbox">
                                                <label>I agree to all Term, Privacy Polic and fees
                                                    <input type="checkbox" />
                                                    <span className="btn-checkbox" />
                                                </label>
                                            </div>
                                        </fieldset>
                                        <div className="btn-submit mb-30">
                                            <Link href="/login" className="tf-button style-1 h50 w-100" type="submit">Sign up<i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </form>
                                    <div className="other">or continue</div>
                                    <div className="login-other">
                                        <Link href="#" className="login-other-item">
                                            <img src="/assets/images/google.png" alt="" />
                                            <span>Login with google</span>
                                        </Link>
                                        <Link href="#" className="login-other-item">
                                            <img src="/assets/images/facebook.png" alt="" />
                                            <span>Login with facebook</span>
                                        </Link>
                                        <Link href="#" className="login-other-item">
                                            <img src="/assets/images/apple.png" alt="" />
                                            <span>Login with apple</span>
                                        </Link>
                                    </div>
                                    <div className="no-account">Already have an account?  <Link href="/login" className="tf-color">Log in</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}