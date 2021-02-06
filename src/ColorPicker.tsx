import React from "react";
import ColorDisplay from "./ColorDisplay";
import HueSlider from "./HueSlider";
import * as Color from "./ColorModule";
import RGBInput from "./RGBInput";
import HSVInput from "./HSVInput";
import HexInput from "./HexInput";
import styled from "styled-components";

  
type ColorPickerProps = {
  rgbValues: Color.RGBValues;
}

type ColorPickerState = {
    hsvValues: Color.HSVValues;
    rgbValues: Color.RGBValues;
}

type WidthInlineDivProps = {
  width: number;
}

const FixedWidthInlineBlock = styled.div<WidthInlineDivProps>`
  width: ${props => props.width}px;
  display: inline-block;
`;

const PctWidthInlineBlock = styled.div<WidthInlineDivProps>`
  width: ${props => props.width}%;
  display: inline-block;
`;

class ColorPicker extends React.Component<ColorPickerProps, ColorPickerState> {
  
  constructor(props: ColorPickerProps) {
    super(props);
    this.state = {
      rgbValues: this.props.rgbValues,
      hsvValues: Color.RGBToHSV(this.props.rgbValues)
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  /**
   * Handler for when the color value is changed.
   * @param changedValue changed hexadecimal color value
   */
  handleColorChange(newValues: Color.HSVValues | Color.RGBValues): void {  
    if (newValues instanceof Color.RGBValues) {
      let newHSVValues = Color.RGBToHSV(newValues);
      this.setState({rgbValues: newValues, hsvValues: newHSVValues});
    }
    else {
      let newRGBValues = Color.HSVToRGB(newValues);
      this.setState({rgbValues: newRGBValues, hsvValues: newValues});
    }
  }
    
  render() {
    return (
      <>
        <FixedWidthInlineBlock width={270}>
            <RGBInput rgbValues={this.state.rgbValues} handleColorChange={this.handleColorChange}/>
            <HSVInput hsvValues={this.state.hsvValues} handleColorChange={this.handleColorChange}/>
            <HueSlider hsvValues={this.state.hsvValues} handleColorChange={this.handleColorChange} />
          <div>
            <PctWidthInlineBlock width={40}>
              <ColorDisplay rgbValues={this.state.rgbValues}/>
            </PctWidthInlineBlock>
            <PctWidthInlineBlock width={60}>
              <HexInput rgbValues={this.state.rgbValues} handleColorChange={this.handleColorChange}/>
            </PctWidthInlineBlock>
          </div>
        </FixedWidthInlineBlock>
      </> 
    );
  }

}
  
export default ColorPicker;