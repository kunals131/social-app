import React from 'react';
import styles from '@/styles/not-found.module.css';
import Image from 'next/image';
import { ServerErrorSVG } from '@/utils/assets';


const ServerErrorPage = () => {
  return (
    <div className={styles.not_found_page}>
      <div className={styles.not_found_page_image_container}>
        <Image
          src={ServerErrorSVG}
          alt="Server Error"
          fill
          className={styles.not_found_page_image}
        />
      </div>
      <div className={styles.not_found_page_title}>
        Something is not right! Ig.. Rate Limit Exeeded!
      </div>
      <button className={styles.not_found_page_action_button}>
        Try after some time!
      </button>
    </div>
  );
};

export default ServerErrorPage;
