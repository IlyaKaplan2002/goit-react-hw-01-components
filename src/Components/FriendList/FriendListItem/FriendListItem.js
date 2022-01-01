import PropTypes from 'prop-types';
import React from 'react';
import { FriendListItemStyled } from './FriendListItemStyled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendListItemStyled isOnline={isOnline}>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </FriendListItemStyled>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
