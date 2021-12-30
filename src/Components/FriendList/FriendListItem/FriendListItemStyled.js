import styled from 'styled-components';

export const FriendListItemStyled = styled.li`
  border: 1px solid #000;
  display: flex;
  align-items: center;
  padding: 20px 10px;
  min-width: 300px;
  width: fit-content;

  .status {
    background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
    display: block;
    margin-right: 20px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  .avatar {
    display: block;
    margin-right: 20px;
  }

  .name {
    margin: 0;
    font-size: 25px;
    font-weight: 700;
  }
`;
