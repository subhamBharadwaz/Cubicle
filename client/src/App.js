import React, { useEffect } from 'react';
// Router
import { Route, Switch } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';

// Import Components and Pages
import Nav from './components/navbar/Nav';
import GlobalStyle from './components/GlobalStyles';
// Alert
import Alert from './components/layout/Alert';
// Pages
import Todo from './pages/Todo';
import Expense from './pages/Expense';
import Home from './pages/Home';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';

// Private Route
import PrivateRoute from './components/routing/PrivateRoute';

// Actions
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authActions';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Alert />
      <Switch>
        <Route path='/' component={Welcome} exact />
        <Route path='/register' component={RegisterPage} />
        <Route path='/login' component={LoginPage} />

        <PrivateRoute path='/home' component={Home} exact />
        <PrivateRoute path='/todo' component={Todo} />
        <PrivateRoute path='/expense' component={Expense} />

        <Route path='' component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
