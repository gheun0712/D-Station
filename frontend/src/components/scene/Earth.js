import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Earth(props) {
  const { nodes, materials } = useGLTF("/earth.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.AtmosphereInner_AtmosphereInnerSub_0.geometry}
            material={materials.AtmosphereInnerSub}
          />
          <group scale={1.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.AtmosphereOuterA_AtmosphereOuterSubA_0.geometry}
              material={materials.AtmosphereOuterSubA}
            />
          </group>
          <group scale={1.05}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.AtmosphereOuterB_AtmosphereOuterSubB_0.geometry}
              material={materials.AtmosphereOuterSubB}
            />
          </group>
          <group scale={0.99}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Clouds_CloudsSub_0.geometry}
              material={materials.CloudsSub}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0001.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0002.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0003.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0004.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0005.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0006.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0007.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0008.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0009.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0010.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0011.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0012.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0013.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0014.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0015.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0016.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0017.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0018.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0019.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0020.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0021.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0022.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0023.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0024.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0025.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0026.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0027.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0028.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0029.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0030.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0031.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0032.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0033.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0034.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0035.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0036.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0037.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0038.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0039.geometry}
              material={materials.Earth1defaultMat1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Earth_Earth1defaultMat1_0040.geometry}
              material={materials.Earth1defaultMat1}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/earth.glb");
