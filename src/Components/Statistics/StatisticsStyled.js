import styled from 'styled-components';

export const StatisticsStyled = styled.section`
  width: fit-content;
  margin: auto;
  border: 1px solid black;
  margin-bottom: 30px;

  .title {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: gray;
  }

  .stat-list {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
  }
`;
