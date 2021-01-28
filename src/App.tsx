import './ColorPicker';
import ColorPicker from './ColorPicker';
import * as Color from './ColorModule';

function App() {
  return (
    <div className="appContainer">
      <ColorPicker hsvValues={new Color.HSVValues(195, 76, 83)}/>
    </div>
    
  );
}
export default App;