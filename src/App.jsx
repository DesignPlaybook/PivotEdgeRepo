import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Domain from "./pages/Domain"
import Insights from "./pages/Insights"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"



function App() {


  return (
    <>
   
<BrowserRouter>
    <Navbar/>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/domains" element={<Domain />} />
        <Route path="/insights" element={<Insights/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
</BrowserRouter>
    </>
  )
}

export default App
