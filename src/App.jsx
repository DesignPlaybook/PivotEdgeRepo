import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Servicesection/Services";
import Domain from "./components/Domain/Domain";
import Insights from "./components/Insights/Insights";

import Footer from "./components/Footer";
import DisclaimerPage from "./components/DisclaimerPage/DisclaimerPage";
import PoliciesPage from "./components/PoliciesPage/PoliciesPage";
import TermsPage from "./components/TermsPage/TermsPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactPage from "./components/Conatct.jsx/ContactMap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        {/* Pages */}

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/domains" element={<Domain />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
