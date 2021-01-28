import { ReactElement } from "react";
import "./App.css";
import * as Color from "./ColorModule";

type ColorDislayProps = {
    hsvValues: Color.HSVValues;
}

function ColorDisplay(props: ColorDislayProps): ReactElement {

  let rgbValues = Color.HSVToRGB(props.hsvValues);
  const sideLength = "200px";
  const style = {
    backgroundColor: "rgb("+rgbValues.r+", "+rgbValues.g+", "+rgbValues.b+")",
    width: sideLength,
    height: sideLength,
  }; 

  return(
    <div style={style}> </div>
  );
}

export default ColorDisplay;