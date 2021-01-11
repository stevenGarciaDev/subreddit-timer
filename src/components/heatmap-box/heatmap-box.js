import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './heatmap-box.styles';

const HeatmapBox = ({ posts, setSectionOfPostsToDisplay }) => (
  <Box amountOfPosts={posts.length} onClick={() => setSectionOfPostsToDisplay(posts)}>
    {posts.length}
  </Box>
);

HeatmapBox.defaultProps = {
  posts: [],
  setSectionOfPostsToDisplay: () => {},
};

HeatmapBox.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string,
    }),
  })),
  setSectionOfPostsToDisplay: PropTypes.func,
};

export default HeatmapBox;
