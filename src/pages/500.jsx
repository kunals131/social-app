import React from 'react';
import styles from '@/styles/not-found.module.css';
import Image from 'next/image';
import { ServerErrorSVG } from '@/utils/assets';
import Link from 'next/link';
import { Routes } from '@/utils/data/Routes';


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
        Something is not right! 
      </div>
      <span className={styles.not_found_page_sub_title}>(Make sure you have a valid access key in your env)</span>
      <button className={styles.not_found_page_action_button}>
       <Link href={Routes.HOME}> Try after some time! </Link>
      </button>
    </div>
  );
};

export default ServerErrorPage;
