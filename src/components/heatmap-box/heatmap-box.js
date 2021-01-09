import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './heatmap-box.styles';

const HeatmapBox = ({ posts }) => (
  <Box amountOfPosts={posts.length}>
    {posts.length}
  </Box>
);

HeatmapBox.defaultProps = {
  posts: [],
};

HeatmapBox.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string,
    }),
  })),
};

export default HeatmapBox;
