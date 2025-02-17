import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const enableWebGL = () => {
      document.body.removeEventListener("touchstart", enableWebGL);
      setIsLoaded(true);  // Set state once touch event triggers WebGL enable
    };

    document.body.addEventListener("touchstart", enableWebGL, false);
  }, []);

  return (
    <div className="w-full" style={{ width: "100%" }}>
      {/* {isLoaded ? (
        <Spline scene="https://prod.spline.design/dxHvoztIFiobRBsO/scene.splinecode" />
      ) : (
        <div>Loading 3D scene...</div> // Show loading message
      )} */}
    </div>
  );
}
