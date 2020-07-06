import React from "react";
import { Link } from "react-router-dom";
// import { browserHistory } from "react-router";
// import ReactCSSTransitionGroup from "react-transition-group";
import "./index.css";

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
	mouseEnter = () => {
		this.setState({
			test: this.state.test + 1,
		});
		console.log("enter", TimeNow());
	};
	mouseLeave = () => {
		console.log("leave");
	};
	toLink = () => {
		// browserHistory.push("/cv");
	};
	render() {
		return (
			<React.Fragment>
				<div>111 this is sidebar {this.state.test}</div>
				<div
					className="sidebar"
					onMouseEnter={this.mouseEnter}
					onMouseLeave={this.mouseLeave}
				>
					<div className="btn">
						<Link to="/">
							<img
								className="btnimg"
								src="./logo192.png"
								alt="home"
								// onClick={this.toLink}
							></img>
						</Link>
					</div>
					<div className="btn">
						<Link to="/cv">
							<img
								className="btnimg"
								src="./logo192.png"
								alt="home"
							></img>
						</Link>
					</div>
					<div className="btn">
						<Link to="/about">
							<img
								className="btnimg"
								src="./logo192.png"
								alt="home"
							></img>
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
