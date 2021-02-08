import React, { ReactElement } from "react";
import * as Color from "./ColorModule";
import styled from "styled-components";

type ColorSquareProps = {
  backgroundColor: string;
}
const ColorSquare = styled.div<ColorSquareProps>`
    width: 14px;
    height: 14px;
    border: 1px;
    border-style: solid;
    border-color: #989898;
    background-color: #${props => props.backgroundColor};
    display: inline-block;
    margin: 0px 14px 0px 14px;
`;

type SavedColorProps = {
  rgbValues: Color.RGBValues;
  handleColorChange: (newValues: Color.RGBValues) => void;
}

function SavedColor(props: SavedColorProps): ReactElement {

  const [selectedColor, setSelectedColor] = React.useState<Color.RGBValues>(new Color.RGBValues(255, 255, 255));

  const selectedColorFormatted = Color.RGBToHex(selectedColor);

  const onClickHandler = (_event: React.MouseEvent<HTMLDivElement>): void => {
    props.handleColorChange(selectedColor);
  };

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setSelectedColor(props.rgbValues);
  }

  return(
      <ColorSquare backgroundColor={selectedColorFormatted} onClick={onClickHandler} onContextMenu={handleContextMenu}/>
  );
}

export default SavedColor;