import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
// Actions
import { getTransactions } from '../../actions/expenseAction';

// Components
import { Transaction } from './Transaction';

// Style
import styled from 'styled-components';

//  icons

export const TransactionList = () => {
  const { transactions } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <TransactionListStyle>
      <h3>History</h3>

      <ul className='list'>
        {transactions.map((transaction) => (
          <>
            <Transaction
              key={transaction._id}
              className='lis'
              transaction={transaction}
            />
          </>
        ))}
      </ul>
    </TransactionListStyle>
  );
};

const TransactionListStyle = styled.div`
  h3 {
    color: #fff;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`;
