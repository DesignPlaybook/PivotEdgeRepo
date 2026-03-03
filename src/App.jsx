import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Services from "./components/Servicesection/Services"
import Domain from "./components/Domain/Domain"
import Insights from "./components/Insights/Insights"
import Contact from "./components/Conatct.jsx/Contact"
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
        <Route path="/services" element={<Services/>} />
        <Route path="/domains" element={<Domain/>} />
        <Route path="/insights" element={<Insights/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
</BrowserRouter>
    </>
  )
}

export default App
