import Image from 'next/image';
import React from 'react';
import Card from '../Card';
import styles from './styles.module.css'
import calendar from '../../assets/images/calendar.png'
import watch from '../../assets/images/watch.png'


const PublicationDate = () => {
  return (
    <Card title="Data de publicação">
        <div className={styles.container}>
            <div className={styles.info}>
                <Image alt="Calendário" src={calendar} width={16} height={16} />
                <input className={styles.input} type="text" placeholder="DD/MM"/>
            </div>
            <div className={styles.info}>
                <Image alt="Calendário" src={watch} width={16} height={16} />
                <input className={styles.input} type="text" placeholder="HH:MM"/>
            </div>
        </div>
    </Card>
    );
};

export default PublicationDate;