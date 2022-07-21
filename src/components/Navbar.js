import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <header>
            <nav id="navbar">
                <ul id="nav-list">
                    <Link to='/' id="nav-home-link">Home</Link>
                    <label htmlFor="toggle" id="dark-mode-label">Dark Mode</label>
                    <input type="checkbox" id="dark-mode-toggle" disabled />
                </ul>
            </nav>
        </header>
    )
}

export default Navbar