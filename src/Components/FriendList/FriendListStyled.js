import styled from 'styled-components';

export const FriendListStyled = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  li:not(:last-child) {
    margin-bottom: 10px;
  }
`;
