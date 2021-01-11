/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {
  Grid,
  HoursContainer,
  Hour,
  DaysContainer,
  Day,
  MapContainer,
} from './heatmap.styles';
import HeatmapBox from '../heatmap-box';
import UsertimeZone from '../user-timezone';

const Heatmap = ({ posts, selectPosts }) => {
  let heatmap = [];

  const initializeEmptyHeatmap = () => {
    const daysInAWeek = 7;
    const hoursInDayForPosting = 24;

    return Array(daysInAWeek)
      .fill()
      .map(() => Array(hoursInDayForPosting).fill().map(() => []));
  };

  const createHeatmap = () => {
    const map = initializeEmptyHeatmap();

    posts.forEach((p) => {
      const milisecondsPerSecond = 1000;
      const milisecondsSince1970 = p.data.created_utc * milisecondsPerSecond;
      const dateOfPost = new Date(milisecondsSince1970);

      const dayIndexToStorePost = dateOfPost.getDay();
      const timeSectionIndexToStorePostAt = dateOfPost.getHours();

      map[dayIndexToStorePost][timeSectionIndexToStorePostAt].push(p);
    });

    return map;
  };

  heatmap = createHeatmap();
  return (
    <div>
      <Grid data-testid="heatmap-grid">
        <HoursContainer>
          <Hour>12:00am</Hour>
          <Hour>2:00am</Hour>
          <Hour>4:00am</Hour>
          <Hour>6:00am</Hour>
          <Hour>8:00am</Hour>
          <Hour>10:00am</Hour>
          <Hour>12:00pm</Hour>
          <Hour>2:00pm</Hour>
          <Hour>4:00pm</Hour>
          <Hour>6:00pm</Hour>
          <Hour>8:00pm</Hour>
          <Hour>10:00pm</Hour>
        </HoursContainer>
        <DaysContainer>
          <Day>Sunday</Day>
          <Day>Monday</Day>
          <Day>Tuesday</Day>
          <Day>Wednesday</Day>
          <Day>Thursday</Day>
          <Day>Friday</Day>
          <Day>Saturday</Day>
        </DaysContainer>
        <MapContainer>
          {heatmap.length > 0 && heatmap.map((day) => (
            day.map((postsPerHour) => (
              <HeatmapBox
                key={uuidv4()}
                posts={postsPerHour}
                setSectionOfPostsToDisplay={selectPosts}
              />
            ))
          ))}
        </MapContainer>
      </Grid>
      <UsertimeZone />
    </div>
  );
};

Heatmap.defaultProps = {
  posts: [],
  selectPosts: () => {},
};

Heatmap.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.shape({
      created_utc: PropTypes.number,
    }),
  })),
  selectPosts: PropTypes.func,
};

export default Heatmap;
