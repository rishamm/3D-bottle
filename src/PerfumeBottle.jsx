/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useFrame } from "@react-three/fiber";



const PerfumeBottle = () => {
   const [oilMix, setOilMix] = useState({
      lavender: 50,
      sandalwood: 30,
      rose: 20,
      total: 100,
    });
  
  const bottleRef = useRef();

  // Rotate the bottle slightly over time
  useFrame(() => {
    if (bottleRef.current) {
      bottleRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 5]} intensity={1} />
    <mesh ref={bottleRef} position={[0, -1, 0]}>
      {/* Perfume bottle shape */}
      <cylinderGeometry args={[1, 1, 3, 32]} />
      {/* Material changes based on oil mix */}
      <meshStandardMaterial color="purple" />
    </mesh>
    </Canvas>
  );
};

// Validate Props
PerfumeBottle.propTypes = {
  oilMix: PropTypes.shape({
    lavender: PropTypes.number.isRequired,
    sandalwood: PropTypes.number.isRequired,
    rose: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  }),
};

export default PerfumeBottle;

