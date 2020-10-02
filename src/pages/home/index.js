import React from "react";
import "./index.scss";

import { CompTest } from "./../../packages";
import { DatePicker } from "antd";

export default class Home extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="cb-home">
				<p>this is Congb19's Home Page.</p>

				<p>React Training Ground</p>
				<CompTest />
				<CompTest />
				<CompTest />
				<CompTest />
				<CompTest />
				<DatePicker />
			</div>
		);
	}
}
