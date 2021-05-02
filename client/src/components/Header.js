import Button from './Button'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

const Header = ({title, onShow}) => {
    const location = useLocation()

    return (
        <div>
            {location.pathname === '/' && <> <header className='header'> {title} </header>
            <div className="btnWrap">
                <Button className="btn1" name="btnShowLogin" text="Login" onClick1={onShow}/>
                <Button className="btn2" name="btnShowRegister" text="Register" onClick2={onShow}/>
            </div> </>
            }
        </div>
    )
}

Header.defaultProps = {
    title: "Header default"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
