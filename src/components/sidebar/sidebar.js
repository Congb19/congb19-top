import React from "react";
import { Link } from "react-router-dom";
import { getDate } from "../../ajax";

import Avatar from "../../assets/imgs/avatar.jpg";

import "./index.scss";

let baseURL = "/congb19-top/build";
baseURL = "";

export default class Sidebar extends React.Component {
	constructor() {
		super();
		this.state = {
			test: 1,
			date: {
				year: 2000,
				month: 1,
				date: 1,
				day: 1,
			},
			trash: "",
		};
	}
	componentDidMount() {
		(async () => {
			let res = await getDate();
			console.log("rqDate", res);
			this.setState({
				date: res,
			});
		})();
	}
	render() {
		return (
			<React.Fragment>
				<div className="cb-sidebar">
					<div className="cb-sidebar__date">
						{this.state.date.year} / {this.state.date.month} /{" "}
						{this.state.date.date} 星期{this.state.date.day}
					</div>
					<div className="cb-sidebar__box">
						<img
							className="cb-sidebar__box__avatar"
							src={Avatar}
							alt="Congb19"
						/>
						<p>Congb19's site</p>
						<Link to={baseURL + "/"}>
							<label>HOME</label>
						</Link>
						<Link to={baseURL + "/blog"}>
							<label>BLOG</label>
						</Link>
						<Link to={baseURL + "/docs"}>
							<label>DOCS</label>
						</Link>
						<Link to={baseURL + "/about"}>
							<label>ABOUT</label>
						</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
