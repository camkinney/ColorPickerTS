import React from "react";
import * as Color from "./ColorModule";

type HexInputProps = {
    hsvValues: Color.HSVValues,
    handleColorChange: (hsvValues: Color.HSVValues) => void;
}

class HexInput extends React.Component<HexInputProps> {
   
  constructor(props: HexInputProps) {
    super(props);
      
    this.handleChange = this.handleChange.bind(this);
  }
  
  /**
   * Change handler for input field
   * @param event change event for input field
   */
  private handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    let newHexValue = event.target.value;
    let newHSVValues: Color.HSVValues = Color.HexToHSV(newHexValue);
    this.props.handleColorChange(newHSVValues);
  }
     
  render() {
    let hexValue = Color.HSVToHex(this.props.hsvValues);
    return(
      <div className="hexInput">
        <label htmlFor="hexField" className="hexLabel">
          Hex (#): 
        </label>
        <input id="hexField" className="hexField" type="text" value={hexValue} onChange={this.handleChange}></input>      
      </div>
    );
  }

}

export default HexInput;