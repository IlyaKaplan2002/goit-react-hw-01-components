import PropTypes from 'prop-types';
import React from 'react';
import FriendListItem from './FriendListItem';
import { FriendListStyled } from './FriendListStyled';

const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.any.isRequired,
      name: PropTypes.any.isRequired,
      isOnline: PropTypes.any.isRequired,
    }),
  ),
};

export default FriendList;
