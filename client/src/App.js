import React, { useEffect } from "react";
// Router
import { Route, Switch } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";

// Import Components and Pages
import Nav from "./components/navbar/Nav";
import GlobalStyle from "./components/GlobalStyles";
// Alert
import Alert from "./components/layout/Alert";
// Pages
import Todo from "./pages/Todo";
import Expense from "./pages/Expense";
import Fitness from "./pages/Fitness";
import Home from "./pages/Home";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import Welcome from "./pages/Welcome";
import NotFound from "./pages/NotFound";
// Components
import { Content } from "./components/fitness/main/Content";
import { Workout } from "./components/fitness/workout/Workout";
import { LossGain } from "./components/fitness/diet/LossGain";
import { Tips } from "./components/fitness/tips/Tips";
import { HomeWorkout } from "./components/fitness/workout/HomeWorkout";
import { GymWorkout } from "./components/fitness/workout/GymWorkout";
import Footer from './components/layout/footer/Footer'

// Private Route
import PrivateRoute from "./components/routing/PrivateRoute";

// Actions
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/authActions";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Alert />
      <Switch>
        <Route path="/" component={Welcome} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/login" component={LoginPage} exact />

        <PrivateRoute path="/home" component={Home} exact />
        <PrivateRoute path="/todo" component={Todo} exact />
        <PrivateRoute path="/expense" component={Expense} exact />
        <PrivateRoute path="/fitness" component={Fitness} exact />

        {/* Fitness components Routes */}
        <PrivateRoute path="/second" component={Content} exact />
        <PrivateRoute path="/workout" component={Workout} exact />
        <PrivateRoute path="/homeworkout" component={HomeWorkout} exact />
        <PrivateRoute path="/gymworkout" component={GymWorkout} exact />
        <PrivateRoute path="/diet" component={LossGain} exact />
        <PrivateRoute path="/tips" component={Tips} exact />

        <Route path="" component={NotFound} />
      </Switch>
      <Footer/>
    </div>
  );
};

export default App;
