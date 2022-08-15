// Components
import ServiceCard from '../ServiceCard';

// Images
import { ReactComponent as Frame1 } from '../../assets/images/frame_1.svg';
import frame2 from '../../assets/images/frame_2.png';
import productManagementLogo from '../../assets/images/product_management_logo.png';
import appleLogo from '../../assets/images/apple_logo.png';
import androidLogo from '../../assets/images/android_logo.png';
import computerLogo from '../../assets/images/computer_logo.png';

// Styles
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <>
      <section className={styles.section1}>
        <div>
          <h1>
            A company focused on innovation in <span>software creation</span>.
          </h1>
          <p>
            We always seek the best way to help our customers with good agility.
          </p>
          <button type='button' className='primary'>
            Free Consultation
          </button>
          <button type='button' className='secondary'>
            Read More
          </button>
        </div>
        <Frame1 />
      </section>
      <h1>
        Our <span>Company</span>
      </h1>
      <section className={styles.section2}>
        <img src={frame2} alt='Boy and Girl looking at tablet' />
        <div>
          <h1>
            A company specializing in <span>application</span> and
            <span>website</span> development
          </h1>
          <p>
            We always seek the best way to help our customers with good agility.
          </p>
          <button type='button' className='primary'>
            Free Consultation
          </button>
          <button type='button' className='secondary'>
            Read More
          </button>
        </div>
      </section>
      <h1>
        Our <span>Services</span>
      </h1>
      <section className={styles.section3}>
        <ServiceCard logo={productManagementLogo} title='Product Management' />
        <ServiceCard logo={appleLogo} title='iOS Development' />
        <ServiceCard logo={androidLogo} title='Android Development' />
        <ServiceCard logo={computerLogo} title='Web Development' />
      </section>
    </>
  );
};

export default Hero;
