import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import MyLoadingComponent from "./RouterLoading";

// home
const AsyncHome = Loadable({
	loader: () => import("../pages/home"),
	loading: MyLoadingComponent,
});
//about
const AsyncAbout = Loadable({
	loader: () => import("../pages/about"),
	loading: MyLoadingComponent,
});
//cv
const AsyncCV = Loadable({
	loader: () => import("../pages/cv"),
	loading: MyLoadingComponent,
});
//error
const AsyncError = Loadable({
	loader: () => import("../pages/error"),
	loading: MyLoadingComponent,
});

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={AsyncHome} />
			{/* <Route path='/work' component={ AsyncWork }/> */}
			<Route path="/cv" component={AsyncCV} />
			<Route path="/about" component={AsyncAbout} />
			<Route path="/404" component={AsyncError} />
			<Redirect to="/404" />
		</Switch>
	);
};
