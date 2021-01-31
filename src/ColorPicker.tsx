import React from "react";
import ColorDisplay from "./ColorDisplay";
import ColorInput from "./ColorInput";
import HueSlider from "./HueSlider";
import * as Color from "./ColorModule";
import ColorMatrix from "./ColorMatrix";

  
type ColorPickerProps = {
  rgbValues: Color.RGBValues;
}

type ColorPickerState = {
    hsvValues: Color.HSVValues;
    rgbValues: Color.RGBValues;
}

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
      <div className="colorPicker">
        <div className="colorInput">
        {<ColorInput hsvValues={this.state.hsvValues} rgbValues={this.state.rgbValues} handleColorChange={this.handleColorChange}/> }
         { /* <ColorDisplay hsvValues={this.state.hsvValues} /> */}
        </div>
       { /*<div>
          <ColorMatrix hsvValues={this.state.hsvValues}/>
          <HueSlider hsvValues={this.state.hsvValues} handleColorChange={this.handleColorChange}/>
        </div>*/}
       </div> 
    );
  }

}
  
export default ColorPicker;