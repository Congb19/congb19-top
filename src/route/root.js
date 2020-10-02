import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterMap from "../route/RouterMap.js";

import Banner from "../components/banner/banner";

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="main">
					<Banner />
					<RouterMap />
				</div>
			</Router>
		);
	}
}
