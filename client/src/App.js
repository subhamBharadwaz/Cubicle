import React, { useEffect } from "react";
// redux
import { useDispatch } from "react-redux";
// Router
import { Route, Switch } from "react-router-dom";

import { loadUser } from "./actions/authActions";
import { LossGain } from "./components/fitness/diet/LossGain";
// Components
import { Content } from "./components/fitness/main/Content";
import { Tips } from "./components/fitness/tips/Tips";
import { GymWorkout } from "./components/fitness/workout/GymWorkout";
import { HomeWorkout } from "./components/fitness/workout/HomeWorkout";
import { Workout } from "./components/fitness/workout/Workout";
import GlobalStyle from "./components/GlobalStyles";
// Alert
import Alert from "./components/layout/Alert";
import Footer from "./components/layout/footer/Footer";
// Import Components and Pages
import Nav from "./components/navbar/Nav";
// Private Route
import PrivateRoute from "./components/routing/PrivateRoute";
import Expense from "./pages/Expense";
import Fitness from "./pages/Fitness";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/Register";
// Pages
import Todo from "./pages/Todo";
import Welcome from "./pages/Welcome";
// Actions
import setAuthToken from "./utils/setAuthToken";

// Footer

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      <Footer />
    </div>
  );
};

export default App;
