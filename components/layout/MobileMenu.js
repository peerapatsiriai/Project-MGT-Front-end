import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu() {
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
            <nav id="mobile-main-nav" className="mobile-main-nav">
                <ul id="menu-mobile-menu" className="menu">
                    <li className="menu-item menu-item-has-children-mobile current-menu-item" onClick={() => handleToggle(1)}>
                        <a className="item-menu-mobile">Home</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                            <li className="menu-item current-item"><Link href="/">Home 1</Link></li>
                            <li className="menu-item"><Link href="/home-2">Home 2</Link></li>
                            <li className="menu-item"><Link href="/home-3">Home 3</Link></li>
                            <li className="menu-item"><Link href="/home-4">Home 4</Link></li>
                            <li className="menu-item"><Link href="/home-5">Home 5</Link></li>
                            <li className="menu-item"><Link href="/home-6">Home 6</Link></li>
                            <li className="menu-item"><Link href="/home-7">Home 7</Link></li>
                            <li className="menu-item"><Link href="/slider-3d">Slider 3d</Link></li>
                            <li className="menu-item"><Link href="/slider-scroll">Slider Scroll</Link></li>
                            <li className="menu-item"><Link href="/slider-animation">Slider Animation</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <Link className="item-menu-mobile" href="/about-us">About us</Link>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile" onClick={() => handleToggle(2)}>
                        <a className="item-menu-mobile">Explore</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link href="/explore-1">Explore Style 1</Link></li>
                            <li className="menu-item"><Link href="/explore-2">Explore Style 2</Link></li>
                            <li className="menu-item"><Link href="/explore-3">Explore Style 3</Link></li>
                            <li className="menu-item"><Link href="/explore-4">Explore Style 4</Link></li>
                            <li className="menu-item"><Link href="/product-detail-1">Product Detail 1</Link></li>
                            <li className="menu-item"><Link href="/product-detail-2">Product Detail 2</Link></li>
                            <li className="menu-item"><Link href="/product-detail-3">Product Detail 3</Link></li>
                            <li className="menu-item"><Link href="/ranking">Ranking</Link></li>
                            <li className="menu-item"><Link href="/upcoming">Upcoming Projects</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile" onClick={() => handleToggle(3)}>
                        <a className="item-menu-mobile">Pages</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link href="/market">Market</Link></li>
                            <li className="menu-item"><Link href="/market-create">Create</Link></li>
                            <li className="menu-item"><Link href="/market-active-bid">Active Bid</Link></li>
                            <li className="menu-item"><Link href="/market-explore">Explore</Link></li>
                            <li className="menu-item"><Link href="/market-collection">My collection</Link></li>
                            <li className="menu-item"><Link href="/market-favorite">My favorite</Link></li>
                            <li className="menu-item"><Link href="/market-wallet">Wallet</Link></li>
                            <li className="menu-item"><Link href="/market-history">History</Link></li>
                            <li className="menu-item"><Link href="/market">Settings</Link></li>
                            <li className="menu-item"><Link href="/author-1">Authors Style 1</Link></li>
                            <li className="menu-item"><Link href="/author-2">Authors Style 2</Link></li>
                            <li className="menu-item"><Link href="/terms-condition">Terms &amp; Condition</Link></li>
                            <li className="menu-item"><Link href="/no-result">No Result</Link></li>
                            <li className="menu-item"><Link href="/faq">FAQs</Link></li>
                            <li className="menu-item"><Link href="/coming-soon">Coming Soon</Link></li>
                            <li className="menu-item"><Link href="/maintenance">Maintenance</Link></li>
                            <li className="menu-item"><Link href="/404">404</Link></li>
                            <li className="menu-item"><Link href="/login">Login</Link></li>
                            <li className="menu-item"><Link href="/sign-up">Sign up</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item menu-item-has-children-mobile" onClick={() => handleToggle(4)}>
                        <a className="item-menu-mobile">Blog</a>
                        <ul className="sub-menu-mobile" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                            <li className="menu-item"><Link href="/blog-grid">Blog Grid</Link></li>
                            <li className="menu-item"><Link href="/blog-grid-1">Blog Grid 1</Link></li>
                            <li className="menu-item"><Link href="/blog-list">Blog List</Link></li>
                            <li className="menu-item"><Link href="/blog-list-1">Blog List 1</Link></li>
                            <li className="menu-item"><Link href="/blog-detail">Blog Details</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item">
                        <Link className="item-menu-mobile" href="/contact-us">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
