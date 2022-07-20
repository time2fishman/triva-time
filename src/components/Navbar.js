import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        // console.log('Navbar is hooked up!')
        <header>
            <nav id="navbar">
                <Link to='/' className="nav-home">Home</Link>
                <label htmlFor="toggle" className="toggle-label">Dark Mode</label>
                <input type='checkbox' id="toggle" />
            </nav>
        </header>
    )
}

export default Navbar