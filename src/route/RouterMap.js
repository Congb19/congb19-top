import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Loadable from "react-loadable";
import MyLoadingComponent from "./RouterLoading";

import Follow from "../components/follow/Follow";
import Banner from "../components/banner/Banner";
import SideBar from "../components/sidebar/Sidebar";
import SignupPage from "../components/signup/SignupPage";

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
//cv
const AsyncCV = Loadable({
	loader: () => import("../pages/cv"),
	loading: MyLoadingComponent,
});
//about
const AsyncAbout = Loadable({
	loader: () => import("../pages/about"),
	loading: MyLoadingComponent,
});
//signup
// const AsyncSignup = Loadable({
// 	loader: () => import("../components/signup"),
// 	loading: MyLoadingComponent,
// });
//error
const AsyncError = Loadable({
	loader: () => import("../pages/error"),
	loading: MyLoadingComponent,
});

let baseURL = "/congb19-top/build";
baseURL = "";

export default () => {
	return (
		<React.Fragment>
			<Follow />
			<SignupPage />
			<Banner />
			<Switch>
				<Route exact path={baseURL + "/"} component={AsyncHome} />
				<Route path={baseURL + "/blog"} component={AsyncBlog} />
				<Route path={baseURL + "/cv"} component={AsyncCV} />
				<Route path={baseURL + "/about"} component={AsyncAbout} />
				{/* <Route path={baseURL + "/signup"} component={AsyncSignup} /> */}
				<Route path={baseURL + "/404"} component={AsyncError} />
				<Redirect to={baseURL + "/404"} />
			</Switch>
			<SideBar />
		</React.Fragment>
	);
};
