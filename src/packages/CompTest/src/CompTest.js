import React from "react";
import "./index.css";

class CompTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = { a: 1 };
	}
	render() {
		return (
			<React.Fragment>
				<h1>hello, CompTest.{this.state.a}</h1>
			</React.Fragment>
		);
	}
}

export default CompTest;
