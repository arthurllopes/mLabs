import Image from 'next/image';
import React from 'react';
import Card from '../Card';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons';


const PublicationDate = () => {
  return (
    <Card title="Data de publicação">
        <div className={styles.container}>
            <div className={styles.info}>
                <FontAwesomeIcon icon={faCalendarDay}/>
                <input className={styles.input} type="text" placeholder="DD/MM"/>
            </div>
            <div className={styles.info}>
                <FontAwesomeIcon icon={faClock}/>
                <input className={styles.input} type="text" placeholder="HH:MM"/>
            </div>
        </div>
    </Card>
    );
};

export default PublicationDate;