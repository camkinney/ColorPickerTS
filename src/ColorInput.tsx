import React, { ReactElement } from "react";
import RGBInput from "./RGBInput";
import HexInput from "./HexInput";
import HSVInput from "./HSVInput";
import HueSlider from "./HueSlider";
import * as Color from "./ColorModule";

type ColorInputProps = {
    hsvValues: Color.HSVValues; 
    handleColorChange: (hsvValues: Color.HSVValues) => void;
}

function ColorInput(props: ColorInputProps): ReactElement {

  /**
   * Change handler passed to the HSV child component
   * @param newHSVValues updated HSV values
   */
  const rgbCallback = (newRGBValues: Color.RGBValues) => {

    let newHSVValues = Color.RGBToHSV(newRGBValues);
    props.handleColorChange(newHSVValues);
  }
  let rgbValues = Color.HSVToRGB(props.hsvValues);

  return( 
    <> 
      {/* <HexInput hsvValues={props.hsvValues} handleColorChange={props.handleColorChange}/> */}
      <RGBInput rgbValues={rgbValues} handleColorChange={rgbCallback}/>
     {/* <HSVInput hsvValues={props.hsvValues} handleColorChange={props.handleColorChange}/> */}
    </>
  );
}

export default ColorInput;