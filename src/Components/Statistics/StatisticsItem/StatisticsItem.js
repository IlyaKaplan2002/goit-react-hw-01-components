import PropTypes from 'prop-types';
import React from 'react';
import { StatisticsItemStyled } from './StatisticsItemStyled';

const StatisticsItem = ({ name, percent }) => {
  return (
    <StatisticsItemStyled>
      <span className="label">{name}</span>
      <span className="percentage">{percent}%</span>
    </StatisticsItemStyled>
  );
};

StatisticsItem.propTypes = {
  name: PropTypes.string,
  percent: PropTypes.number,
};

export default StatisticsItem;
