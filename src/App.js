import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './common components/Header';
import Footer from './common components/Footer';
import HomePage from './page/HomePage';
import AboutUs from './page/AboutUs';
import { AnimatePresence } from "framer-motion";
import Loader from './common components/Loader';
import Contact from '../src/page/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>{isLoading ? (
      <Loader />
    ) : (
      <BrowserRouter>
          <Header />
          <AnimatePresence mode='wait'>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/Contact' element={<Contact />} />


              {/* Add more routes as needed */}
            </Routes>
          </AnimatePresence>
          <Footer />
        
      </BrowserRouter>
    )}
    </>
  );
}

export default App;
