import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {useForm} from "react-hook-form"; 
import { useAddTutorial } from "./UserService";

export const AddTutorialQueryImpls = () => {
    const  res = useAddTutorial()

    const {register,handleSubmit,formState:{errors}} = useForm();
    const theme = createTheme();
    const submit = (data) =>{
        var tutorial = {
            title:data.title,
            description:data.description,
            published: data.published === "true" ? true : false,
            fees:data.fees,
        }
        res.mutate(tutorial);
        res.isSuccess && alert("success")
    }
    

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add tutorial
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit(submit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="title"
                name="title"
                autoFocus
                {...register("title")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="description"
                name="description"
                autoFocus
                {...register("description")}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                
                label="published"
                name="published"
                autoFocus
                {...register("published")}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="fees"
                label="fees"
                name="fees"
                autoFocus
                {...register("fees")}
              />
              
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add tutorial
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          
        </Container>
      </ThemeProvider>
    </div>
  );
};
