import BestSeller from "./BestSeller"
import CategorySection from "./CategorySection"
import CollectionSection from "./CollectionSection"
import HeroSection from "./HeroSection"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <CategorySection/>
      <CollectionSection/>
      <BestSeller/>
    </div>
  )
}

export default Home
