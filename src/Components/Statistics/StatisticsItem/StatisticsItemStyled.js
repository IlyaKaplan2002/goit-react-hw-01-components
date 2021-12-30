import randomColor from 'randomcolor';
import styled from 'styled-components';

export const StatisticsItemStyled = styled.li`
  background-color: ${() => randomColor()};
  color: white;
  padding: 10px;

  .label {
    display: block;
    margin-bottom: 10px;
  }
`;
