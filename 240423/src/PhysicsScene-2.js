import { CuboidCollider, Debug, Physics, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

//1)react three rapier Github page: https://pmndrs.github.io/react-three-rapier/
//2)rapier official page:https://rapier.rs/docs/user_guides/javascript/colliders/#mass-properties

const PhysicsScene = () => {
  const cubeRef = useRef()
  const cubeClickHandler = () => {
    // cubeRef.current.applyImpulseAtPoint(
    // cubeRef.current.addTorque(
    cubeRef.current.applyTorqueImpulse(
      {x: 2, y: 7, z: 0},
      {x: 2, y: 0, z: 0}
      )
  }
  const secondCubeClickHandler = () => {
    secondCubeRef.current.applyImpulse(
      {x: 8, y: 0, z: 0}
    )
  }

  return (
    <Physics gravity={[0, -9.81, 0]}>
      <Debug />
      <RigidBody ref={cubeRef} >
        <mesh castShadow position={[1.5, 1.5, 0]} onClick={cubeClickHandler}>
          <boxGeometry />
          <meshStandardMaterial color="#CC3941"/>
        </mesh>
      </RigidBody>
      <RigidBody>
        <mesh position={[-1.5, 1.5, 0]} onDoubleClick={cubeClickHandler}>
          <boxGeometry />
          <meshStandardMaterial color="#CC3941"  />
        </mesh>
      </RigidBody>
      <RigidBody>
        <mesh >
          {/* <boxGeometry /> */}
          <meshStandardMaterial color="#23B278" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed">
      {/* <RigidBody colliders="cuboid"> */}
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
          <boxGeometry args={[8, 8, 0.35]} />
          <meshStandardMaterial color="#C7CAC7" />
        </mesh>
      </RigidBody>
    </Physics>
  );
};

export default PhysicsScene;
