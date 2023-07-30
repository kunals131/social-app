import React from 'react';
import styles from '@/styles/not-found.module.css';
import Image from 'next/image';
import { NotFoundSVG } from '@/utils/assets';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className={styles.not_found_page}>
      <div className={styles.not_found_page_image_container}>
        <Image
          src={NotFoundSVG}
          alt="Not Found"
          fill
          className={styles.not_found_page_image}
        />
      </div>
      <div className={styles.not_found_page_title}>Oops! Look{"'"}s like you came down the wrong path!</div>
      <button className={styles.not_found_page_action_button}><Link href={'/'}>Go back home</Link></button>
    </div>
  );
};

export default NotFoundPage;
