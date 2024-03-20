import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
          {/* Render each Route component individually */}
          <Route exact path="/" component={Home} />
          <Route exact path="/pets" component={PetsList} />
          <Route path="/pets/:id" component={PetDetails} />
          <Route path="/about" component={About} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
