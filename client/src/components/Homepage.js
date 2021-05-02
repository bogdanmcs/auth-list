import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import ShowUsers from './ShowUsers'


const Homepage = props => {
    const history = useHistory()
    const location = useLocation()
    const [username, setUsername] = useState('')

    useEffect(() => {
        if(location && location.state && location.state.detail){
            setUsername(location.state.detail); 
        } else {
            history.push('/');
        }
    }, [location]);

    return (
        <div>
            <h1> Logged in, {username}!</h1>
            <Link to="/">
                <div className="testc">
                <button className="btn-lr"> Sign out </button>
                </div>
            </Link>
            <ShowUsers/>
        </div>
    )
}

export default Homepage
