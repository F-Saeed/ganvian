import FooterList from '../FooterList';
import items from '../FooterList/itemsObject';

// Styles
import styles from './Footer.module.scss';

// Logos
import { ReactComponent as facebookLogo } from '../../assets/images/facebook.svg';
import { ReactComponent as linkedinLogo } from '../../assets/images/linkedin.svg';
import { ReactComponent as instagramLogo } from '../../assets/images/instagram.svg';
import { ReactComponent as twitterLogo } from '../../assets/images/twitter.svg';
import FooterLink from '../FooterLink';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='footerContent'>
        <FooterList heading='About Us' items={items['About Us']} />
        <FooterList heading='Services' items={items.Services} />
        <FooterList heading='Products' items={items.Products} />
        <FooterList heading='Contact Us' items={items['Contact Us']} />
      </div>
      <div className='break'></div>
      <div className='copyright'>
        <p className='copyright-text'>2022 Ganvian Company</p>
        <div className='copyright-links'>
          <FooterLink Image={facebookLogo} />
          <FooterLink Image={linkedinLogo} />
          <FooterLink Image={instagramLogo} />
          <FooterLink Image={twitterLogo} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
