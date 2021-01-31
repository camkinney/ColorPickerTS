import { ReactElement, MouseEvent } from "react";
import "./styles/InputLabelPair.css";
import * as Color from "./ColorModule";

type ILPairProps = {
    id: string;
    value: number;
    handleChange: (value: string, id: string) => void;
}

function InputLabelPair(props: ILPairProps): ReactElement {


  const plusBtnCallback = (event: MouseEvent<HTMLButtonElement>) => {
    let newValue = props.value+1;
    let newValueStr = newValue.toString();
    
    props.handleChange(newValueStr, props.id);
  }

  const minusBtnCallback = (event: MouseEvent<HTMLButtonElement>) => {
    let newValue = props.value-1;
    let newValueStr = newValue.toString();
    
    props.handleChange(newValueStr, props.id);
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    let id = event.target.id as Color.RGB;

    props.handleChange(value, id);
  }

    return (
        <div className="iLPair">
            <label className="iLPairLabel" htmlFor={props.id}> { props.id.toUpperCase() }:</label>
            <div className="iLPairInputContainer">
                <input className="iLPairInputText" type="text" id={props.id} value={props.value} onChange={handleTextChange}></input>
                <div className="iLPairBtnContainer">
                    <button className="iLPairPlusBtn" onClick={plusBtnCallback}>+</button>
                    <button className="iLPairMinusBtn" onClick={minusBtnCallback}>-</button>
                </div>  
            </div>        
        </div>
    )
}

export default InputLabelPair;