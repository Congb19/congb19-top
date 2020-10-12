import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterMap from "../route/RouterMap.js";


export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div className="main">
					<RouterMap />
				</div>
			</Router>
		);
	}
}
