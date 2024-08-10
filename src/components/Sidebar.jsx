import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { DataGrid, GridDeleteIcon } from "@mui/x-data-grid";

const Sidebar = ({
  setTopView,
  points,
  setPoints,
  setSelectedNode,
  selected,
  edges,
  setEdges,
}) => {
  console.log(selected);

  const rows = useMemo(
    () =>
      Object.entries(points).map(([key, value], idx) => ({
        id: key,
        x: parseFloat(value.x).toFixed(2),
        y: parseFloat(value.y).toFixed(2),
        z: parseFloat(value.z).toFixed(2),
        name: value.name,
      })),
    [points]
  );

  useEffect(() => {
    console.log(edges);
  }, [edges]);
  const columns = [
    {
      field: "x",
      editable: true,
    },
    {
      field: "z",
      headerName: "z",
      editable: true,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      editable: true,
    },
    {
      field: "actions",
      flex: 1,
      headerName: "Actions",
      renderCell: (params) => {
        return (
          <Box display={"flex"} gap={1} alignItems={"center"} height={"100%"}>
            <IconButton
              variant="contained"
              size="small"
              onClick={() => {
                let new_nodes = { ...points };
                delete new_nodes[params.id];
                setPoints(new_nodes);
              }}
            >
              <GridDeleteIcon />
            </IconButton>
            <Button
              onClick={() => {
                setSelectedNode(params.id);
              }}
            >
              view
            </Button>
          </Box>
        );
      },
    },
  ];

  const value = points[selected];

  return (
    <>
      <Box display={"flex"} gap={1} sx={{}}>
        <Button
          variant={"contained"}
          size={"small"}
          onClick={() => setTopView(true)}
        >
          top view
        </Button>
        <Button
          variant={"contained"}
          size={"small"}
          onClick={() => setTopView(false)}
        >
          perspective view
        </Button>
      </Box>

      <Box mt={2} height={"15rem"} overflow={"auto"}>
        <DataGrid
          density="compact"
          rows={rows}
          autoHeight
          disableColumnMenu
          hideFooter
          disableColumnResize
          experimentalFeatures={{ newEditingApi: true }}
          columns={columns}
          processRowUpdate={(newRow) => {
            const updatedRow = { ...newRow };

            setPoints((prevNodes) => {
              const newNodes = { ...prevNodes };
              let id = newRow.id;
              newNodes[id] = { ...newRow };

              return newNodes;
            });

            return updatedRow;
          }}
        />
      </Box>

      {value && (
        <Box>
          <Typography fontSize={"1.3rem"}>Paths</Typography>
          <Stack>
            <Box>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <Typography
                  p={1}
                  bgcolor={"#eee"}
                  fontWeight={500}
                  width={"fit-content"}
                >
                  {value.name}
                </Typography>
                <Button
                  size="small"
                  variant="contained"
                  onClick={() => {
                    setEdges((prev) => {
                      const newEdges = {
                        ...prev,
                      };
                      if (!newEdges[value.id]) {
                        newEdges[value.id] = [];
                      }
                      newEdges[value.id] = [
                        ...newEdges[value.id],
                        {
                          name: "",
                          distance: 0,
                        },
                      ];
                      return newEdges;
                    });
                  }}
                >
                  Add Connection
                </Button>
              </Box>
              <Stack gap={2} p={1} mt={1}>
                {edges[selected]?.length > 0 &&
                  edges[selected]?.map((e, i) => (
                    <Box display={"flex"} gap={1} key={i}>
                      <FormControl
                        fullWidth
                        sx={{ width: "15rem" }}
                        size="small"
                      >
                        <InputLabel>Name</InputLabel>
                        <Select
                          value={e?.name}
                          label="Name"
                          onChange={(e) => {
                            setEdges((prev) => {
                              const newEdges = {
                                ...prev,
                              };
                              newEdges[selected][i].name = e.target.value;
                              if (!newEdges[e.target.value]) {
                                newEdges[e.target.value] = [];
                              }
                              newEdges[e.target.value].push({
                                name: selected,
                                distance: 0,
                              });

                              return newEdges;
                            });
                          }}
                        >
                          {Object.values(points)?.map(
                            (e, i) =>
                              e.id != selected && (
                                <MenuItem value={e.id} key={i}>
                                  {e.name}
                                </MenuItem>
                              )
                          )}
                        </Select>
                      </FormControl>
                      <TextField
                        label="distance"
                        size="small"
                        value={e.distance}
                        onChange={(e) => {
                          setEdges((prev) => {
                            const newEdges = {
                              ...prev,
                            };
                            newEdges[selected][i].distance =
                              e.target.value < 0 ? 0 : e.target.value;

                            const u_node =
                              newEdges[newEdges[selected][i]?.name];

                            if (u_node) {
                              u_node.find(
                                (e) => e.name && e.name == selected
                              ).distance = e.target.value;
                            }

                            return newEdges;
                          });
                        }}
                      />

                      <IconButton
                        color="error"
                        onClick={() => {
                          setEdges((prev) => {
                            const new_edges = {
                              ...edges,
                            };
                            delete edges[selected][i];
                            return new_edges;
                          });
                        }}
                      >
                        <GridDeleteIcon />
                      </IconButton>
                    </Box>
                  ))}
              </Stack>
            </Box>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Sidebar;
