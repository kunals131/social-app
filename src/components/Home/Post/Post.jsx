import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import {
  HiOutlineBookmark,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineHeart,
  HiOutlineShare,
} from 'react-icons/hi2';
import styles from './Post.module.css';
const Img1 =
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80';
const Img2 =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80';
const Img3 =
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80';
const LikeCount = () => {
  return (
    <div className={styles.post_likes}>
      <div className="flex-align-center">
        <div
          style={{ background: `url(${Img1}) center center/cover` }}
          className={styles.post_likes_img}
        ></div>
        <div
          style={{
            left: '-0.5rem',
            background: `url(${Img2}) center center/cover`,
          }}
          className={styles.post_likes_img}
        ></div>
        <div
          style={{
            left: '-1rem',
            background: `url(${Img3}) center center/cover`,
          }}
          className={styles.post_likes_img}
        ></div>
      </div>
      <div className={styles.post_likes_text}>
        Liked by <span style={{ fontWeight: 600 }}>ronralfam</span> and{' '}
        <span style={{ fontWeight: 600 }}> 1,993 people</span>
      </div>
    </div>
  );
};

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.post_header}>
        <div className={styles.post_header_user}>
          <div className={styles.post_header_user_img}></div>
          <div>
            <div className={styles.post_header_user_name}>Kunals13111</div>
            <div className={styles.post_header_user_location}>
              New York City, NY
            </div>
          </div>
        </div>
        <BsThreeDots className={styles.post_header_menuIcon} size={20} />
      </div>
      <div className={styles.post_img}></div>
      <div className={styles.post_actions_container}>
        <div className={styles.post_actions}>
          <HiOutlineHeart className={styles.post_action_icon} size={24} />
          <HiOutlineChatBubbleOvalLeft
            className={styles.post_action_icon}
            size={24}
          />
          <HiOutlineShare className={styles.post_action_icon} size={24} />
        </div>
        <HiOutlineBookmark size={24} />
      </div>
      <LikeCount />
      <div className={styles.post_text}>
        kunals131{' '}
        <span style={{ fontWeight: 100 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          sapiente...
        </span>
      </div>
      {/* <div className='mt-5 pt-3 border-t  border-white/20 flex items-center gap-3'>
        <div className='flex shrink-0 items-center justify-center rounded-2xl w-[45px] bg-[#393939] h-[45px]'>
            <div className='w-[80%] h-[80%] rounded-xl bg-orange-400'></div>
        </div>
        <div className='relative w-full'>
            <input placeholder='write a comment' className='w-full placeholder:text-sm rounded-lg px-3 py-2 bg-[#222222]'/>
            <HiOutlineFaceSmile/>
        </div>
     </div> */}
    </div>
  );
};

export default Post;
