import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import React from "react";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import { Stack } from "@mui/system";
import Avatar from '@mui/material/Avatar';

export const MatrialDemo = () => {
  return (
    <div>
      <Box
        sx={{
          width: 400,
          height: 400,
          bgcolor: "primary.main",
          color: "primary.contrastText",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 32,
          fontWeight: "bold",
          "&:hover": {
            bgcolor: "primary.dark",
          },
        }}
      ></Box>
      <Button disabled>Click Me</Button>
      {/* <Button variant="contained" color="primary" endIcon={<SendSharpIcon/>}>Click Me</Button> */}
      <SendSharpIcon />
      <Button variant="contained" color="primary" startIcon={<SendSharpIcon />}>
        Click Me
      </Button>
      <Fab>
        <SendSharpIcon />
      </Fab>
     
      
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      <Avatar>H</Avatar>

    </div>
  );
};
