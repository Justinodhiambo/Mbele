import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import WhyUsPage from './components/WhyUsPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <nav className="navbar flex justify-between items-center bg-white py-2 px-4 shadow-md">
          <div className="logo flex items-center">
            <img src="assets/MBELE LOGO.jpeg" alt="Mbele Logo" className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">MBELE</span>
          </div>
          <div className="nav-links flex flex-1 justify-center space-x-6">
            <Link to="/" className="text-black font-medium hover:text-blue-600 text-center px-3">Home</Link>
            <Link to="/services" className="text-black font-medium hover:text-blue-600 text-center px-3">Services</Link>
            <Link to="/about" className="text-black font-medium hover:text-blue-600 text-center px-3">About Us</Link>
            <Link to="/why" className="text-black font-medium hover:text-blue-600 text-center px-3">Why Us</Link>
          </div>
          <div className="cta flex items-center space-x-4">
            <Link to="/login" className="text-black font-medium">Log in</Link>
            <Link to="/join-waitlist" className="border border-blue-600 text-blue-600 font-bold py-1 px-4 rounded hover:bg-blue-600 hover:text-white">Join Waitlist</Link>
            <button className="text-black font-medium">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </nav>

        <div className="main-content flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/why" element={<WhyUsPage />} />
          </Routes>
        </div>

        <footer className="bg-blue-800 text-white py-2">
          <div className="container mx-auto text-center">
            <p className="font-bold">&copy; 2024 MBELE. All rights reserved.</p>
            <nav className="mt-2">
              <a href="#privacy" className="text-gray-400 hover:text-white px-2">Privacy Policy</a>
              <a href="#terms" className="text-gray-400 hover:text-white px-2">Terms of Service</a>
              <a href="#contact" className="text-gray-400 hover:text-white px-2">Contact Us</a>
            </nav>
            <div className="social-icons mt-2">
              <a href="https://www.linkedin.com" target="_blank" className="text-gray-400 hover:text-white mx-2">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com" target="_blank" className="text-gray-400 hover:text-white mx-2">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" className="text-gray-400 hover:text-white mx-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.twitter.com" target="_blank" className="text-gray-400 hover:text-white mx-2">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
