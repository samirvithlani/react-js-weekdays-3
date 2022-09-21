import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import { Stack } from "@mui/system";
import Avatar from '@mui/material/Avatar';
import { Alert, CircularProgress, LinearProgress, Snackbar } from "@mui/material";

export const MatrialDemo = () => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const [progress, setProgress] = useState(0);
  
  useEffect(() => {

    const timer = setInterval(() => {
      setProgress((prevProgress) => ( prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
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

        <Alert onClose={()=>{}} security="success">This is a success alert — check it out!</Alert>
        <CircularProgress variant="determinate" value={progress}/>
        <LinearProgress/>
        <Button variant="outlined" onClick={handleClick}>
  Open success snackbar
</Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>

    </div>
  );
};
