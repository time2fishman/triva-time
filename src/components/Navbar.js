import './Navbar.css'

function Navbar() {
    return (
        // console.log('Navbar is hooked up!')
        <header>
            <nav id="navbar">
                <a href="#" className="nav-home">Home</a>
                <label htmlFor="toggle" className="toggle-label">DarkMode</label>
                <input type='checkbox' id="toggle" />
            </nav>
        </header>
    )
}

export default Navbar