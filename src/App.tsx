import './ColorPicker';
import ColorPicker from './ColorPicker';
import * as Color from './ColorModule';
import { ReactElement } from 'react';
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 40px auto auto auto;
  max-width: 495px;
  border-style: solid;
  border-color: #989898;
  border-width: 1px;
  border-radius: 10px;
  padding: 30px;
`;

function App(): ReactElement {

  return (
    <AppContainer>
      <ColorPicker rgbValues={new Color.RGBValues(255,0,0)}/>
    </AppContainer>
  );
}

export default App;
