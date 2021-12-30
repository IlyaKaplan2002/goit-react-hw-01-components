import PropTypes from 'prop-types';
import React from 'react';
import StatisticsItem from './StatisticsItem';
import { StatisticsStyled } from './StatisticsStyled';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsStyled>
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(({ id, name, percent }) => (
          <StatisticsItem key={id} name={name} percent={percent} />
        ))}
      </ul>
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.any.isRequired,
      percent: PropTypes.any.isRequired,
    }),
  ),
};

export default Statistics;
