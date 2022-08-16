import styles from './ClientCard.module.scss';

const ClientCard = ({ image, title, text }) => {
  return (
    <div className={styles.clientCard}>
      <div>
        <img src={image} alt='person' />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ClientCard;
