import Layout from "@/components/layout/Layout"
import Action5 from "@/components/sections/Action5"
import DiscoverItem5 from "@/components/sections/DiscoverItem5"
import FeaturedItem5 from "@/components/sections/FeaturedItem5"
import FeaturedItem6 from "@/components/sections/FeaturedItem6"
import FlatTitle5 from "@/components/sections/FlatTitle5"
import Seller7 from "@/components/sections/Seller7"
import Seller8 from "@/components/sections/Seller8"
import TopCollections5 from "@/components/sections/TopCollections5"
import { useEffect } from "react"
export default function Home() {
    return (
        <>
           
                <Layout headerStyle={2} footerStyle={1}>

                    <FlatTitle5 />
                    <FeaturedItem5 />
                    <Seller7 />
                    <FeaturedItem6 />
                    <Seller8 />
                    <DiscoverItem5 />
                    <TopCollections5 />
                    <Action5 />
                </Layout>
        </>
    )
}