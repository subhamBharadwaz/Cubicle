import React, { useState } from "react";
// Style
import styled from "styled-components";

// Import components
import { Header } from "../components/expense/Header";
import { Balance } from "../components/expense/Balance";
import { IncomeExpense } from "../components/expense/IncomeExpense";
import { TransactionList } from "../components/expense/TransactionList";
import { AddTransaction } from "../components/expense/AddTransaction";

// Actions
import { updateTransaction } from "../actions/expenseAction";
import { useSelector, useDispatch } from "react-redux";

const Expense = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.expenses);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [isEditItem, setIsEditItem] = useState(null);
  const [toggleSubmit, setToggleSubmit] = useState(false);

  const updateHandler = (id) => {
    let newEditItem = transactions.find((el) => {
      return el._id === id;
    });

    setText(newEditItem.text);
    setAmount(newEditItem.amount);
    setIsEditItem(newEditItem._id);
  };

  const updateExpenseHandler = (e) => {
    e.preventDefault();
    const editedTransaction = {
      text,
      amount,
    };
    dispatch(updateTransaction(isEditItem, editedTransaction));

    setText("");
    setAmount(0);
  };

  return (
    <ExpenseStyle>
      <div className="container">
        <div className="content">
          <Header />
          <Balance />
          <IncomeExpense />
          <AddTransaction
            text={text}
            setText={setText}
            amount={amount}
            setAmount={setAmount}
            toggleSubmit={toggleSubmit}
            setToggleSubmit={setToggleSubmit}
            isEditItem={isEditItem}
            updateHandler={updateHandler}
            updateExpenseHandler={updateExpenseHandler}
          />
        </div>
        <div className="content">
          <TransactionList
            updateHandler={updateHandler}
            toggleSubmit={toggleSubmit}
            setToggleSubmit={setToggleSubmit}
            updateExpenseHandler={updateExpenseHandler}
          />
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

  .container {
    min-height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    flex: 1;
    width: 80%;
    max-width: 1140px;
    margin: 0 auto;

    .content {
      padding-left: 2em;
    }
    @media (max-width: 48rem) {
      width: 100%;
    }
  }
  @media (max-width: 48rem) {
    .container {
      display: flex;

      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;

      flex-direction: column;
    }
  }
`;

export default Expense;
