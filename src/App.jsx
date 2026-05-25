import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ═════════════════ LIGHT VERSION IMPORTS ═════════════════ */

// import Home from "./components/Home/Home2";
// import About from "./components/About/About";
// import Services from "./components/Servicesection/Services";
// import Domain from "./components/Domain/Domain";
// import ContactPage from "./components/Contact/ContactMap.jsx";
// import Insights from "./components/Insights/Insights.jsx";

/* ═════════════════ DARK VERSION IMPORTS ═════════════════ */

// import Home from "./components/Home/HomeDark";
// import About from "./components/About/AboutDark";
import Services from "./components/Servicesection/ServicesDark";
// import Domain from "./components/Domain/DomainDark";
import ContactPage from "./components/Contact/ContactMapDark.jsx";
// import Insights from "./components/Insights/InsightsDark.jsx";

/* ═════════════════ KONFERRY LIKE ═════════════════ */

import Home from "./components/Home/Home2.jsx";
import About from "./components/About/AboutDark2";
// import Services from "./components/Servicesection/ServicesDark2";
import Domain from "./components/Domain/DomainDark2";
// import ContactPage from "./components/Contact/ContactMapDark.jsx";
import Insights from "./components/Insights/InsightsDark2.jsx";

/* ═════════════════ LEGAL PAGES OG IMPORTS ═════════════════ */

import DisclaimerPage from "./components/DisclaimerPage/DisclaimerPageOG";
import PoliciesPage from "./components/PoliciesPage/PoliciesPageOG";
import TermsPage from "./components/TermsPage/TermsOG";

/* ═════════════════ LEGAL PAGES DARK/LIGHT IMPORTS ═════════════════ */

// import DisclaimerPage from "./components/DisclaimerPage/DisclaimerPage";
// import PoliciesPage from "./components/PoliciesPage/PoliciesPage";
// import TermsPage from "./components/TermsPage/TermsPage";

import ScrollToTop from "./components/ScrollToTop";
import PivoEdgePartners from "./components/PivotEdgePartners";

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
          <Route path="/PivoEdgePartners" element={<PivoEdgePartners />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
