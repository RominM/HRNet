import React from 'react';
import { PropTypes } from 'prop-types';

const Title = (props) => {
  return (
    <div className="title">
      <h2>{props.title}</h2>
    </div>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
};
