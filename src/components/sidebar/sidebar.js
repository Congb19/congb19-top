import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./index.scss";

function PollyTime(t) {
	let _t = +t < 10 ? `0${t}` : t;
	return _t;
}
function TimeNow() {
	const time = new Date();
	return `${PollyTime(time.getHours())}:${PollyTime(
		time.getMinutes()
	)}:${PollyTime(time.getSeconds())}`;
}
export default class Sidebar extends React.Component {
	constructor() {
		super();
		this.state = {
			test: 1,
			now: TimeNow(),
		};
	}
	componentDidMount() {
		axios.get("https://congb19.top").then((res) => {
			console.log(res);
		});
	}
	mouseEnter = () => {
		this.setState({
			test: this.state.test + 1,
		});
		console.log("test: ", this.state.test);
		console.log("enter", TimeNow());
	};
	mouseLeave = () => {
		console.log("leave");
	};
	render() {
		return (
			<React.Fragment>
				<div
					className="sidebar"
					onMouseEnter={this.mouseEnter}
					onMouseLeave={this.mouseLeave}
				>
					<div>111 this is sidebar {this.state.test}</div>
					<div className="btn">
						<Link to="/">
							<img className="btnimg" src="./logo192.png" alt="home"></img>
						</Link>
					</div>
					<div className="btn">
						<Link to="/cv">
							<img className="btnimg" src="./logo192.png" alt="home"></img>
						</Link>
					</div>
					<div className="btn">
						<Link to="/about">
							<img className="btnimg" src="./logo192.png" alt="home"></img>
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
