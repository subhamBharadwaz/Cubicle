import React from 'react';
// Utils
import { numberWithCommas } from '../../utils/format';
import { deleteTransaction } from '../../actions/expenseAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// Style
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

export const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    dispatch(deleteTransaction(transaction._id));
  };

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <TransactionStyle className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>
        {sign}₹{numberWithCommas(Math.abs(transaction.amount))}
      </span>
      <button onClick={deleteHandler} className='expense-delete-btn'>
        <FontAwesomeIcon icon={faTrash} className='icon expense-delete-icon' />
      </button>
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
