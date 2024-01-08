import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
 
const Login = (props) => {
    const [un,setUn]=useState('');
    const [pwd,setPwd]=useState('');
    const[error,setError]=useState(false);
   const Navigate=useNavigate()

    const readusername =(event) =>{
        event.preventDefault();
        console.log(event.target.value);
        setUn(event.target.value);
    }
        const readpassword =(event) =>{
            event.preventDefault();
            console.log(event.target.value);
            setPwd(event.target.value);
    }
    const checkfilldata=(event) =>{
        event.preventDefault();
        if(un.trim ()===''||pwd==='')
        {
         setError(true);
         return;
        }
       else{
        Navigate("/Home");
        // props.checkLogin(un,pwd);
       }
    }
 
  return (
    <div>
        <h3>Login page</h3>
      <TextField id="outlined-basic"label="Username" variant="outlined" onChange={readusername}/><br/><br/>
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"onChange={readpassword}
        /><br/><br/>
      <Button variant="contained"onClick={checkfilldata}><Link to='/h'>Ok</Link></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="contained">cancel</Button>{error&&'error occured'}
    </div>
  )
}

export default Login
