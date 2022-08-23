import styles from './Nav.module.scss';
import logo from '../../assets/images/company_logo.png';
import { ReactComponent as DecorationLayer1 } from '../../assets/images/decoration_layer_1.svg';
import { useState } from 'react';

const Nav = () => {
  const [active, setActive] = useState(false);

  const toggleClass = () => {
    setActive((active) => !active);
  };

  return (
    <nav className={styles.nav}>
      <main>
        <img src={logo} alt='Company Logo' />
        <div className='hamburger-lines' onClick={toggleClass}>
          <span
            className={['line', active ? styles.line1 : null].join(' ')}
          ></span>
          <span
            className={['line', active ? styles.line2 : null].join(' ')}
          ></span>
          <span
            className={['line', active ? styles.line3 : null].join(' ')}
          ></span>
        </div>
        <div className={['navMenu', active ? 'menuOpen' : null].join(' ')}>
          <ul className='navOptions'>
            <li className='active'>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Technologies</li>
          </ul>
          <div className='navRight'>
            <button className='contactUs'>Contact Us</button>
          </div>
        </div>
      </main>
      <DecorationLayer1 />
    </nav>
  );
};

export default Nav;
