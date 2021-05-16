const AuthSuccess = ({ userName, onClick}) => {
    return (
        <div>
            <h1> Logged in, {userName}</h1>
            <input type="submit" value="sign out" onClick={onClick}/>
        </div>
    )
}
 
export default AuthSuccess