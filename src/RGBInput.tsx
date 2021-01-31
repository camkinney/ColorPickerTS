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
  handleChange(changedValue: string, id: string): void {
    let formattedValue = Color.formatNumString(changedValue, 255);
    if (id === null) return;

    let newRGBValues = Color.getNewRGBValues(this.props.rgbValues, formattedValue, id as Color.RGB);
  
    this.props.handleColorChange(newRGBValues);
  }
  
   
  render() {
    return(
      <div className="rgbInput">
        <InputLabelPair value={this.props.rgbValues.r} id={Color.RGB.r} handleChange={this.handleChange}/>
        <InputLabelPair value={this.props.rgbValues.g} id={Color.RGB.g} handleChange={this.handleChange}/>
        <InputLabelPair value={this.props.rgbValues.b} id={Color.RGB.b} handleChange={this.handleChange}/>
      </div>
    );
  }

}

export default RGBInput;