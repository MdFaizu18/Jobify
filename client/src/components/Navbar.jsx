import Wrapper from '../assets/wrappers/Navbar.js';
import { HiMenuAlt1 } from 'react-icons/hi';
import Logo from './Logo';
import LogoutContainer from './LogoutContainer.jsx';
import { useDashboardContext } from '../pages/DashboardLayout.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const Navbar = () => {
  const {toggleSidebar} = useDashboardContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <HiMenuAlt1 />
        </button>
        <div>
          <Logo />
          <h4 className='logo-text'>dashboard</h4>
        </div>
        <div className='btn-container'>
        <ThemeToggle/>
        <LogoutContainer/>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

