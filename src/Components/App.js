import React from 'react';
import Profile from './Profile';
import user from '../data/profile/user.json';
import Statistics from './Statistics';
import statData from '../data/statistics/statistics.json';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends/friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../data/transactions/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statData} />
      <Statistics stats={statData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
