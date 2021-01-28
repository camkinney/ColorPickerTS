import React, { ReactElement } from "react";
import * as Color from "./ColorModule";

type HueSliderProps = {
    hsvValues: Color.HSVValues; 
    handleColorChange: (hsvValues: Color.HSVValues) => void;
}

function HueSlider(props: HueSliderProps): ReactElement {

  /**
   * Change handler passed to the HSV child component
   * @param newHSVValues updated HSV values
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newHue = event.target.value;
    let newHSVValues = new Color.HSVValues(parseInt(newHue), props.hsvValues.h, props.hsvValues.v);
    props.handleColorChange(newHSVValues);
  }

  return( 
    <input type="range" min="0" max="360" value={props.hsvValues.h} onChange={handleChange}></input>
  );
}

export default HueSlider;