import React, { ReactElement } from "react";
import * as Color from "./ColorModule";
import styled from "styled-components";

type HueSliderProps = {
    hsvValues: Color.HSVValues; 
    handleColorChange: (hsvValues: Color.HSVValues) => void;
}

const Slider = styled.input`
  -webkit-appearance: none;
  width: 245px;
  margin-left: 8px;
  margin-top: 8px;
  :focus {
    outline: none;
  }
  ::-webkit-slider-runnable-track {
    height: 20px;
    background-image: linear-gradient(to right, red, yellow, green, blue, indigo, violet);
    border: solid;
    border-color: #989898;
    border-width: 1px;
    border-radius: 3px;
  };
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 30px;
    width: 10px;
    border-radius: 20%;
    border-style: solid;
    border-width: 1px;
    border-color: #989898;
    background-color: rgba(152, 152, 152, .4);
    margin-top: -6px;
    :hover {
    background-color:  rgba(152, 152, 152, .6);
    }
    :active {
    background-color:  rgba(152, 152, 152, .4);
  }
};
`;

function HueSlider(props: HueSliderProps): ReactElement {

  /**
   * Change handler passed to the HSV child component
   * @param newHSVValues updated HSV values
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newHue = event.target.value;
    let newHSVValues = new Color.HSVValues(parseInt(newHue), props.hsvValues.s, props.hsvValues.v);
    props.handleColorChange(newHSVValues);
  }

  return( 
    <>
      <Slider type="range" min="0" max="360" value={props.hsvValues.h} onChange={handleChange}></Slider> 
    </>
  );
}

export default HueSlider;