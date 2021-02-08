import React, { ReactElement } from "react";
import * as Color from "./ColorModule";
import styled from "styled-components";

type ColorDislayProps = {
    hsvValues: Color.HSVValues;
    handleColorChange: (newValues: Color.HSVValues) => void;
}

type GradientProperties = {
  hexVal: string;
}

const GradientDivOuter = styled.div<GradientProperties>`
  width: 200px;
  height: 200px;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, #ffffff 0%, #${props => props.hexVal} 100%);
  margin: 0px 0px 15px 10px;
`;

const GradientDivInner = styled.div`
  width: 200px;
  height: 200px;
  background: linear-gradient( rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%);
`;

type CurrentLocDivProps = {
  left: number;
  top: number;
}

const CurrentLocDiv = styled.div<CurrentLocDivProps>`
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  height: 4px;
  width: 4px;
  border-radius: 2px;
  background-color: white;
`;

/**
 * typing for click event properties used
 */
type ClickEvent = {
  pageX: number;
  pageY: number;
  target: {
    offsetTop: number;
    offsetLeft: number;
  }
}

/**
 * Given a click event on the gradient div, generates new color in HSV format
 * @param clickEvent 
 * @param currentHue 
 */
function convertClickToNewHSV(clickEvent: ClickEvent, currentHue: number): Color.HSVValues {
  let trueX = clickEvent.pageX - clickEvent.target.offsetLeft;
  let trueY = clickEvent.pageY - clickEvent.target.offsetTop;
  let newSaturation = Math.floor(trueX/2);
  let newValue = Math.floor((200-trueY)/2);

  return new Color.HSVValues(currentHue, newSaturation, newValue);
}

/**
 * Calculate the left position of the pointer within the gradient div.
 * @param offsetLeft left offset of gradient div in relation to page
 * @param saturation s from HSV
 */
function calculateLeftPosOfPtr(offsetLeft: number, saturation: number): number {
  return offsetLeft + 2 * saturation;
}

/**
 * Calculate the top position of the pointer within the gradient div.
 * @param offsetTop top offset of gradient div in relation to page
 * @param value v from HSV
 */
function calculateTopPosOfPtr(offsetTop: number, value: number): number {
  return offsetTop + 2 * (100 - value);
}

function ColorMatrix(props: ColorDislayProps): ReactElement {

  const gradDiv = React.useRef<HTMLDivElement | null>(null);

  const handleColorSelect = ( event: any): void => {
    let newHSVValues = convertClickToNewHSV(event, props.hsvValues.h);
    props.handleColorChange(newHSVValues);
  };

  
  let fullyVividHex = Color.HSVToHex(new Color.HSVValues(props.hsvValues.h, 100, 100));

  let left = 0;
  let top = 0;

  if (gradDiv && gradDiv.current) {
    left = calculateLeftPosOfPtr(gradDiv.current.offsetLeft, props.hsvValues.s);
    top = calculateTopPosOfPtr(gradDiv.current.offsetTop, props.hsvValues.v);
  }

  return(
    <GradientDivOuter hexVal={fullyVividHex}>
      <GradientDivInner onClick={handleColorSelect} ref={gradDiv}>
        { <CurrentLocDiv left={left} top={top} /> }
      </GradientDivInner>
    </GradientDivOuter>
  );
}

export default ColorMatrix;