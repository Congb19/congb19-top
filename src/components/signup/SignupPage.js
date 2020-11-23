import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { signup } from "../../ajax";

import "./index.scss";

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
};
const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};

export default class Sidebar extends React.Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		test: 1,
	// 		username: "",
	// 		password: "",
	// 	};
	// }

	onFinish = (values) => {
		console.log("Success:", values, "Submitting");
		signup(values).then((res) => {
			console.log(res);
		});
	};

	onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	render() {
		return (
			<React.Fragment>
				<Form
					{...layout}
					name="basic"
					initialValues={{ remember: true }}
					onFinish={this.onFinish}
					onFinishFailed={this.onFinishFailed}
				>
					<Form.Item
						label="Username"
						name="username"
						rules={[{ required: true, message: "Please input your username!" }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Password"
						name="password"
						rules={[{ required: true, message: "Please input your password!" }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item {...tailLayout} name="remember" valuePropName="checked">
						<Checkbox>Remember me</Checkbox>
					</Form.Item>

					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</React.Fragment>
		);
	}
}
