import styles from './ServiceCard.module.scss';

const ServiceCard = ({ logo, title }) => {
  return (
    <div className={styles.serviceCard}>
      <div>
        <img src={logo} alt='logo' />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
