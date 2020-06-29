import React from "react";
import "./index.css";

export default class Sidebar extends React.Component {
	constructor() {
		super();
		this.state = {
			test: 1,
		};
	}
	mouseOver = () => {};
	render() {
		return (
			<React.Fragment>
				<div>111 this is sidebar {this.state.test}</div>
				<div className="sidebar">
					<div className="btn">
						<img
							className="btnimg"
							src="./logo192.png"
							alt="home"
						></img>
					</div>
					<div className="btn">
						<img
							className="btnimg"
							src="./logo192.png"
							alt="home"
						></img>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
