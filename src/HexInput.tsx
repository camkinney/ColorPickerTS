import React from "react";
import * as Color from "./ColorModule";
import "./styles/HexInput.css";

type HexInputProps = {
    rgbValues: Color.RGBValues,
    handleColorChange: (hsvValues: Color.RGBValues) => void;
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
    let newRGBValues: Color.RGBValues = Color.HexToRGB(newHexValue);
    this.props.handleColorChange(newRGBValues);
  }
     
  render() {
    let hexValue = Color.RGBToHex(this.props.rgbValues);
    return(
      <div className="hexInput">
        <div className="hexFieldPrefix">0x</div>
        <input id="hexField" className="hexField" type="text" value={hexValue} onChange={this.handleChange}></input>      
      </div>
    );
  }

}

export default HexInput;