// import React from 'react';
// // Style
// import styled from 'styled-components';

// // Import components
// import { Header } from '../components/expense/Header';
// import { Balance } from '../components/expense/Balance';
// import { IncomeExpense } from '../components/expense/IncomeExpense';
// import { TransactionList } from '../components/expense/TransactionList';
// import { AddTransaction } from '../components/expense/AddTransaction';

// const Expense = () => {
//   return (
//     <ExpenseStyle>
//       <div className='main'>
//         <Header />

//         <div className='container'>
//           <Balance />
//           <IncomeExpense />

//           <TransactionList />

//           <AddTransaction />
//         </div>
//       </div>
//     </ExpenseStyle>
//   );
// };

// const ExpenseStyle = styled.div`
//   background: rgb(59, 62, 227);
//   background: linear-gradient(
//     21deg,
//     rgba(59, 62, 227, 1) 2%,
//     rgba(76, 158, 255, 1) 89%
//   );
//   .main {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     min-height: 100vh;
//     margin: 0;
//   }

//   .container {
//     margin: 30px auto;
//     width: 350px;
//   }
// `;

// export default Expense;

import React from "react";
// Style
import styled from "styled-components";

import { AddTransaction } from "../components/expense/AddTransaction";
import { Balance } from "../components/expense/Balance";
// Import components
import { Header } from "../components/expense/Header";
import { IncomeExpense } from "../components/expense/IncomeExpense";
import { TransactionList } from "../components/expense/TransactionList";

const Expense = () => {
  return (
    <ExpenseStyle>
      <div className="main">
        <div className="container">
          <div className="content">
            <Header />
            <Balance />
            <IncomeExpense />
            <AddTransaction />
          </div>
          <div className="content">
            <TransactionList />
          </div>
        </div>
      </div>
    </ExpenseStyle>
  );
};

const ExpenseStyle = styled.div`
  background: rgb(59, 62, 227);
  background: linear-gradient(
    21deg,
    rgba(59, 62, 227, 1) 2%,
    rgba(76, 158, 255, 1) 89%
  );
  padding-bottom: 10rem;
  .main {
    display: flex;
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
    min-height: 100vh;
    margin: 0;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
    flex: 1;

    padding: 50px 400px;

    padding: 50px 300px;
  }
  @media (max-width: 48rem) {
    max-width: 48rem;
    .main {
      display: flex;
      width: 250px;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      padding-left: 350px;
    }
    .container {
      flex-direction: column;
      margin: 1px;
      width: 10px;
    }
  }
`;

export default Expense;
