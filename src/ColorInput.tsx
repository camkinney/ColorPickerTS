import React, { ReactElement } from "react";
import RGBInput from "./RGBInput";
import HexInput from "./HexInput";
import HSVInput from "./HSVInput";
import HueSlider from "./HueSlider";
import * as Color from "./ColorModule";

type ColorInputProps = {
    hsvValues: Color.HSVValues; 
    rgbValues: Color.RGBValues;
    handleColorChange: (newValues: Color.HSVValues | Color.RGBValues) => void;
}

function ColorInput(props: ColorInputProps): ReactElement {

  return( 
    <> 
      <RGBInput rgbValues={props.rgbValues} handleColorChange={props.handleColorChange}/>
      <HSVInput hsvValues={props.hsvValues} handleColorChange={props.handleColorChange}/>
      <HexInput rgbValues={props.rgbValues} handleColorChange={props.handleColorChange}/>
    </>
  );
}

export default ColorInput;