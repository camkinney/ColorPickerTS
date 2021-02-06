import React from "react";
import * as Color from "./ColorModule";
import styled from "styled-components";

type HexInputProps = {
    rgbValues: Color.RGBValues,
    handleColorChange: (hsvValues: Color.RGBValues) => void;
}

const HexContainer = styled.div`
float: right;
margin: 20px 14px 20px;
`;

const HexPrefix = styled.div`
display: inline-block;
width: 28px;
height: 33px;
font-size: 26px;
color: #989898;
border-color: #989898;
border-style: solid none solid solid;
background-color: white;
border-width: 1px;
border-top-left-radius: 3px;
border-bottom-left-radius: 3px;
`;

const HexField = styled.input`
display: inline-block;
width: 96px;
font-size: 26px;
border-color: #989898;
border-style: solid solid solid none;
background-color: white;
border-width: 1px;
border-top-right-radius: 3px;
border-bottom-right-radius: 3px;
`;

class HexInput extends React.Component<HexInputProps> {
   
  constructor(props: HexInputProps) {
    super(props);
      
    this.handleChange = this.handleChange.bind(this);
  }
  
  /**
   * Change handler for input field
   * @param event change event for input field
   */
  private handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    let newHexValue = event.target.value;
    let newRGBValues: Color.RGBValues = Color.HexToRGB(newHexValue);
    this.props.handleColorChange(newRGBValues);
  }
  
  render() {

    let hexValue = Color.RGBToHex(this.props.rgbValues);
    return(
      <HexContainer>
        <HexPrefix>0x</HexPrefix>
        <HexField type="text" value={hexValue} onChange={this.handleChange}></HexField>  
      </HexContainer>
    );
  }

}

export default HexInput;