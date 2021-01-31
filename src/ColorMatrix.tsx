import { ReactElement } from "react";
import "./App.css";
import * as Color from "./ColorModule";

type ColorDislayProps = {
    hsvValues: Color.HSVValues;
}

function ColorMatrix(props: ColorDislayProps): ReactElement {

  let rgbValues = Color.HSVToRGB(props.hsvValues);
  const style = {
    backgroundColor: "rgb("+rgbValues.r+", "+rgbValues.g+", "+rgbValues.b+")",
    width: "50px",
    height: "50px",
  }; 

  let rows = [];
  for (let rowCount = 0; rowCount < 100; rowCount++) {
      let cells = [];
      for (let colCount = 0; colCount < 100; colCount++) {
          let cell = <td className="tableCell" id={rowCount.toString()+"|"+colCount.toString() }></td>;
          cells[colCount] = cell;
      }
      let row = <tr>{cells}</tr>;
      rows[rowCount] = row;
  }
  return(
    <table className="matrixTable">
        {rows}
    </table>
  );
}

export default ColorMatrix;