import React from "react";
import InputLabelPair from "./InputLabelPair";
import * as Color from "./ColorModule";

type RGBProps = {
  rgbValues: Color.RGBValues; 
  handleColorChange: (rgbValues: Color.RGBValues) => void;
}

class RGBInput extends React.Component<RGBProps> {
  
  constructor(props: RGBProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Handler for when R, G, or B value is changed
   * @param event Change event
   */
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    let value = event.target.value;
    let formattedValue = Color.formatNumString(value, 255);
    let id: Color.RGB = event.target.id as Color.RGB;
    if (id === null) return;

    let newRGBValues = Color.getNewRGBValues(this.props.rgbValues, formattedValue, id);
  
    this.props.handleColorChange(newRGBValues);
  }
  
   
  render() {
    return(
      <form className="RGBInput">
        <label>
          { Color.HSV.h.toUpperCase() }:
          <input className="inputField" type="text" id={Color.RGB.r} value={this.props.rgbValues.r} onChange={this.handleChange}></input>
        </label>
        <label>
          { Color.HSV.s.toUpperCase() }:
          <input className="inputField" type="text" id={Color.RGB.g} value={this.props.rgbValues.g} onChange={this.handleChange}></input>
        </label>
        <label>
          { Color.HSV.v.toUpperCase() }:
          <input className="inputField" type="text" id={Color.RGB.b} value={this.props.rgbValues.b} onChange={this.handleChange}></input>
        </label>
      </form>
    );
  }

}

export default RGBInput;