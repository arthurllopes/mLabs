import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import Logo from '../../assets/images/Logo.png'
import User from '../../assets/images/User.png'
import styles from './styles.module.css'


const Header = () => {
    const router = useRouter()
  return (
        <header className={styles.headerContainer}>
            <div className={styles.logo} onClick={() => router.push('/')} >
                <Image src={Logo} alt="mLabs Logo" width={115} height={50} objectFit='contain'/>
            </div>
            <div className={styles.hamburger}>
                <div className={styles.hamburgerDiv}></div>
                <div className={styles.hamburgerDiv}></div>
                <div className={styles.hamburgerDiv}></div>
            </div>
            <div className={styles.userContainer}>
                <div>
                    <Image src={User} alt="mLabs Logo" width={115} height={50} objectFit='contain'/>
                </div>
                <div className={styles.userName}>
                    <p>Anselmo Carlos</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
