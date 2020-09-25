import React from "react";
import "./index.css";

import { CompTest } from "./../../packages";

export default class Home extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="home">
				<p>this is Congb19's Home Page.</p>

				<p>React Training Ground</p>
				<CompTest />
			</div>
		);
	}
}
