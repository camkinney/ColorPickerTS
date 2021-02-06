import React, { ReactElement } from "react";
import * as Color from "./ColorModule";

type ColorInputProps = {
    hsvValues: Color.HSVValues; 
    rgbValues: Color.RGBValues;
    handleColorChange: (newValues: Color.HSVValues | Color.RGBValues) => void;
}

function ColorInput(props: ColorInputProps): ReactElement {

  return( 
    <> 
      
    </>
  );
}

export default ColorInput;