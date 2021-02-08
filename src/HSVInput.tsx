import React from "react";
import * as Color from "./ColorModule";
import PlusMinusTextInput from "./PlusMinusTextInput";
import { InputLabelPair, PlusMinusLabel } from "./styles/SharedCompStyles";

type HSVProps = {
    handleColorChange: (hsvValues: Color.HSVValues) => void;
    hsvValues: Color.HSVValues;
}

class HSVInput extends React.Component<HSVProps> {
  
  constructor(props: HSVProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   * Handler for when a field's value is changed
   * @param event Change event
   */
  private handleChange(changedValue: string, id: string): void {
   
    let newHSVValues = Color.getNewHSVValues(this.props.hsvValues, changedValue, id as Color.HSV);
    this.props.handleColorChange(newHSVValues);
  }

  
  render() {
    return(
      <>
        <InputLabelPair>
          <PlusMinusLabel htmlFor={Color.HSV.h}> { Color.HSV.h.toUpperCase() }:</PlusMinusLabel>
          <PlusMinusTextInput id={Color.HSV.h} value={this.props.hsvValues.h} handleChange={this.handleChange}/>     
        </InputLabelPair>
        <InputLabelPair>
          <PlusMinusLabel htmlFor={Color.HSV.s}> { Color.HSV.s.toUpperCase() }:</PlusMinusLabel>
          <PlusMinusTextInput id={Color.HSV.s} value={this.props.hsvValues.s} handleChange={this.handleChange}/>     
        </InputLabelPair>
        <InputLabelPair>
          <PlusMinusLabel htmlFor={Color.HSV.v}> { Color.HSV.v.toUpperCase() }:</PlusMinusLabel>
          <PlusMinusTextInput id={Color.HSV.v} value={this.props.hsvValues.v} handleChange={this.handleChange}/>     
        </InputLabelPair>
    </>
    );
  } 

}

export default HSVInput;