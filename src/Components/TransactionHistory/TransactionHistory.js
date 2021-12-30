import PropTypes from 'prop-types';
import React from 'react';
import TransactionHistoryItem from './TransactionHistoryItem';
import { TransactionHistoryStyled } from './TransactionHistoryStyled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryStyled>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency} />
        ))}
      </tbody>
    </TransactionHistoryStyled>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.any.isRequired,
      amount: PropTypes.any.isRequired,
      currency: PropTypes.any.isRequired,
    }),
  ),
};

export default TransactionHistory;
