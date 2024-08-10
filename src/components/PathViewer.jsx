import { CameraControls, MeshWobbleMaterial, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { clamp } from "three/src/math/MathUtils.js";

const PathViewer = () => {
	const ref = useRef();
	const cameraRef = useRef();
	const inRef = useRef();

	useFrame((state, delta) => {
		ref.current.rotation.y += 1 * delta;
		inRef.current.lookAt(state.camera.position);
	});
	return (
		<>
			<CameraControls ref={cameraRef} dolly={1} />
			<directionalLight position={[5, 5, 5]} />
			<group ref={ref} position={[0, -1, 0]}>
				<mesh position={[1, 0, 0]}>
					<boxGeometry />
					<MeshWobbleMaterial
						wireframeLinewidth={10}
						color={"orange"}
					/>
				</mesh>
				<mesh position={[2, 0, -2]}>
					<boxGeometry />
					<MeshWobbleMaterial color={"green"} />
				</mesh>
				<mesh position={[0, -0.5, 0]}>
					<boxGeometry args={[5, 0.1, 5]} />
					<MeshWobbleMaterial color={"red"} />
				</mesh>
				<Text position={[0, 2, 0]} ref={inRef} >
					text here
				</Text>
			</group>
		</>
	);
};

export default PathViewer;
