import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PetsList from './components/PetsList';
import PetDetails from './components/PetDetails';
import About from './components/About';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes> {/* Wrap Route components with Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<PetsList />} />
            <Route path="/pets/:id" element={<PetDetails />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
