import Spline from '@splinetool/react-spline';
import { useEffect, useRef } from 'react';

export default function ResponsiveSpline() {
  const splineRef = useRef(null);

  useEffect(() => {
    const adjustCameraZoom = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Adjust the camera zoom level for mobile vs desktop
      if (width <= 768) {
        // Reduce the zoom effect on smaller screens
        splineRef.current.scene.setCamera({ fov: 70 });
      } else {
        // Keep the default for larger screens
        splineRef.current.scene.setCamera({ fov: 50 });
      }
    };

    window.addEventListener('resize', adjustCameraZoom);
    adjustCameraZoom(); // Initial call

    return () => window.removeEventListener('resize', adjustCameraZoom);
  }, []);

  return (
    <div className="spline-container">
      <Spline ref={splineRef} scene="https://prod.spline.design/dxHvoztIFiobRBsO/scene.splinecode" />
    </div>
  );
}
