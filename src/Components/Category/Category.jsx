import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Category = () => {
  var[inputs,setinputs]=useState({
    "Cname":'',
    "Status":"Active"
  })
  // const [ca,setCa]=useState('');
  // const[error,setError]=useState(false);
  // const navigate=useNavigate()

  const readcategory =(event) =>{
    const{name,value}=event.target
    setinputs((inputs)=>({...inputs,[name]:value}))
    console.log(inputs)
  }
    // event.preventDefault();
    // console.log(event.target.value);
    // setCa(event.target.value);
  

    const checkfilldata=() =>{
      console.log("Clicked")
      console.log(inputs)
      axios.post("http://localhost:3005/new",inputs)
      .then((response)=>{
        alert("Record Saved")
      })
      .catch(err=>console.log(err))
      // event.preventDefault();
      // if(ca.trim ()==='')
      // {
      //  setError(true);
      //  return;
      // }
    //  else{
    //   navigate("/s");
    //   // props.checkLogin(un,pwd);
    //  }
  
  }


  return (
    <div>
      <h3>Category</h3>
      <TextField label="category name" variant="outlined" name="Cname" value={inputs.Cname}onChange={readcategory}/><br/><br/>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Status</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    name="Status" value={inputs.Status}
onChange={readcategory}    
   
    // label="Status"
 
  >
    <MenuItem value={"Active"}>Active</MenuItem>
    <MenuItem value={"InActive"}>InActive</MenuItem>
    
  </Select>
</FormControl><br/><br/><br/>
      <Button variant="contained"onClick={checkfilldata}>Submit</Button>
    </div>
  )
}

export default Category
