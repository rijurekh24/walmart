import { Box } from "@mui/material";
import React from "react";

const Header = ({ children }) => {
  return (
    <Box>
      <Box
        sx={{
          height: "2rem",
          px: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        Indoor Mapping
      </Box>
      <Box p={1} height={"calc(100vh - 2rem)"}>
        {children}
      </Box>
    </Box>
  );
};

export default Header;
