import BestSeller from "./BestSeller"
import CategorySection from "./CategorySection"
import CollectionSection from "./CollectionSection"
import HeroSection from "./HeroSection"
import NewsfeedSection from "./NewsfeedSection"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <CategorySection/>
      <CollectionSection/>
      <BestSeller/>
      <NewsfeedSection/>
    </div>
  )
}

export default Home
