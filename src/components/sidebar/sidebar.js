import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Avatar from "../../assets/imgs/logo192.png";

import "./index.scss";

export default class Sidebar extends React.Component {
	constructor() {
		super();
		this.state = {
			test: 1,
			date: "2020",
		};
	}
	componentDidMount() {
		axios.get("http://localhost:8001/api/date").then((res) => {
			console.log(res);
			this.setState({
				// date: this.dateFormatter(),
				date: res.data.data,
			});
		});
	}
	dateFormatter() {
		let time = new Date();
		console.log(time);
		return time.getFullYear() + " / " + time.getMonth() + " / " + time.getDay();
	}
	render() {
		return (
			<React.Fragment>
				<div className="cb-sidebar">
					<div className="cb-sidebar__date">{this.state.date}</div>
					<div className="cb-sidebar__box">
						<img
							className="cb-sidebar__box__avatar"
							src={Avatar}
							alt="Congb19"
						/>
						<p>Congb19's site</p>
						<Link to="/">
							<label>HOME</label>
						</Link>
						<Link to="/blog">
							<label>BLOG</label>
						</Link>
						<Link to="/docs">
							<label>DOCS</label>
						</Link>
						<Link to="/about">
							<label>ABOUT</label>
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
