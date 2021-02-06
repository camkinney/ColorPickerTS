import React from "react";
import * as Color from "./ColorModule";
import PlusMinusTextInput from "./PlusMinusTextInput";
import { InputLabelPair, PlusMinusLabel } from "./styles/SharedCompStyles";

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
      <>
        <InputLabelPair>
          <PlusMinusLabel htmlFor={Color.RGB.r}> { Color.RGB.r.toUpperCase() }:</PlusMinusLabel>
          <PlusMinusTextInput id={Color.RGB.r} value={this.props.rgbValues.r} handleChange={this.handleChange}/>     
        </InputLabelPair>
        <InputLabelPair>
          <PlusMinusLabel htmlFor={Color.RGB.g}> { Color.RGB.g.toUpperCase() }:</PlusMinusLabel>
          <PlusMinusTextInput id={Color.RGB.g} value={this.props.rgbValues.g} handleChange={this.handleChange}/>     
        </InputLabelPair>
        <InputLabelPair>
          <PlusMinusLabel htmlFor={Color.RGB.b}> { Color.RGB.b.toUpperCase() }:</PlusMinusLabel>
          <PlusMinusTextInput id={Color.RGB.b} value={this.props.rgbValues.b} handleChange={this.handleChange}/>     
        </InputLabelPair>
      </>
    );
  }

}

export default RGBInput;