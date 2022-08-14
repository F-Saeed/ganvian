import styles from './Nav.module.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as ArrowDown } from '../../assets/images/arrow_down.svg';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <main>
        <Logo />
        <div className='navOptions'>
          <div className='active'>Home</div>
          <div>Services</div>
          <div>About Us</div>
          <div>Technologies</div>
        </div>
        <div className='navRight'>
          <div className='dropdown'>
            <button className='dropdownBtn'>
              En
              <ArrowDown />
            </button>
            <div class='dropdown-content'>
              <div>Es</div>
              <div>Fr</div>
            </div>
          </div>
          <button className='contactUs'>Contact Us</button>
        </div>
      </main>
    </nav>
  );
};

export default Nav;
