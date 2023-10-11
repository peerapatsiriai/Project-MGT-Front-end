import Layout from "@/components/layout/Layout"

import Action1 from "@/components/sections/Action1"
import CreateSell1 from "@/components/sections/CreateSell1"
import DiscoverItem2 from "@/components/sections/DiscoverItem2"
import FeaturedItem1 from "@/components/sections/FeaturedItem1"
import FlatTitle1 from "@/components/sections/FlatTitle1"
import TopCollections from "@/components/sections/TopCollections1"
import TopCollector1 from "@/components/sections/TopCollector1"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} pageCls="home-1">
                <FlatTitle1 />
                <DiscoverItem2 />
                {/* <TopCollector1 />
                <TopCollections1 />
                <CreateSell1 /> */}
                {/* <Action1 /> */}
            </Layout>
        </>
    )
}