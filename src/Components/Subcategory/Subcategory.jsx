import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'

const Subcategory = () => {
  return (
    <div>
      <h2>Subcategory</h2>
      <TextField id="outlined-basic"label="Subcategory name" variant="outlined"/><br/><br/>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    
    label="category"
    
  >
    <MenuItem value={10}>Cat</MenuItem>
    <MenuItem value={20}>Dog</MenuItem>
    <MenuItem value={30}>Rabbit</MenuItem>
  </Select>
</FormControl><br/><br/>
      <Button variant="contained">Submit</Button>
    </div>
  )
}

export default Subcategory
