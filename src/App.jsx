import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

export default function ResponsiveSpline() {
  const [splineScene, setSplineScene] = useState(null);

  useEffect(() => {
    if (!splineScene) return;

    const adjustCameraZoom = () => {
      if (!splineScene) return;
      const width = window.innerWidth;

      if (width <= 768) {
        splineScene.setZoom(0.8); // Adjust zoom for mobile
      } else {
        splineScene.setZoom(1); // Normal zoom for desktop
      }
    };

    window.addEventListener("resize", adjustCameraZoom);
    adjustCameraZoom();

    return () => window.removeEventListener("resize", adjustCameraZoom);
  }, [splineScene]);

  return (
    <div className="spline-container">
      <Spline
        scene="https://prod.spline.design/p4jYwZfhIsFf15sH/scene.splinecode"
        onLoad={(scene) => setSplineScene(scene)}
      />
    </div>
  );
}
