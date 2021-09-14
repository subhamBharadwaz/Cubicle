import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Style
import styled from "styled-components";

// Actions
import { getTransactions } from "../../actions/expenseAction";
import Spinner from "../layout/Spinner";

// Components
import { Transaction } from "./Transaction";

//  icons

export const TransactionList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expensePerPage, setExpensePerPage] = useState(5);

  const { transactions, loading } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  // Get current expenses
  const indexOfLastExpense = currentPage * expensePerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensePerPage;
  const currentExpense = transactions.slice(
    indexOfFirstExpense,
    indexOfLastExpense
  );

  // Next Expense
  const nextExpenseHandler = () => {
    if (transactions.length > 0) {
      let totalExpenses = transactions.length;
      let totalPages = Math.ceil(totalExpenses / expensePerPage);

      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      } else {
        setCurrentPage(totalPages);
      }
    }
  };

  // Prev expenses
  const prevExpenseHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <TransactionListStyle>
      <h3>History</h3>

      <ul>
        {currentExpense.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
      {loading && <Spinner />}
      <button className="btn-2" onClick={prevExpenseHandler}>
        Prev
      </button>
      <button className="btn-2" onClick={nextExpenseHandler}>
        Next
      </button>
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
  .btn-2 {
    margin: 15px;
    padding: 0.6rem 1.8rem;

    background: linear-gradient(90deg, #88108a, #6711e7);

    border: none;
    border-radius: 25px;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    justify-content: space-between;
  }
`;
