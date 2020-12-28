import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/hero-section';

const PageInfoHeader = styled.h2`
  color: black;
  font-family: 'Bitter', sans-serif;
  font-size: 24px;
`;

const Home = () => (
  <div>
    <HeroSection />
    <div>
      <PageInfoHeader>How it works</PageInfoHeader>
    </div>
    <div>
      <PageInfoHeader>About</PageInfoHeader>
    </div>
  </div>
);

export default Home;
