import React from 'react';
import styles from './contact.module.css'; // Importing styles
import { Input } from '@/components/input/Input';
import Button from '@/components/button/Button';

const SectionOne = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Contact Us</h3>

      <ContactForm />
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className={styles.form}>
      <form className={styles.form}>
        <div className={styles.input_group}>
          <input
            label='First Name'
            type='text'
            placeholder='Enter your First Name'
            className={styles.input} // Using styles.input
          />
          <input
            label='Last Name'
            type='text'
            placeholder='Enter your Last Name'
            className={styles.input} // Using styles.input
          />
        </div>
        <div className={styles.input_group}>
          <input
            label='Email Address'
            type='text'
            placeholder='Enter your Email'
            className={styles.input} // Using styles.input
          />
          <input
            label='Phone Number'
            type='text'
            placeholder='Enter your Phone Number'
            className={styles.input} // Using styles.input
          />
        </div>

        <div className='flex gap-2 flex-col items-start'>
          <label className={styles.message_label}>Your message</label>
          <textarea
            rows={5}
            placeholder={
              'Any other information that you think is necessary, please share in this section ...'
            }
            className={styles.textarea} // Using styles.textarea
          />
        </div>
      </form>
      <div className='flex flex-col gap-4 w-full'>
        <div className='mt-4'>
          <Button
            className={styles.submit_button} // Using styles.submit-button
            type='primary'
            text='Submit Application'
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
