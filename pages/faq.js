import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1} pageCls="faqs-page">

                <div>
                    <div className="page-title faqs">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <h1 data-wow-delay="0s" className="wow fadeInUp heading text-center">Frequently asked questions</h1>
                                    <p data-wow-delay="0.1s" className="wow fadeInUp ">Quick answers to questions you may have. Can’t find what you're looking for? <br />
                                        Check out our <span>full documentation</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tf-section-2 wrap-accordion">
                        <div className="themesflat-container w730">
                            <div className="row">
                                <div className="col-md-12 mb-20">
                                    <div className="flat-accordion2">
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(1)}>Why are NFTs becoming popular?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(2)}>How do I keep my NFTs safe?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(3)}>What is blockchain?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 4 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(4)}>What is an NFT?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 5 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(5)}>Where can I learn more about cryptocurrencies, NFTs, and blockchain?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 6 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(6)}>What is polygon?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 7 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(7)}>What is the Ledger Nano X?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 8 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(8)}>How do I set up my Ledger?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="flat-button flex justify-center">
                                        <Link href="#" className="tf-button style-1 h50 active">Document
                                            <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.75 10.6875C15.75 10.8367 15.6907 10.9798 15.5852 11.0852C15.4798 11.1907 15.3367 11.25 15.1875 11.25H13.5V12.375H14.625C14.7742 12.375 14.9173 12.4343 15.0227 12.5398C15.1282 12.6452 15.1875 12.7883 15.1875 12.9375C15.1875 13.0867 15.1282 13.2298 15.0227 13.3352C14.9173 13.4407 14.7742 13.5 14.625 13.5H13.5V14.625C13.5 14.7742 13.4407 14.9173 13.3352 15.0227C13.2298 15.1282 13.0867 15.1875 12.9375 15.1875C12.7883 15.1875 12.6452 15.1282 12.5398 15.0227C12.4343 14.9173 12.375 14.7742 12.375 14.625V10.6875C12.375 10.5383 12.4343 10.3952 12.5398 10.2898C12.6452 10.1843 12.7883 10.125 12.9375 10.125H15.1875C15.3367 10.125 15.4798 10.1843 15.5852 10.2898C15.6907 10.3952 15.75 10.5383 15.75 10.6875ZM6.46875 12.0938C6.46875 12.6159 6.26133 13.1167 5.89212 13.4859C5.5229 13.8551 5.02215 14.0625 4.5 14.0625H3.9375V14.625C3.9375 14.7742 3.87824 14.9173 3.77275 15.0227C3.66726 15.1282 3.52418 15.1875 3.375 15.1875C3.22582 15.1875 3.08274 15.1282 2.97725 15.0227C2.87176 14.9173 2.8125 14.7742 2.8125 14.625V10.6875C2.8125 10.5383 2.87176 10.3952 2.97725 10.2898C3.08274 10.1843 3.22582 10.125 3.375 10.125H4.5C5.02215 10.125 5.5229 10.3324 5.89212 10.7016C6.26133 11.0708 6.46875 11.5716 6.46875 12.0938ZM5.34375 12.0938C5.34375 11.87 5.25486 11.6554 5.09662 11.4971C4.93839 11.3389 4.72378 11.25 4.5 11.25H3.9375V12.9375H4.5C4.72378 12.9375 4.93839 12.8486 5.09662 12.6904C5.25486 12.5321 5.34375 12.3175 5.34375 12.0938ZM11.5312 12.6562C11.5312 13.3276 11.2646 13.9714 10.7899 14.4461C10.3152 14.9208 9.67133 15.1875 9 15.1875H7.875C7.72582 15.1875 7.58274 15.1282 7.47725 15.0227C7.37176 14.9173 7.3125 14.7742 7.3125 14.625V10.6875C7.3125 10.5383 7.37176 10.3952 7.47725 10.2898C7.58274 10.1843 7.72582 10.125 7.875 10.125H9C9.67133 10.125 10.3152 10.3917 10.7899 10.8664C11.2646 11.3411 11.5312 11.9849 11.5312 12.6562ZM10.4062 12.6562C10.4062 12.2833 10.2581 11.9256 9.99437 11.6619C9.73065 11.3982 9.37296 11.25 9 11.25H8.4375V14.0625H9C9.37296 14.0625 9.73065 13.9143 9.99437 13.6506C10.2581 13.3869 10.4062 13.0292 10.4062 12.6562ZM2.8125 7.875V2.8125C2.8125 2.51413 2.93103 2.22798 3.142 2.017C3.35298 1.80603 3.63913 1.6875 3.9375 1.6875H10.6875C10.7614 1.68744 10.8346 1.70194 10.9029 1.73017C10.9711 1.7584 11.0332 1.79981 11.0855 1.85203L15.023 5.78953C15.0752 5.84181 15.1166 5.90386 15.1448 5.97215C15.1731 6.04043 15.1876 6.11361 15.1875 6.1875V7.875C15.1875 8.02418 15.1282 8.16726 15.0227 8.27275C14.9173 8.37824 14.7742 8.4375 14.625 8.4375C14.4758 8.4375 14.3327 8.37824 14.2273 8.27275C14.1218 8.16726 14.0625 8.02418 14.0625 7.875V6.75H10.6875C10.5383 6.75 10.3952 6.69074 10.2898 6.58525C10.1843 6.47976 10.125 6.33668 10.125 6.1875V2.8125H3.9375V7.875C3.9375 8.02418 3.87824 8.16726 3.77275 8.27275C3.66726 8.37824 3.52418 8.4375 3.375 8.4375C3.22582 8.4375 3.08274 8.37824 2.97725 8.27275C2.87176 8.16726 2.8125 8.02418 2.8125 7.875ZM11.25 5.625H13.2673L11.25 3.60773V5.625Z" fill="#161616" />
                                            </svg>
                                        </Link>
                                        <Link href="#" className="tf-button style-1 h50">Get in touch<i className="icon-arrow-up-right2" /></Link>
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