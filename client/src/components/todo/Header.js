import React from 'react';
import { useSelector } from 'react-redux';
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  return <>{user && <h1>Welcome {user.data.name}</h1>}</>;
};

export default Header;
