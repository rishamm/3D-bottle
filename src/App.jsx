import React, { lazy, Suspense } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

export default function App() {
  return (
    <div className="w-full"style={{width:"100%"}}>


    <Suspense fallback={<div>Loading...</div>}>
      <Spline scene="https://prod.spline.design/dxHvoztIFiobRBsO/scene.splinecode" />
    </Suspense></div>
  );    
}