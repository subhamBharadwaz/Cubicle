import React from 'react';
// Style
import styled from 'styled-components';

// Import components
import { Header } from '../components/expense/Header';
import { Balance } from '../components/expense/Balance';
import { IncomeExpense } from '../components/expense/IncomeExpense';
import { TransactionList } from '../components/expense/TransactionList';
import { AddTransaction } from '../components/expense/AddTransaction';

const Expense = () => {
  return (
    <ExpenseStyle>
      <div className='main'>
        <Header />

        <div className='container'>
          <Balance />
          <IncomeExpense />

          <TransactionList />

          <AddTransaction />
        </div>
      </div>
    </ExpenseStyle>
  );
};

const ExpenseStyle = styled.div`
  .main {
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
  }

  .container {
    margin: 30px auto;
    width: 350px;
  }
`;

export default Expense;
