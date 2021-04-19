import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import history from "./history";

const Routes = () => {
  return (
	<Router history={history}>
		<Switch>
			<Route path="/" exact>
				<LoginPage />
			</Route>
			<Route path="/home">
				<HomePage />
			</Route>
		</Switch>
	</Router>
  );
};

export default Routes;
