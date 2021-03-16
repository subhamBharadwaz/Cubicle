import React from 'react';

import { useSelector } from 'react-redux';

// Style
import styled from 'styled-components';

const Alert = () => {
  const alerts = useSelector((state) => state.alert);
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <AlertStyle key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </AlertStyle>
    ))
  );
};

const AlertStyle = styled.div`
  margin: 3rem;
`;

export default Alert;
