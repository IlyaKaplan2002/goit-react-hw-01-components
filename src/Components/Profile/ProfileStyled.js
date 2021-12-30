import styled from 'styled-components';

export const ProfileStyled = styled.div`
  border: 1px solid black;
  width: fit-content;
  position: relative;
  padding-top: 20px;
  margin: auto;
  margin-bottom: 30px;

  p {
    margin: 0;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
  }

  .avatar {
    display: block;
    width: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  .name {
    font-weight: 800;
    margin-bottom: 10px;
  }

  .tag {
    margin-bottom: 10px;
    color: grey;
  }

  .location {
    color: grey;
  }

  .stats {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .stats > li {
    padding: 10px;
    border: 1px solid grey;
    background-color: #e7ecf2;
  }

  .label {
    display: block;
    font-size: 12px;
    color: grey;
  }
`;
