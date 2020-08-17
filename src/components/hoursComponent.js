import React, { Component } from "react";

export default class Hours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }
    render() {
        return (
            <div>
                <div>
                    <label>
                        <strong>Status:</strong>
                    </label>{" "}
                    {this.state.data.isOpen ? "Open" : "Close"}                    
                </div>
                <div>
                    <label>
                        <strong>Hours:</strong>
                    </label>{" "}
                    {this.state.data.text}
                </div>
            </div>
        );
    }
}
Hours.defaultProps = {
    data: {isOpen:null, text: ""}
  };