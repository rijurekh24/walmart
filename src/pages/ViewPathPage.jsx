// src/pages/ViewPathPage.js
import React from "react";
import PathViewer from "../components/PathViewer";
import { Canvas } from "@react-three/fiber";

function ViewPathPage() {
	return (
		<div style={{ height: "100vh" }}>
			<Canvas>
				<PathViewer />
			</Canvas>
		</div>
	);
}

export default ViewPathPage;
