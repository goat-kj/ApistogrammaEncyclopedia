import '../App.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
      <nav className='nav'>
        <ul>
          <li>
            <Link to="/create" className="text-white">
              Create
            </Link>
          </li>
        </ul>
      </nav>
  );
}

export default NavBar;
