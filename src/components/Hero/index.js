// Components
import ServiceCard from '../ServiceCard';

// Images
import { ReactComponent as Frame1 } from '../../assets/images/frame_1.svg';
import frame2 from '../../assets/images/frame_2.png';
import productManagementLogo from '../../assets/images/product_management_logo.png';
import appleLogo from '../../assets/images/apple_logo.png';
import androidLogo from '../../assets/images/android_logo.png';
import computerLogo from '../../assets/images/computer_logo.png';
import { ReactComponent as DecorationLayer2 } from '../../assets/images/decoration_layer_2.svg';
import frame3 from '../../assets/images/frame_3.png';
import { ReactComponent as DecorationLayer3 } from '../../assets/images/decoration_layer_3.svg';
import frame4 from '../../assets/images/frame_4.png';

// Styles
import styles from './Hero.module.scss';
import ClientCard from '../ClientCard';

// External
import { Carousel } from '@trendyol-js/react-carousel';

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
            Our Company
          </button>
          <button type='button' className='secondary'>
            Learn More
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

      <section className={styles.section4}>
        <DecorationLayer2 />
        <div>
          <h1>
            Our App <span>Development Services</span>
          </h1>
          <p>
            We focus on delivering world-class quality and bespoke application
            development solutions that expand your reach, improve your customer
            engagement, and take your business to the next level.
          </p>
          <button type='button' className='primary'>
            Our Services
          </button>
        </div>
        <img src={frame3} alt='Boy working on computer' />
      </section>

      <section className={styles.section5}>
        <DecorationLayer3 />
        <img src={frame4} alt='People looking at tablet' />
        <div>
          <h1>
            We Are Transforming the
            <span>Digital Landscape</span>
          </h1>
          <p>
            We take care of your business needs by bringing novel digital
            experiences to the table by flawlessly integrating design &
            development. Our team offers end-to-end full stack development
            services blended with
          </p>
          <button type='button' className='primary'>
            Free Consultation
          </button>
        </div>
      </section>
      <section className={styles.section6}>
        <DecorationLayer2 />
        <Carousel show={3.5} slide={3} swiping={true}>
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </Carousel>
      </section>
    </>
  );
};

export default Hero;
