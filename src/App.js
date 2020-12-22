import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Search from './pages/search';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Normalize />
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/" component={Home} />
          <Route>404 - Not Found</Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
