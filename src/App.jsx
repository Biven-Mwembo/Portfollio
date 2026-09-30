import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Import Layout Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Import Page Components
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Components/Portfolio';
import Education from './Pages/Education';
import Contact from './Pages/Contact';

/**
 * ScrollToTop helper component
 * Ensures that whenever the user navigates between routes,
 * the window automatically scrolls back to the very top (0, 0).
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      {/* Resets scroll position to top on route navigation */}
      <ScrollToTop />
      
      <div className="min-h-screen bg-[#f8f8f8] text-zinc-900 selection:bg-zinc-950 selection:text-white flex flex-col justify-between">
        {/* Fixed Top Navigation Bar */}
        <Navbar />

        {/* Main Route Views */}
        <main className="pt-14 sm:pt-15">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education/>} />
             <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
               <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Shared Footer */}
        <Footer />
      </div>
    </Router>
  );
}