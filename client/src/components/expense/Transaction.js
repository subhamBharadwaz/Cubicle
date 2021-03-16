import React from 'react';

import { numberWithCommas } from '../../utils/format';

// Style
import styled from 'styled-components';

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <TransactionStyle className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>
        {sign}₹{numberWithCommas(Math.abs(transaction.amount))}
      </span>
    </TransactionStyle>
  );
};

const TransactionStyle = styled.li`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: 333;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  width: 100%;
  margin-right: 1rem;
`;
