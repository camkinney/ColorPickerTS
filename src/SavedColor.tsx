import React, { ReactElement } from "react";
import * as Color from "./ColorModule";
import styled from "styled-components";

type ColorSquareProps = {
  backgroundColor: string;
}
const ColorSquare = styled.div<ColorSquareProps>`
    width: 10px;
    height: 10px;
    border: 1px;
    border-style: solid;
    border-color: #989898;
    background-color: #${props => props.backgroundColor};
`;

type SavedColorProps = {
  rgbValues: Color.RGBValues;
}

function SavedColor(props: SavedColorProps): ReactElement {

  const [selectedColor, setSelectedColor] = React.useState<Color.RGBValues>(new Color.RGBValues(255, 255, 255));

  const backgroundColor =  Color.RGBToHex(props.rgbValues);
  const selectedColorFormatted = Color.RGBToHex(selectedColor);

  const changeSavedColor = (event: React.MouseEvent<HTMLDivElement>): void => {
    setSelectedColor(props.rgbValues);
  };

  return(
    <>
      <ColorSquare backgroundColor={selectedColorFormatted} onClick={changeSavedColor}/>
    </>
  );
}

export default SavedColor;