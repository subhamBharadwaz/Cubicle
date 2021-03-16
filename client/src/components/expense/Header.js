import React from 'react';

// Style
import styled from 'styled-components';

export const Header = () => {
  return (
    <HeaderStyle>
      <h2>Expense Tracker</h2>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  h2 {
    letter-spacing: 1px;
    margin: 0;
    color: #000;
  }
`;
