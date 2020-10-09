import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import MyLoadingComponent from "./RouterLoading";

import SideBar from "../components/sidebar/sidebar";

// home
const AsyncHome = Loadable({
	loader: () => import("../pages/home"),
	loading: MyLoadingComponent,
});
// blog
const AsyncBlog = Loadable({
	loader: () => import("../pages/blog"),
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
		<React.Fragment>
			<Switch>
				<Route exact path="/" component={AsyncHome} />
				<Route path="/blog" component={AsyncBlog} />
				<Route path="/cv" component={AsyncCV} />
				<Route path="/about" component={AsyncAbout} />
				<Route path="/404" component={AsyncError} />
				<Redirect to="/404" />
			</Switch>
			<SideBar />
		</React.Fragment>
	);
};
