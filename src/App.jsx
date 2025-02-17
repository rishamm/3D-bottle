import Spline from '@splinetool/react-spline'
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const enableWebGL = () => {
      document.body.removeEventListener("touchstart", enableWebGL);
    };
    document.body.addEventListener("touchstart", enableWebGL, false);
  }, []);
  return (
    <div className="w-full"style={{width:"100%"}}   >
      <Spline scene="https://prod.spline.design/dxHvoztIFiobRBsO/scene.splinecode"  />
   </div>
  );    
}