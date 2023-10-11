import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} pageCls="slider-animation-page">

                <div className="flat-pages-title-home7 relative">
                    <div className="themesflat-container">
                        <div className="row">
                            <div className="col-md-6 pages-title">
                                <div className="content">
                                    <h1>Join the world’s largest <br /> nFT community &amp; <br /> start collecting NFTS</h1>
                                    <p>Discover the Most Premium, Unique and Exclusive
                                        NFT Collection</p>
                                    <div className="flat-button flex">
                                        <Link href="#" className="tf-button style-1 h50 w230 mr-10">Create your first NFT <i className="icon-arrow-up-right2" /></Link>
                                        <Link href="#" className="tf-button style-1 h50 w190 active">Explore now <i className="icon-arrow-up-right2" /></Link>
                                    </div>
                                </div>
                                <div className="icon-background">
                                    <img className="absolute item1" src="/assets/images/item-background/item8.png" alt="" />
                                    <img className="absolute item2" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item3" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item4" src="/assets/images/item-background/item7.png" alt="" />
                                    <img className="absolute item6" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item7" src="/assets/images/item-background/item9.png" alt="" />
                                    <img className="absolute item8" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item9" src="/assets/images/item-background/item1.png" alt="" />
                                    <img className="absolute item10" src="/assets/images/item-background/item2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="image-right">
                                    <img className="item1" src="/assets/images/item-background/slider-animation.png" alt="" />
                                    <img className="item2" src="/assets/images/item-background/item5.png" alt="" />
                                    <img className="item3" src="/assets/images/item-background/item15.png" alt="" />
                                    <img className="item4" src="/assets/images/item-background/item16.png" alt="" />
                                    <img className="item5" src="/assets/images/item-background/item17.png" alt="" />
                                    <img className="item6" src="/assets/images/item-background/item5.png" alt="" />
                                    <img className="item7" src="/assets/images/item-background/item15.png" alt="" />
                                    <img className="item8" src="/assets/images/item-background/item2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}