import { OrbitControls, Sky, Environment, Lightformer } from "@react-three/drei";
import { useRef } from 'react'
import * as THREE from 'three'
import { useControls } from 'leva'

const Scene = () => {
  const lightRef = useRef();
  // destructuring
  const {sunPosition} = useControls("하늘", {sunPosition: {value: [0,1,0]}});
  const {m} = useControls("mesh 강도", {m: {value:1, min:0, max:5}});
  return (
    <>
      <OrbitControls />
      <directionalLight castShadow ref={lightRef}/>
      <Environment background files={"./envMap/1.hdr"}>
        {/* <Lightformer position-z={-1} scale={5} color="#ffff00" /> */}
      </Environment>
      <mesh castShadow>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#CC3941" />
      </mesh>
    </>
  );
};

export default Scene;
