import React from 'react';
import {
  Container,
  InfoContainer,
  PageInfoHeader,
  List,
  ListItem,
  Paragraph,
  InfoLink,
} from './info-section.styles';

const InfoSection = () => (
  <Container>
    <InfoContainer id="how-it-works">
      <PageInfoHeader>How it works</PageInfoHeader>
      <List>
        <ListItem>We find the 500 top posts from the past year for a subreddit.</ListItem>
        <ListItem>
          The data is visualized in a heatmap grouped by weekday and hour of the day.
        </ListItem>
        <ListItem>See immediately when to submit your reddit post.</ListItem>
      </List>
    </InfoContainer>
    <InfoContainer>
      <PageInfoHeader id="about">About</PageInfoHeader>
      <Paragraph>
        This app was created during a course on
        {' '}
        <InfoLink as="a" target="_blank" href="https://ooloo.io">ooloo.io</InfoLink>
        {' '}
        with the goal to implement
        a pixel-perfect real-world application with professional workflows and tools like
        Kanban, ClickUp, Zeplin, GitHub, pull requests, and code reviews.
        {' '}
        <InfoLink as="a" target="_blank" href="https://ooloo.io/employers">Click here for more information</InfoLink>
      </Paragraph>
    </InfoContainer>
  </Container>
);

export default InfoSection;
