import React from 'react'

export default class Sidebar extends React.Component{
    constructor() {
        super();
        this.state = {
            test: 1,
        }
    }
    render() {
        return (
            /*<div>1</div>*/
            <div>this is sidebar {this.state.test}</div>
        );
    }
}