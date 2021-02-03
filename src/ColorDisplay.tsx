import { ReactElement } from "react";
import "./styles/ColorDisplay.css";
import * as Color from "./ColorModule";

type ColorDislayProps = {
    rgbValues: Color.RGBValues;
}

function ColorDisplay(props: ColorDislayProps): ReactElement {

  const style = {
    backgroundColor: "rgb("+props.rgbValues.r+", "+props.rgbValues.g+", "+props.rgbValues.b+")"
  }; 

  return(
    <div className="colDispDisplayBox" style={style}> </div>
  );
}

export default ColorDisplay;