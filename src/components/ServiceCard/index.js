import styles from './ServiceCard.module.scss';

const ServiceCard = ({ logo, title }) => {
  console.log(logo);

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
