import logo from './logo.svg';
import './App.css';
import DeviceSimulator from './DeviceSimulator';

function App() {
  const deviceType = "iPhoneX";
  return (
    <>
      <DeviceSimulator deviceType={deviceType}/>
    </>
  );
}

export default App;
