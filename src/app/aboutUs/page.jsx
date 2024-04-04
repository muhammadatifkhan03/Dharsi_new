import React from 'react';
import styles from './about.module.css'; // Importing styles

const AboutUS = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main_div}>
        <h3 className={styles.main_text}>About Us </h3>
        <div className='w-full text-center'>
          <div className='flex items-center justify-center'>
            <h1 className={styles.paragraphText}>
              {`At DHRSI Blogs, we believe in the power of knowledge to transform
              lives and ignite change. Whether you're a seasoned expert or a
              curious newcomer, our goal is to provide you with a diverse range
              of perspectives, thought-provoking insights, and practical tips to
              help you navigate the intricacies of DHRSI Blogs.`}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
