import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                Student Marks Calculator
            </div>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>

                <NavLink to="/calculator">Calculator</NavLink>

                <NavLink to="/results">Results</NavLink>
            </div>

        </nav>
    );
}

export default Navbar;