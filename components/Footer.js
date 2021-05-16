import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()

    return (
        <footer>
            {location.pathname === '/' && <Link to="/readme">Read me</Link>}
        </footer>
    )
}

export default Footer
