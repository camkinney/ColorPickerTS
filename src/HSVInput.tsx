import React from "react";
import * as Color from "./ColorModule";

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
  private handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    let changedVal = event.target.value;
    let changedId = event.target.id as Color.HSV;
    
    let newHSVValues = Color.getNewHSVValues(this.props.hsvValues, changedVal, changedId);
    this.props.handleColorChange(newHSVValues);
  }

  
  render() {
    return(
      <form className="RGBInput">
        <label>
          { Color.HSV.h.toUpperCase() }:
          <input className="inputField" type="text" id={Color.HSV.h} value={this.props.hsvValues.h} onChange={this.handleChange}></input>
        </label>
        <label>
          { Color.HSV.s.toUpperCase() }:
          <input className="inputField" type="text" id={Color.HSV.s} value={this.props.hsvValues.s} onChange={this.handleChange}></input>
        </label>
        <label>
          { Color.HSV.v.toUpperCase() }:
          <input className="inputField" type="text" id={Color.HSV.v} value={this.props.hsvValues.v} onChange={this.handleChange}></input>
        </label>
      </form>
    );
  }

}

export default HSVInput;