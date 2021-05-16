import { useState, useEffect } from 'react'
import { Route, useHistory, withRouter} from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Register from './components/Register'
import Footer from './components/Footer'
import Readme from './components/Readme'
import Homepage from './components/Homepage'

function App() {
  const [showLogin, setShowLogin] = useState(true)
  const [showRegister, setShowRegister] = useState(false)
  const [user, setUser] = useState('')
  let history = useHistory();

  useEffect(() => {
    const username = localStorage.getItem('user-username');

    if(username){
      history.push("/homepage");
    }
}, []);

  return (
    <div className="container">
      <Header title="Authentification" onShow={(s) => { 
        if(s.target.innerText === "Login") {setShowLogin(true); setShowRegister(false)}
        else {setShowLogin(false); setShowRegister(true)}}}/> 

    <Route path='/homepage' exact component={Homepage}/> 

    <Route path='/' exact render={(props) => (
        <>
          {showLogin && <Login  user={user}/>}
        {showRegister && <Register/>}
        </>
    )} />
    
    <Route path='/readme' component={Readme}/>

      <Footer />
    </div>
  )
}

export default withRouter(App);
