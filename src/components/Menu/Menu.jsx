import React from 'react';
import styles from './menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';
import MenuCategories from '../menuCategories/MenuCategories';

const getPopularData = async () => {
  console.log('called', 'vcalllesdd');
  const res = await fetch(`http://localhost:3000/api/popularPosts`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.log('FailedFailed', res);
    throw new Error('Failed');
  }
  console.log('resresres', res);
  return res.json();
};

const Menu = async () => {
  console.log('Gettingcalled', 'vcalllesdd');

  const data = await getPopularData();
  console.log('data', data);
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
