import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Announcement from './pages/Announcement';

// Navigation component
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';

// Global styles
import './styles/global.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/hizmetlerimiz" element={<Services />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/duyurular" element={<Announcement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
