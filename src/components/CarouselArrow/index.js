import styles from './CarouselArrow.module.scss';

const CarouselArrow = ({ arrow, arrowName, onClick }) => {
  return (
    <div
      className={
        arrowName === 'arrowLeft'
          ? [styles.carouselArrow, styles.leftArrow, arrowName].join(' ')
          : [styles.carouselArrow, arrowName].join(' ')
      }
      onClick={onClick}
    >
      <img src={arrow} alt='arrow' />
    </div>
  );
};

export default CarouselArrow;
