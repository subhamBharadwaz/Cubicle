import React, { useEffect } from 'react';
import { Transaction } from './Transaction';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactions } from '../../actions/expenseAction';
import { deleteTransaction } from '../../actions/expenseAction';

// Style
import styled from 'styled-components';

//  icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const TransactionList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, []);
  const { transactions } = useSelector((state) => state.expenses);
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
            <button
              onClick={() => dispatch(deleteTransaction(transaction._id))}
              className='expense-delete-btn'
            >
              <FontAwesomeIcon
                icon={faTrash}
                className='icon expense-delete-icon'
              />
            </button>
          </>
        ))}
      </ul>
    </TransactionListStyle>
  );
};

const TransactionListStyle = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button {
    border: none;
    background: none;
    outline: none;
  }
  .icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    flex: 1;
    cursor: pointer;
  }
`;
