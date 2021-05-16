import { Link } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useLocation, useHistory } from "react-router-dom"
import ShowUsers from './ShowUsers'
import Axios from 'axios';

const Homepage = props => {
    const history = useHistory()
    const location = useLocation()
    const [username, setUsername] = useState('')
    const [notificationsList, setNotificationsList] = useState([])

    useEffect(() => {
        const us = localStorage.getItem('user-username');

        if(us){
            setUsername(us); 
        } else {
            history.push('/');
        }
    }, [location]);

    const refreshNots = () => {
            const toUser = localStorage.getItem('user-username')

            Axios.post('http://localhost:3001/api/get-notifications', {toUser: toUser})
            .then((response) => {
                if(response.data !== "NO_NOTIFICATIONS"){
                    setNotificationsList(response.data);
                } 
            
            }).catch(error => alert("Error: cannot receive notifications"))
    }

    const closeNotification = (fromUser) => {
        const toUser = localStorage.getItem('user-username')

            Axios.put('http://localhost:3001/api/set-notifications', {fromUser: fromUser, toUser: toUser})
            .then((response) => {
                if(response.data.length !== "CANNOT_DELETE_NOTIFICATION"){
                } 
            }).catch(error => alert("Error: cannot close notification"))
    }

    return (
        <div>
            <h1> Logged in, {username}!</h1>
            <Link to="/">
                <div className="testc">
                    <button className="btn-lr" onClick={() => {
                        localStorage.removeItem('user-username');
                    }}> Sign out </button>
                </div>
            </Link>
            
            <div className="testc">
                <button className="btn-lr" onClick={refreshNots}>Refresh notifications</button>
                <div className="nots">

                { notificationsList !== [] &&
                        notificationsList.map(noti => {
                            return <div className="notification">
                                    <p key={noti.fromUser}> {noti.fromUser} pinged you 
                                        <span className="span-close-noti"onClick={() => closeNotification(noti.fromUser)}>Close</span>
                                    </p>
                                </div>
                        })
                }
                </div>
            </div>

            <ShowUsers fromUser={username}/>
        </div>
    )
}

export default Homepage
