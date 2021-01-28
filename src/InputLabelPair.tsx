import React from "react";
import "./App.css";

type ILPairProps = {
    id: string;
    value: number;
    handleChange: any;
}

class InputLabelPair extends React.Component<ILPairProps> {

    render() {
        return (
            <label>
                { this.props.id.toUpperCase() }:
                <input className="inputField" type="text" id={this.props.id} value={this.props.value} onChange={this.props.handleChange}></input>
            </label>
        )
    }
}

export default InputLabelPair;