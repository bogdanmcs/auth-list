import { useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import Axios from 'axios';
import Homepage from './Homepage'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const location = useLocation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const  [loggedIn, setLoggedIn] = useState('')

  function pLogin (e) {
    e.preventDefault();

    const signOut = (e) => {
      setLoggedIn('');
    };

    Axios.post("http://localhost:3001/api/login", {username: username, password: password})
    .then((response) => {
        if(response.data === 'error_badCreds') {
            alert('invalid credentials. try again!');
        } else {
            //alert(`you have successfully logged in, ${response.data}!`);
            console.log(response.data);
            setLoggedIn(response.data);
            setUsername('');
            setPassword('');
            
            history.push({
              pathname: '/homepage',
              state: { detail: response.data }
          });
        }
    })
  }

    return (
          <form className='add-form' onSubmit={pLogin}>
          <h1>Welcome to the login form! </h1>

          <div className='form-control'>
            <label> Username </label>
            <input
              type='text'
              required
              value={username} onChange={(e) => {
                setUsername(e.target.value)
              }} 
            />
          </div>

          <div className='form-control'>
            <label>Password </label>
            <input
              type='password'
              required
              value={password} onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>

            <input className="auth-input" type='submit' value='Login' />
         </form>
    )
}

export default withRouter(Login)
