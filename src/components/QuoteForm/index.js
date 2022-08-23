import styles from './QuoteForm.module.scss';

const QuoteForm = () => {
  return (
    <div className={styles.quoteForm}>
      <div className='text'>
        <h1>
          Send us your <span>project</span> for a quote
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have
        </p>
        <button>Submit</button>
      </div>
      <div className='form'>
        <input type='text' name='name' id='name' placeholder='Full Name' />
        <input type='email' name='email' id='email' placeholder='Email' />
        <input
          type='number'
          name='phone'
          id='phone'
          placeholder='Phone Number'
        />
        <textarea
          name='description'
          id='description'
          cols='20'
          rows='8'
          placeholder='Project Description'
        ></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default QuoteForm;
