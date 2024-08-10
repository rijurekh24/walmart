import React, {
  useEffect,
  useLayoutEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { Model } from "../components/model";
import {
  CameraControls,
  Environment,
  Line,
  OrbitControls,
  Outlines,
  PerspectiveCamera,
  Text,
  useHelper,
} from "@react-three/drei";
import { CameraHelper, Vector3 } from "three";
import { useFrame } from "@react-three/fiber";

const MapSetup = ({ points, setPoints, topView, selectedNode, edges }) => {
  const ref = useRef();

  useEffect(() => {
    if (topView) {
      ref.current.lookAt(0, 0, 0);
    } else ref.current.lookAt(0, -3, 0);
  }, [topView]);

  // console.log(Object.values(points).map((e) => [e.x, e.y, e.z]));

  return (
    <>
      <PerspectiveCamera
        makeDefault
        ref={ref}
        args={[45, 1, 0.1, 1000]}
        position={topView ? [0, 15, 0] : [8, 18, 8]}
      />
      <directionalLight intensity={3} position={[-10, 5, 10]} />
      <ambientLight intensity={2} />
      <OrbitControls enablePan={false} enableRotate={!topView} />
      <mesh
        position={[0, 0, 0]}
        onDoubleClick={(e) => {
          e.stopPropagation();
          let p = e.point;
          let id = Date.now();

          let newPoints = { ...points };
          newPoints[`node_${id}`] = {
            x: p.x,
            y: p.y + 0.2,
            z: p.z,
            name: `node_${id}`,
            id: `node_${id}`,
          };

          setPoints(newPoints);
          console.log(e.point);
        }}
      >
        <Model />

        {Object.values(points)?.map((e, i) => {
          return (
            <mesh key={i} position={[e.x, e.y, e.z]}>
              <sphereGeometry
                args={[selectedNode == e.id ? 0.15 : 0.1, 64, 32]}
              />
              <meshStandardMaterial
                color={selectedNode == e.id ? "red" : "blue"}
              />
              <Text
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0.05, 0.2, -0.3]}
                color={"#000"}
                fontSize={0.3}
              >
                {e.name}
              </Text>
            </mesh>
          );
        })}

        {Object.entries(edges)?.map(([key, value], idx) => {
          return value?.map((v, i) => {
            const p1 = points[key];
            const p2 = points[v.name];

            return (
              v.name &&
              points[key] &&
              points[v.name] && (
                <Line
                  key={i}
                  points={[
                    [p1.x, p1.y, p1.z],
                    [p2.x, p2.y, p2.z],
                  ]}
                  lineWidth={4}
                  color={"yellow"}
                />
              )
            );
          });
        })}
      </mesh>
    </>
  );
};

export default MapSetup;
