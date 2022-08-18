import FooterList from '../FooterList';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className='footerContent'>
        <FooterList />
        <FooterList />
        <FooterList />
        <FooterList />
      </div>
      <div className='break'></div>
      <div className='copyright'></div>
    </div>
  );
};

export default Footer;
