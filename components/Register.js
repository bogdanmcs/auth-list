import { useState } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const pRegister = (e) => {
    e.preventDefault();
    if(username.length === 0){
        alert('fill username field');
    } else if(password.length === 0){
      alert('fill password field');
    } else {
      Axios.post("http://localhost:3001/api/register", {username: username, password: password})
      .then((response) => {
            if(response.data === "") {
              console.log("error: unknown error");
            } else if(response.data === "userE"){
              alert('username already exists');
            } else if(response.data === "error_z1") {
              alert('error: register failed');
            } else {
              console.log("you have registered succesfully!");             
              alert('you have registered succesfully');
              setUsername('');
              setPassword('');
            }
        //console.log(response.data);
      });
    }
  };

    return (
        <Router>
              <form className='add-form' onSubmit={pRegister}>
              <h1>Welcome to the registration form! </h1>

              <div className='form-control'>
                <label>Username </label>
                <input
                  type='text'
                  required value={username} onChange={(e) => {
                    setUsername(e.target.value)
                  }} 
                />
              </div>

              <div className='form-control'>
                <label>Password </label>
                <input
                  type='password'
                  required value={password} onChange={(e) => {
                    setPassword(e.target.value)}}
                />
              </div>

          <input className="auth-input" type='submit' value='Register'/>
        </form>
        </Router>
    )
}

export default Register

