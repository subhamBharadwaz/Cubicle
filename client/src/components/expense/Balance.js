import React from "react";
import { useSelector } from "react-redux";
// Utils
import { numberWithCommas } from "../../utils/format";
// Style
import styled from "styled-components";

export const Balance = () => {
  const { transactions } = useSelector((state) => state.expenses);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <BalanceStyle>
      <h4>Your Balance</h4>
      <h1>₹{numberWithCommas(total)}</h1>
    </BalanceStyle>
  );
};

const BalanceStyle = styled.div`
  color: #fff;
  h4 {
    font-size: 1.4rem;
  }
`;
