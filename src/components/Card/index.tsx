import React, { ReactNode } from 'react';
import styles from './styles.module.css'

type Props = {
    title: string,
    children: ReactNode;
};
const Card = ({children, title}: Props) => {
  return (
        <div className={styles.cardContainer}>
            <p className={styles.cardTitle}>{title}</p>
            <div className={styles.cardContent}>
                {children}
            </div>
        </div>
    );
};

export default Card;
