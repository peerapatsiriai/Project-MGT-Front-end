import Layout from "@/components/layout/Layout"
import Action3 from "@/components/sections/Action3"
import DiscoverItem3 from "@/components/sections/DiscoverItem3"
import FeaturedItem3 from "@/components/sections/FeaturedItem3"
import FlatTitle3 from "@/components/sections/FlatTitle3"
import Seller4 from "@/components/sections/Seller4"
import Seller5 from "@/components/sections/Seller5"
import TopCollections3 from "@/components/sections/TopCollections3"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <FlatTitle3 />
                <Seller4 />
                <DiscoverItem3 />
                <Seller5 />
                <FeaturedItem3 />
                <TopCollections3 />
                <Action3 />

            </Layout>
        </>
    )
}