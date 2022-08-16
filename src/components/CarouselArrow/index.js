import styles from './CarouselArrow.module.scss';

const CarouselArrow = ({ arrow, arrowName }) => {
  return (
    <div
      className={
        arrowName === 'arrowLeft'
          ? [styles.carouselArrow, styles.leftArrow, arrowName].join(' ')
          : [styles.carouselArrow, arrowName].join(' ')
      }
    >
      <img src={arrow} alt='arrow' />
    </div>
  );
};

export default CarouselArrow;
