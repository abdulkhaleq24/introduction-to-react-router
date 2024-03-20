import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    {/* <Link to="/users">Users</Link> */}
                    <NavLink to="/users">Users</NavLink>
                    <Link to="/posts">Posts</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;