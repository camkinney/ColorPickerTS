import React from "react";
import ColorDisplay from "./ColorDisplay";
import ColorInput from "./ColorInput";
import HueSlider from "./HueSlider";
import * as Color from "./ColorModule";
import ColorMatrix from "./ColorMatrix";

  
type ColorPickerProps = {
  hsvValues: Color.HSVValues;
}

type ColorPickerState = {
    hsvValues: Color.HSVValues;
}

class ColorPicker extends React.Component<ColorPickerProps, ColorPickerState> {
  
  constructor(props: ColorPickerProps) {
    super(props);
    this.state = {
      hsvValues: this.props.hsvValues,
    };
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  /**
   * Handler for when the color value is changed.
   * @param changedValue changed hexadecimal color value
   */
  handleColorChange(newHSVValues: Color.HSVValues): void {  
    this.setState({hsvValues: newHSVValues});
  }
    
  render() {
    return (
      <div className="colorPicker">
        <div className="colorInput">
        {<ColorInput hsvValues={this.state.hsvValues} handleColorChange={this.handleColorChange}/> }
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