import { ReactElement } from "react";
import * as Color from "./ColorModule";
import styled from "styled-components";

type ColorDislayProps = {
    rgbValues: Color.RGBValues;
}

type ColorDivProps = {
  backgroundColor: string;
}

const ColorDiv = styled.div<ColorDivProps>`
    width: 50px;
    height: 50px;
    display: block;
    margin: 12px 22px 12px 12px;
    background-color: ${props => props.backgroundColor};
    float: right;
  `;

function ColorDisplay(props: ColorDislayProps): ReactElement {

  const backgroundColor =  "rgb("+props.rgbValues.r+", "+props.rgbValues.g+", "+props.rgbValues.b+")";

  

  return(
    <ColorDiv backgroundColor={backgroundColor}/>
  );
}

export default ColorDisplay;