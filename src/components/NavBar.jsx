import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pokemon'>Pokemon</Link>
                </li>
                <li>
                    <Link to='/pokemon/profile'>Pokemon Profiles</Link>
                </li>
                <li>
                    <Link to='/pokemon/new'> New Pokemon form</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;