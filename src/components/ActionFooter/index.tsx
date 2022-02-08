import React, { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import styles from './styles.module.css'

const ActionFooter = () => {
    const {setModal, date, social} = useContext(PostContext)
    function handleSchedule () {
        setModal(true)
    }
  return (
    <footer className={styles.actionFooter}>
        <div className={styles.buttons}>
                <button className={`${styles.cancel} btn`}>
                    Cancelar
                </button>
                <button className={`${styles.save} btn`}>
                    Salvar rascunho
                </button>
                <button className={`${styles.confirm} btn`} disabled={!social || !date.time || !date.date} onClick={handleSchedule}>
                    Agendar
                </button>
        </div>
    </footer>
  );
};

export default ActionFooter;
