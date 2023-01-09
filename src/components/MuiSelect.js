import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const MuiSelect = () => {
  const [age, setAge] = React.useState("");
  const { register, handleSubmit } = useForm();
  const [data, setdata] = useState();

  useEffect(() => {
    getStudentAdminssionType();
  }, []);

  const getStudentAdminssionType = async () => {
    await axios
      .get("http://localhost:3000/stuadmtype/getAllAdmissionType")
      .then((response) => {
        console.log(response.data);
        setdata(response.data.data);
      });
  };
  const handleChange = (event) => {
    console.log(event.target.value);
    setAge(event.target.value);
  };
  const submit = (data) => {
    console.log(data);
  };
  return (
    
    <div> 
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            
          >
            { data && data.length > 0 ? 
              data.map((item) => {
              return (
                <MenuItem value={item._id}>
                  {item.admissionType}
                </MenuItem>
              );
            })  : null
        }
          </Select>
        </FormControl>
      
      <Button
        onClick={handleSubmit(submit)}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Signup
      </Button>

        
    </div>

        
  );
};
