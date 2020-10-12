import React from "react";

import "./index.scss";

export default class Follow extends React.Component {
	constructor() {
		super();
		this.state = {
			test: 1,
		};
	}
	componentDidMount() {}
	render() {
		const length = [...Array(100)];
		const positions = length.map(() => (
			<div className="cb-follow__position"></div>
		));
		return (
			<React.Fragment>
				<div className="cb-follow">
					{positions}
				</div>
			</React.Fragment>
		);
	}
}
