import React, { useState } from "react";
import MapSetup from "../components/MapSetup";
import { Canvas } from "@react-three/fiber";
import { Box, Button, Stack, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function SetupPage() {
  const [points, setPoints] = useState({});
  const [topView, setTopView] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [edges, setEdges] = useState({});

  const handleDownload = () => {
    downloadJSON(points, "nodes.json");
    downloadJSON(edges, "edges.json");
  };

  return (
    <Box display={"flex"} height={"100%"} gap={2}>
      <Box
        flex={1}
        borderRadius={2}
        overflow={"hidden"}
        height={"100%"}
        bgcolor={"#b9b9b9"}
      >
        <Canvas>
          <MapSetup
            edges={edges}
            selectedNode={selectedNode}
            points={points}
            setPoints={setPoints}
            topView={topView}
          />
        </Canvas>
      </Box>
      <Box width={"40rem"}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDownload}
          sx={{ my: 2 }}
        >
          Download Nodes and Edges
        </Button>
        <Sidebar
          edges={edges}
          setEdges={setEdges}
          setSelectedNode={setSelectedNode}
          setTopView={setTopView}
          points={points}
          setPoints={setPoints}
          selected={selectedNode}
        />
      </Box>
    </Box>
  );
}

export default SetupPage;
