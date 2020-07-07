import React from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'emotion-theming';

import theme from './assets/theme';

import GlobalStyle from './GlobalStyle';
import AppHeader from './components/organisms/appHeader/AppHeader';
import AppFooter from './components/organisms/appFooter/AppFooter';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Article from './pages/Article';
import Account from './pages/Account';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppHeader />
        <Router primary={false}>
          <Home path="/" />
          <Listing path="/category/:categoryID" />
          <Article path="/article/:articleID" />
          <Register path="/register" />
          <Account path="/account/:userID" />
        </Router>
        <AppFooter />
      </ThemeProvider>
    </div>
  );
}

export default App;
