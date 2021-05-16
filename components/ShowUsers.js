import { useState, useEffect } from "react"
import Axios from 'axios';

const ShowUsers = ({ fromUser }) => {
    const [usersList, setUsersList] = useState([])
    const [showUsersToggle, setShowUsersToggle] = useState(false)

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get')
        .then((response) => {
          setUsersList(response.data)
        })
      })

    const showUsers = () => {
        setShowUsersToggle(!showUsersToggle);
        // for(const usx of usersList)
        //     console.log(usx.username);
    }

    const pingUser = (toUser) => {
        Axios.post("http://localhost:3001/api/ping", {fromUser: fromUser, toUser: toUser})
      .then((response) => {
            alert(`You pinged ${toUser}!`);
      }).catch(error => alert("Error: user cannot be pinged!"));
    }

    return (
        <div className="testc">
            <button className="btn-lr" onClick={showUsers}> Show all users </button>
            <div className="show-users-f">
                {showUsersToggle && 
                    usersList.map((user) => {
                        return <h1 className="show-users" key={user.username}>  
                                    <button className="btn-ping" onClick={() => pingUser(user.username)}> {user.username} </button> 
                               </h1>
                    })
                }
             </div>
        </div>
    )
}

export default ShowUsers
