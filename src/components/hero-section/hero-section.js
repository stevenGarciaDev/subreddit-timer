import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeadlineSection,
  Headline,
  SubHeadline,
  CallToActionButton,
  DefaultSubreddit,
  HeatMapLink,
  HeatMapImage
} from './hero-section.styles';
import heatMap from './table.png';

const HeroSection = () => (
  <>
    <HeadlineSection>
      <Headline>No reactions to your reddit posts?</Headline>
      <SubHeadline>
        Great timing, great results! Find the best time to post on your subreddit.
      </SubHeadline>
      <CallToActionButton as={Link} to="/search/javascript">SHOW ME THE BEST TIME</CallToActionButton>
      <DefaultSubreddit>r/javascript</DefaultSubreddit>
    </HeadlineSection>
    <HeatMapLink to="/search/javascript">
      <HeatMapImage src={heatMap} alt="Heat Map" />
    </HeatMapLink>
  </>
);

export default HeroSection;
