import Link from 'next/link';
import React from 'react';
import styles from './menuCategories.module.css';

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href='/blog?cat=life_style'
        className={`${styles.categoryItem} ${styles.lifeStyle}`}
      >
        Life Style
      </Link>
      <Link
        href='/blog?cat=technology'
        className={`${styles.categoryItem} ${styles.technology}`}
      >
        Technology
      </Link>
      <Link
        href='/blog?cat=research'
        className={`${styles.categoryItem} ${styles.research}`}
      >
        Research
      </Link>
      {/* <Link href='/blog' className={`${styles.categoryItem} ${styles.travel}`}>
        Culture
      </Link> */}
      <Link
        href='/blog?cat=travel'
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        Travel
      </Link>
      <Link
        href='/blog?cat=coding'
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
