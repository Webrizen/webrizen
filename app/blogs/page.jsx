import React from 'react';
import styles from '@/app/styles/services.module.css';
import DevsNotics from '@/app/assets/image/3.png';
import Image from 'next/image';

export default function page() {
  return (
    <div className={styles.DevsPage}>
      <Image src={DevsNotics} alt='Come Back Later' />
      <h1>We're currently developing this page, came back later! 👋</h1>
    </div>
  )
}
