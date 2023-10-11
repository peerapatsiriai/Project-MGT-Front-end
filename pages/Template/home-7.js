import Layout from "@/components/layout/Layout"
import Action8 from "@/components/sections/Action8"
import Artwork from "@/components/sections/Artwork"
import Counter from "@/components/sections/Counter"
import FeaturedItem8 from "@/components/sections/FeaturedItem8"
import FlatTitle6 from "@/components/sections/FlatTitle6"
import Seller10 from "@/components/sections/Seller10"
import Seller11 from "@/components/sections/Seller11"
import Seller12 from "@/components/sections/Seller12"
import TopCollections7 from "@/components/sections/TopCollections7"
import TopCollector2 from "@/components/sections/TopCollector2"
export default function Home() {

    return (
        <>

            <Layout headerStyle={3} footerStyle={1}  pageCls="home-7 pt-0">
                <FlatTitle6 />
                <Counter />
                <FeaturedItem8 />
                <TopCollector2 />
                <Seller10 />
                <Seller11 />
                <Seller12 />
                <Artwork />
                <Action8 />
                <TopCollections7 />
            </Layout>
        </>
    )
}