import React, { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import {
  HiOutlineBookmark,
  HiOutlineChatBubbleOvalLeft,
  HiOutlineHeart,
  HiOutlinePaperAirplane,
} from 'react-icons/hi2';
import styles from './Post.module.css';
import Image from 'next/image';
import TextTruncateExpand from '@/components/common/TextTruncateExpand';
import { useRouter } from 'next/router';
import { AiOutlineExpand } from 'react-icons/ai';
import { BsArrowsAngleContract } from 'react-icons/bs';
import { RandomUserImages } from '@/utils/assets';


const LikeCount = ({ count }) => {
  return (
    <div className={styles.post_likes}>
      <div className="flex-align-center">
        <div
          style={{ background: `url(${RandomUserImages[1]}) center center/cover` }}
          className={styles.post_likes_img}
        ></div>
        <div
          style={{
            left: '-0.5rem',
            background: `url(${RandomUserImages[0]}) center center/cover`,
          }}
          className={styles.post_likes_img}
        ></div>
        <div
          style={{
            left: '-1rem',
            background: `url(${RandomUserImages[2]}) center center/cover`,
          }}
          className={styles.post_likes_img}
        ></div>
      </div>
      <div className={styles.post_likes_text}>
        Liked by
        <span style={{ fontWeight: 600 }}> {count} people</span>
      </div>
    </div>
  );
};

const Post = ({
  urls,
  alt_description,
  //createdAt,
  description,
  // id,
  // location,
  user,
  likes,
  blurHash,
  // isLiked,
}) => {
  const [isFullImage, setIsFullImage] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.post}>
      <div className={styles.post_header}>
        <div className={styles.post_header_user}>
          <div className={styles.post_header_user_img_container}>
            <Image
              src={user.profile_image.medium}
              alt={user.name}
              fill
              className={styles.post_header_user_img}
            />
          </div>
          <div
            onClick={() => router.push(`/user/${user.username}`)}
            className={styles.post_header_user_creds}
          >
            <div className={styles.post_header_user_name}>{user.name}</div>
            <div className={styles.post_header_user_location}>
              @{user.username}
            </div>
          </div>
        </div>
        <BsThreeDots className={styles.post_header_menuIcon} size={20} />
      </div>
      <div className={styles.post_img_container}>
        {isFullImage ? (
          <BsArrowsAngleContract
            onClick={() => setIsFullImage(false)}
            className={styles.post_img_container_expandIcon}
          />
        ) : (
          <AiOutlineExpand
            onClick={() => setIsFullImage(true)}
            className={styles.post_img_container_expandIcon}
          />
        )}
        <Image
          alt={alt_description || 'post_image'}
          src={urls.regular}
          fill={true}
          className={styles.post_img}
          placeholder="blur"
          style={{ objectFit: isFullImage ? 'contain' : 'cover' }}
          blurDataURL={`data:image/jpeg;base64,${blurHash}`}
        />
      </div>
      <div className={styles.post_actions_container}>
        <div className={styles.post_actions}>
          <HiOutlineHeart className={styles.post_action_icon} size={24} />
          <HiOutlineChatBubbleOvalLeft
            className={styles.post_action_icon}
            size={24}
          />
          <HiOutlinePaperAirplane
            style={{
              transform: 'rotate(-30deg)',
              position: 'relative',
              top: '-2.5px',
            }}
            className={styles.post_action_icon}
            size={24}
          />
        </div>
        <HiOutlineBookmark size={24} />
      </div>
      <LikeCount count={likes} />
      <div className={styles.post_text}>
        {user.username}{' '}
        <TextTruncateExpand
          style={{ fontWeight: 100, cursor: 'pointer' }}
          maxLength={50}
          text={description ? description : alt_description}
        />
      </div>
    </div>
  );
};

export default Post;
