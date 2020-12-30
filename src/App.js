import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/header';
import Footer from './components/footer';
import Home from './pages/home/home';
import Search from './pages/search/search';
import theme from './theme';

const Main = styled.div`
  min-height: calc((100% - 100px) - 100px);
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Navbar />
      <Main>
        <Switch>
          <Route path="/search/:subreddit" component={Search} />
          <Route path="/" component={Home} />
          <Route>404 - Not Found</Route>
        </Switch>
      </Main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
