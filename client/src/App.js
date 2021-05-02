import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
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

  return (
    <Router>
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
    </Router>
  )
}

export default App;
