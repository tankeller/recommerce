import React from 'react';
import { Router } from '@reach/router';

import AppHeader from './components/organisms/appHeader/AppHeader';
import AppFooter from './components/organisms/appFooter/AppFooter';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Router>
        <Home path="/" />
        <Listing path="/listing/:categoryID" />
        <Article path="/article/:articleID" />
      </Router>
      <AppFooter />
    </div>
  );
}

export default App;
