import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
	const { nodes, materials } = useGLTF("/model.gltf");
	return (
		<group {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Plane.geometry}
				material={materials["Material.002"]}
				scale={7.07}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube001.geometry}
				material={materials["Material.001"]}
				position={[-2.61, 0, 3.198]}
				scale={[1, 1, 2.279]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube002.geometry}
				material={materials["Material.001"]}
				position={[-0.87, 0, 3.198]}
				scale={[1, 1, 2.279]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube003.geometry}
				material={materials["Material.001"]}
				position={[0.823, 0, 3.198]}
				scale={[1, 1, 2.279]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube004.geometry}
				material={materials["Material.001"]}
				position={[3.067, 0, 3.198]}
				scale={[1, 1, 2.279]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube005.geometry}
				material={materials["Material.001"]}
				position={[0.039, 0, 0.456]}
				rotation={[0, 1.571, 0]}
				scale={[1, 1, 2.279]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube006.geometry}
				material={materials["Material.001"]}
				position={[0.039, 0, -1.418]}
				rotation={[0, 1.571, 0]}
				scale={[1, 1, 2.279]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube007.geometry}
				material={materials["Material.001"]}
				position={[0.039, 0, -3.336]}
				rotation={[0, 1.571, 0]}
				scale={[1, 1, 2.279]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube008.geometry}
				material={materials["Material.001"]}
				position={[5.295, 0, 3.198]}
				scale={[1, 1, 2.279]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube009.geometry}
				material={materials["Material.001"]}
				position={[-4.976, 0, 3.198]}
				scale={[1, 1, 2.279]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube010.geometry}
				material={materials["Material.001"]}
				position={[3.067, 0, -2.232]}
				scale={[1, 1, 2.279]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube011.geometry}
				material={materials["Material.001"]}
				position={[-1.43, 0, -1.418]}
				rotation={[0, 1.571, 0]}
				scale={[1, 1, 2.279]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cube012.geometry}
				material={materials["Material.001"]}
				position={[-2.899, 0, -1.418]}
				rotation={[0, 1.571, 0]}
				scale={[1, 1, 2.279]}
			/>
		</group>
	);
}

useGLTF.preload("/model.gltf");
