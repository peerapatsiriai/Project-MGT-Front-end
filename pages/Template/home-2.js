import Layout from "@/components/layout/Layout"
import Action2 from "@/components/sections/Action2"
import CreateSell2 from "@/components/sections/CreateSell2"
import DiscoverItem2 from "@/components/sections/DiscoverItem2"
import FeaturedItem2 from "@/components/sections/FeaturedItem2"
import FlatTitle2 from "@/components/sections/FlatTitle2"
import Seller2 from "@/components/sections/Seller2"
import Seller3 from "@/components/sections/Seller3"
import TopCollections2 from "@/components/sections/TopCollections2"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <FlatTitle2 />
                <Seller2 />
                <FeaturedItem2 />
                <CreateSell2 />
                <Seller3 />
                <TopCollections2 />
                <Action2 />
                <DiscoverItem2 />
            </Layout>
        </>
    )
}