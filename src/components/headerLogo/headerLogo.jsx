'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './header.module.css';

const HeaderLogo = () => {
  return (
    <Link className={styles.container} href={'/'}>
      <div className={styles.imageContainer}>
        <Image
          src={'/Logo.svg'}
          alt='DHRSI_Blogs_Logo'
          width={45}
          height={45}
          priority
          style={{ objectFit: 'cover' }}
        />

        <h1 className={styles.title}>DHRSI Blogs</h1>
      </div>
    </Link>
  );
};

export default HeaderLogo;
