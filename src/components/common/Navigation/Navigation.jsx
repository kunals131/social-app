import React from 'react'
import styles from './Navigation.module.css';
import { LayoutGroup, motion } from 'framer-motion';
import {HiBell, HiOutlineBell, HiHeart, HiOutlineHeart,HiUser, HiOutlineUser,HiHome,HiOutlineHome} from 'react-icons/hi2'
const NavigationIcon = ({icon,activeIcon,isActive})=>{
    return (
        <div className={`${styles.navigation_icon}${isActive?` ${styles.navigation_icon_active}`:''}`}>
            <p className={styles.navigation_icon_svg}>{isActive?activeIcon:icon}</p>
            {isActive&&<motion.div layoutId='move' className={styles.navigation_icon_activeIcon}></motion.div>}
        </div>
    )
}

const Navigation = () => {
  return (
    <LayoutGroup id='a'>
    <nav className={styles.navigation}>
        <NavigationIcon isActive={true} activeIcon={<HiHome size={24}/>} icon={<HiOutlineHome size={24}/>}/>
        <NavigationIcon isActive={false} activeIcon={<HiBell size={24}/>} icon={<HiOutlineBell size={24}/>}/>
        <NavigationIcon isActive={false} activeIcon={<HiHeart size={24}/>} icon={<HiOutlineHeart size={24}/>}/>
        <NavigationIcon isActive={false} activeIcon={<HiUser size={24}/>} icon={<HiOutlineUser size={24}/>}/>
    </nav>
    </LayoutGroup>
  )
}

export default Navigation