import './ColorPicker';
import ColorPicker from './ColorPicker';
import * as Color from './ColorModule';

function App() {
  return (
    <div className="appContainer">
      <ColorPicker rgbValues={new Color.RGBValues(232,101,115)}/>
    </div>
    
  );
}
export default App;