import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RouterMap from "../route/RouterMap.js";
import SideBar from "../components/sidebar/sidebar";

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="main">
					<SideBar />
					<RouterMap />
					{/* <SideBar /> */}
				</div>
			</Router>
		);
	}
}
