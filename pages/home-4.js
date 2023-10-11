import Layout from "@/components/layout/Layout"
import Action4 from "@/components/sections/Action4"
import CreateSell3 from "@/components/sections/CreateSell3"
import DiscoverItem4 from "@/components/sections/DiscoverItem4"
import FeaturedItem4 from "@/components/sections/FeaturedItem4"
import FlatTitle4 from "@/components/sections/FlatTitle4"
import Seller6 from "@/components/sections/Seller6"
import TopCollections4 from "@/components/sections/TopCollections4"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <FlatTitle4 />
                <CreateSell3 />
                <FeaturedItem4 />
                <Seller6 />
                <DiscoverItem4 />
                <TopCollections4 />
                <Action4 />
            </Layout>
        </>
    )
}