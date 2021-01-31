import React from "react";
import * as Color from "./ColorModule";
import InputLabelPair from "./InputLabelPair";

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
   * Handler for when field's value is changed
   * @param event Change event
   */
  private handleChange(changedValue: string, id: string): void {
   
    let newHSVValues = Color.getNewHSVValues(this.props.hsvValues, changedValue, id as Color.HSV);
    this.props.handleColorChange(newHSVValues);
  }

  
  render() {
    return(
      <div className="RGBInput">
        <InputLabelPair value={this.props.hsvValues.h} id={Color.HSV.h} handleChange={this.handleChange}/>
        <InputLabelPair value={this.props.hsvValues.s} id={Color.HSV.s} handleChange={this.handleChange}/>
        <InputLabelPair value={this.props.hsvValues.v} id={Color.HSV.v} handleChange={this.handleChange}/>
      </div>
    );
  } 

}

export default HSVInput;