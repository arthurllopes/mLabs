import Image from 'next/image';
import React, { useContext } from 'react';
import Card from '../Card';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons';
import { PostContext } from '../../contexts/PostContext';


const PublicationDate = () => {
    const {date, setDate, dateError, setDateError} = useContext(PostContext)
    const dateRegex = new RegExp('^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])$')
    const timeRegex = new RegExp('^[0-2][0-3]:[0-5][0-9]$')
    function handleChange(item: string, value: string) {
        if(item === 'date') {
            if (timeRegex.test(date.time) && dateError) {
                setDateError(!dateRegex.test(value))
            } else {
                setDateError(!dateRegex.test(value))
            }
        }
        if(item === 'time') {
            if (dateRegex.test(date.date) && dateError) {
                setDateError(!timeRegex.test(value))
            } else {
                setDateError(!timeRegex.test(value))
            }
        }
        setDate({...date, [item]: value})
    }

  return (
    <Card title="Data de publicação">
        <div className={styles.container}>
            <div className={styles.info}>
                <FontAwesomeIcon icon={faCalendarDay}/>
                <input className={styles.input} type="text" placeholder="DD/MM" value={date.date} onChange={(e) => handleChange('date', e.target.value)}/>
            </div>
            <div className={styles.info}>
                <FontAwesomeIcon icon={faClock}/>
                <input className={styles.input} type="text" placeholder="HH:MM" value={date.time} onChange={(e) => handleChange('time', e.target.value)} />
            </div>
        </div>
        {dateError && <p style={{color: 'red', fontSize: '.75rem'}}>Data e/ou hora em formato inválido</p>}
    </Card>
    );
};

export default PublicationDate;