import { useState, useEffect } from "react"
import Axios from 'axios';

const ShowUsers = () => {
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

    return (
        <div className="testc">
            <button className="btn-lr" onClick={showUsers}> Show all users </button>
            <div className="show-users-f">
                {showUsersToggle && 
                    usersList.map((user) => {
                        return <h1 className="show-users" key={user.username}>  {user.username} </h1>
                    })
                }
             </div>
        </div>
    )
}

export default ShowUsers
