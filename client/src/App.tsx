import AboutUs from "./components/about-us"
import Banner from "./components/banner"
import Features from "./components/features"
import Footer from "./components/footer"
import Header from "./components/header"
import Navbar from "./components/navbar"

const App = () => {
  return (
    <main className="container mx-auto">
      <Navbar />
      <Header />
      <AboutUs />
      <Features />
      <Banner />
      <Footer />
    </main>
  )
}

export default App