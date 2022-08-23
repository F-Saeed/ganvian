import { useState } from 'react';
import styles from './FooterList.module.scss';

const FooterList = ({ heading, items }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((expanded) => !expanded);
  };

  return (
    <div className={styles.footerList}>
      <h3 onClick={toggleExpand}>{heading}</h3>
      <ul className={expanded ? styles.expanded : styles.notExpanded}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
