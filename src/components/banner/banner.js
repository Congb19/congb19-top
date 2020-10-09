import React from "react";

import "./index.scss";

export default class Sidebar extends React.Component {
	constructor() {
		super();
		this.state = {
			test: 1,
		};
	}
	componentDidMount() {}
	render() {
		return (
			<React.Fragment>
				<div className="cb-banner">
					<div className="cb-banner__bg"></div>
				</div>
			</React.Fragment>
		);
	}
}
