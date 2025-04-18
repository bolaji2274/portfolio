import LogoSection from "./sections/LogoSection"
import Navbar from "./components/Navbar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowCaseSection from "./sections/ShowCaseSection"
import ExperienceSection from "./sections/ExperienceSection"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
    </>
  )
}

export default App
