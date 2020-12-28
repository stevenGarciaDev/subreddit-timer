import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeadlineSection,
  Headline,
  SubHeadline,
  CallToActionButton,
  DefaultSubreddit,
  HeatMapLink,
  HeatMapImage,
} from './hero-section.styles';
import heatMap from './table.png';
import DEFAULT_SUBREDDIT from '../../shared/defaultSubreddit';

const HeroSection = () => (
  <>
    <HeadlineSection>
      <Headline>No reactions to your reddit posts?</Headline>
      <SubHeadline>
        Great timing, great results! Find the best time to post on your subreddit.
      </SubHeadline>
      <CallToActionButton as={Link} to={`/search/${DEFAULT_SUBREDDIT}`}>SHOW ME THE BEST TIME</CallToActionButton>
      <DefaultSubreddit>{`r/${DEFAULT_SUBREDDIT}`}</DefaultSubreddit>
    </HeadlineSection>
    <HeatMapLink to={`/search/${DEFAULT_SUBREDDIT}`}>
      <HeatMapImage src={heatMap} alt="Heat Map" />
    </HeatMapLink>
  </>
);

export default HeroSection;
