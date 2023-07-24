import React from "react";
import { useState } from "react";
import './DeviceSimulator.scss'
import Button from '@mui/material/Button';
import ScreenRotationIcon from '@mui/icons-material/ScreenRotation';


const SimulatorDevices = [
  {
    id: "iPhoneX",
    device: "iphone-x",
    class: "iphone-x",
    colors: [],
    hasLandscape: true,
    width: 375, 
    height: 812,
  },
  {
    id: "iPhone",
    device: "iphone8plus",
    class: "iphone8plus black",
    colors: ["black", "silver", "gold"],
    hasLandscape: true,
    width: 414,
    height: 736,
  },
  {
    id: "iPad",
    device: "ipad",
    class: "ipad black",
    colors: ["black", "silver"],
    hasLandscape: true,
    width: 576,
    height: 768,
  },
  {
    id: "Android Phone",
    device: "note8",
    class: "note8",
    colors: [],
    hasLandscape: true,
    width: 400,
    height: 822,
  },
  {
    id: "Android Tablet",
    device: "nexus5",
    class: "nexus5",
    colors: [],
    hasLandscape: true,
    width: 576,
    height: 768,
  },
  {
    id: "Windows Phone",
    device: "lumia920",
    class: "lumia920 white",
    colors: ["black", "white", "yellow", "red", "blue"],
    hasLandscape: true,
    width: 320,
    height: 533,
  },
  {
    id: "Windows Surface",
    device: "lumia920",
    class: "lumia920 white",
    colors: ["black", "white", "yellow", "red", "blue"],
    hasLandscape: true,
    width: 576,
    height: 768,
  },
];

function DeviceSimulator({ url='https://3.214.108.237/simulate/716176762d692d6578636565642e636f6d/SimTes/SimTes.html', deviceType, scale = 0.85}) {
  const [landscape, setLandscape] = useState(false);  
  console.log(url, deviceType);
  let device;
  if (deviceType) {
    const temp = SimulatorDevices.find((e) => e.id === deviceType);
    if (temp) {
      device = temp;
    } else {
      device = SimulatorDevices[0];
    }
  } else {
    device = SimulatorDevices[0];
  }
  const toggleOrientation = () => {
    setLandscape(!landscape);
  };

  if (device) {
    const orientationClass = landscape ? "landscape" : "portrait";
    // const deviceClass = `simulator-device ${device.class} ${orientationClass}`;
    return (
      
      <>
      <div>
      <Button onClick={toggleOrientation} variant="outlined" startIcon={<ScreenRotationIcon />}>
        Rotate
      </Button>
      </div>
      <div      
        className={`simulator-device ${device.class} ${landscape ? 'landscape' : ''}`}
        style={{
          width: landscape ? `${device.height}px` : `${device.width}px`, 
          height: landscape ? `${device.width}px` : `${device.height}px`,          
          transform: `scale(${scale})`,
          transformOrigin: 'top center',
        }}
      >
        {/* style={{ transform: `rotate(${cameraRotation}deg)` }} */}
        <div className="inner"></div>
        <div className="notch">
          <div className="camera" ></div>
          <div className="speaker"></div>
        </div>
        {/* <div className="overflow">
          <div className="shadow"></div>
        </div> */}
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="bottom-bar"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="sensors"></div>
        <div className="more-sensors"></div>
        <div className="inner-shadow"></div>
        <div className="screen">
          <iframe
            src={url}
            title="simulator"
            color="gold"
            style={device.id==='iPhoneX' ? { marginTop: '30px' } : {}}
            width={landscape ? device.height : device.width}
            height={landscape ? device.width : device.height}
          ></iframe>
        </div>
        <div className="home"></div>
        <div className="bottom-bar"></div>
      </div>
      </>
    );
  } else {
    return null;
  }
}

export default DeviceSimulator;
