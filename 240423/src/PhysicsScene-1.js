import { CuboidCollider, Debug, Physics, RigidBody } from "@react-three/rapier";

//1)react three rapier Github page: https://pmndrs.github.io/react-three-rapier/
//2)rapier official page:https://rapier.rs/docs/user_guides/javascript/colliders/#mass-properties

const PhysicsScene = () => {
  return (
    <Physics gravity={[0, -9.81, 0]}>
      <Debug />
      <RigidBody colliders={false} position={[1.5, 1.5, 0]} >
        <CuboidCollider args={[0.5, 0.5, 0.5]} />
        <CuboidCollider args={[0.75, 0.25, 0.25]} position={[-2, -1, -2.5]} />
        <mesh castShadow position={[1.5, 1.5, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="#CC3941"/>
        </mesh>
      </RigidBody>
      {/* <RigidBody colliders="hull"> */}
      <RigidBody colliders="trimesh">
        <mesh position={[-1.5, 1.5, 0]}>
          <torusKnotGeometry args={[0.5, 0.15, 100, 100]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </RigidBody>
      <RigidBody colliders="ball">
        <mesh position={[0, 1.5, -1.5]}>
          <sphereGeometry args={[0.75, 64, 64]} />
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
