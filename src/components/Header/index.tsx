import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/images/Logo.png'
import User from '../../assets/images/User.png'
import styles from './styles.module.css'


const Header = () => {
  return (
        <header className={styles.headerContainer}>
            <div>
                <Image src={Logo} alt="mLabs Logo" width={115} height={50} objectFit='contain'/>
            </div>
            <div className={styles.userContainer}>
                <div>
                    <Image src={User} alt="mLabs Logo" width={115} height={50} objectFit='contain'/>
                </div>
                <div>
                    <p>Anselmo Carlos</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
