import React from "react";
import "./styles/InputLabelPair.css";

type ILPairProps = {
    id: string;
    value: number;
    handleChange: any;
}

class InputLabelPair extends React.Component<ILPairProps> {

    render() {
        return (
            <div className="iLPair">
                <label className="iLPairLabel" htmlFor={this.props.id}> { this.props.id.toUpperCase() }:</label>
                <div className="iLPairInputContainer">
                    <input className="iLPairInputText" type="text" id={this.props.id} value={this.props.value} onChange={this.props.handleChange}></input>
                    <div className="iLPairBtnContainer">
                        <button className="iLPairPlusBtn">+</button>
                        <button className="iLPairMinusBtn">-</button>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default InputLabelPair;