import styles from './FooterList.module.scss';

const FooterList = ({ heading, list }) => {
  return (
    <div className={styles.footerList}>
      <h3>About Us</h3>
      <ul>
        <li>Something something</li>
        <li>Something something</li>
        <li>Something something</li>
      </ul>
    </div>
  );
};

export default FooterList;
