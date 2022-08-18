import styles from './FooterList.module.scss';
import items from './itemsObject';

const FooterList = ({ heading, items }) => {
  return (
    <div className={styles.footerList}>
      <h3>{heading}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
