// Components
import ServiceCard from '../ServiceCard';
import Carousel from '../Carousel';

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
import person1 from '../../assets/images/person_1.png';
import person2 from '../../assets/images/person_2.png';
import person3 from '../../assets/images/person_3.png';
import person4 from '../../assets/images/person_4.png';
import logo from '../../assets/images/logo.png';

// Styles
import styles from './Hero.module.scss';
import ClientCard from '../ClientCard';

// External
import QuoteForm from '../QuoteForm';

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
          <div className='buttons'>
            <button type='button' className='primary'>
              Free Consultation
            </button>
            <button type='button' className='secondary'>
              Read More
            </button>
          </div>
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
          <div className='buttons'>
            <button type='button' className='primary'>
              Our Company
            </button>
            <button type='button' className='secondary'>
              Learn More
            </button>
          </div>
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
          <div className='buttons'>
            <button type='button' className='primary'>
              Our Services
            </button>
          </div>
        </div>
        <img src={frame3} alt='Boy working on computer' />
      </section>

      <section className={styles.section5}>
        <DecorationLayer3 />
        <img src={frame4} alt='People looking at tablet' />
        <div>
          <h1>
            We Are Transforming the <span>Digital Landscape</span>
          </h1>
          <p>
            We take care of your business needs by bringing novel digital
            experiences to the table by flawlessly integrating design &
            development. Our team offers end-to-end full stack development
            services blended with
          </p>
          <div className='buttons'>
            <button type='button' className='primary'>
              Free Consultation
            </button>
          </div>
        </div>
      </section>
      <section className={styles.section6}>
        <DecorationLayer2 />
        <h1>
          Client <span>Commentaries</span>
        </h1>
        <Carousel>
          <ClientCard
            image={person1}
            title='Wade Warren'
            text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered'
          />
          <ClientCard
            image={person2}
            title='Esther Howard'
            text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered'
          />
          <ClientCard
            image={person3}
            title='Guy Hawkins'
            text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered'
          />
          <ClientCard
            image={person4}
            title='Kristin Watson'
            text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered'
          />
        </Carousel>
      </section>

      <section className={styles.section7}>
        <h1>
          Project <span>Budget</span>
        </h1>
        <QuoteForm />
      </section>

      <h1>
        Featured <span>Projects</span>
      </h1>

      <section className={styles.section8}>
        <div className='form-container'>
          <div className='text'>
            <img src={logo} alt='Company Logo' />
            <h3>Technology quickly and effectively</h3>
            <p>Get a quote for your project with our company</p>
          </div>
          <div className='form'>
            <input type='email' name='email' placeholder='Email' />
            <button type='button'>Send</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
