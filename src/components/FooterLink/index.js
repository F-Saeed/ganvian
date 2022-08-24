import styles from './FooterLink.module.scss';


const FooterLink = ({ Image }) => {
  return (
    <div className={styles.footerLink}>
      <Image />
    </div>
  );
};

export default FooterLink;
