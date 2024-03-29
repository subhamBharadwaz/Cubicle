import React from "react";
// Utils
import { numberWithCommas } from "../../utils/format";
// Actions
import { deleteTransaction } from "../../actions/expenseAction";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
// Style
import styled from "styled-components";
import { useDispatch } from "react-redux";

export const Transaction = ({
  transaction,
  updateHandler,
  setToggleSubmit,
}) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteTransaction(transaction._id));
  };

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <TransactionStyle>
      <ListStyle className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}₹{numberWithCommas(Math.abs(transaction.amount))}
        </span>
      </ListStyle>
      <button onClick={deleteHandler} className="expense-delete-btn">
        <FontAwesomeIcon icon={faTrash} className="icon expense-delete-icon" />
      </button>
      <button
        onClick={() => {
          updateHandler(transaction._id);
          setToggleSubmit(true);
        }}
        className="btn update-expense-btn"
      >
        <FontAwesomeIcon icon={faEdit} className="icon expense-update-icon" />
      </button>
    </TransactionStyle>
  );
};

const TransactionStyle = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1rem;

  button {
    border: none;
    outline: none;
    background: none;
    .icon {
      font-size: 1.7rem;
      cursor: pointer;
    }
    .expense-delete-icon {
      color: rgb(255, 41, 41);
    }
    .expense-update-icon {
      margin-left: 0.5rem;
      color: #3be744;
    }
  }
`;

const ListStyle = styled.li`
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: 333;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  width: 100%;
  margin-right: 1rem;
  margin-top: 1rem;
  @media (max-width: 48rem) {
    width: 250px;
  }
`;
