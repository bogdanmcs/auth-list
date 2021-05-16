const Button = ({className, name, text, onClick1, onClick2}) => {
    return (
        <>  
            <button className={`btn-lr ${className}`} name={`${name}`} type="button" onClick={onClick1 ? onClick1 : onClick2}> {text} </button>
        </>
    )
}

export default Button
