import React from "react";
import ColorDisplay from "./ColorDisplay";
import ColorInput from "./ColorInput";
import * as Color from "./ColorModule";

  
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
        <ColorInput hsvValues={this.state.hsvValues} handleColorChange={this.handleColorChange}/>
        <ColorDisplay hsvValues={this.state.hsvValues} />
      </div>
    );
  }

}
  
export default ColorPicker;