import { useState } from 'react';
import { ReactComponent as DownArrow } from '../../assets/images/arrow_down.svg';
import styles from './FooterList.module.scss';

const FooterList = ({ heading, items, name }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((expanded) => !expanded);
  };

  return (
    <div className={styles.footerList}>
      <h3 onClick={toggleExpand}>
        {heading} <DownArrow className={expanded ? styles.upArrow : null} />
      </h3>
      <ul className={expanded ? styles.expanded : styles.notExpanded}>
        {items.map((item, index) => (
          <li key={index} className={name}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
