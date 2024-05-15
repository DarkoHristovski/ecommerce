import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="display-flex space-between aNavLinkgn-items">
            <a href="/" className='logo'>Logo</a>
            <nav>
              <ul className="display-flex space-between">
                <li>
                  <NavLink to="/" className={({isActive, isPending})=> isPending ? 'pending' : isActive ? 'active' : ''}>Home</NavLink>
                </li>
                <li>
                <NavLink to="/products" className={({isActive, isPending})=> isPending ? 'pending' : isActive ? 'active' : ''}>Products</NavLink>

                </li>
                <li>
                <NavLink to="/categories" className={({isActive, isPending})=> isPending ? 'pending' : isActive ? 'active' : ''}>Categories</NavLink>

                </li>
                <li>
                <NavLink to="/contact" className={({isActive, isPending})=> isPending ? 'pending' : isActive ? 'active' : ''}>Contact</NavLink>

                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
