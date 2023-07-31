import React from 'react';
import styles from '@/styles/not-found.module.css';
import Image from 'next/image';
import { LimitExeededSVG } from '@/utils/assets';
import Link from 'next/link';
import { Routes } from '@/utils/data/Routes';


const ErrorPage = () => {
  return (
    <div className={styles.not_found_page}>
      <div className={styles.not_found_page_image_container}>
        <Image
          src={LimitExeededSVG}
          alt="Limit-exceeded"
          fill
          className={styles.not_found_page_image}
        />
      </div>
      <div className={styles.not_found_page_title}>
        Looks like you have exceeded the rate limit.
      </div>
      <button className={styles.not_found_page_action_button}>
      <Link href={Routes.HOME}> Try after some time! </Link>
      </button>
    </div>
  );
};

export default ErrorPage;
