import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './styles.module.css'

const ActionFooter = () => {
    const {setModal} = useContext(ModalContext)
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
                <button className={`${styles.confirm} btn`} onClick={handleSchedule}>
                    Agendar
                </button>
        </div>
    </footer>
  );
};

export default ActionFooter;
