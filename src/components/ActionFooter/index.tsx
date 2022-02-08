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
            <div className={`${styles.cancel} btn-div`} >
                <button>
                    Cancelar
                </button>
            </div>
            <div className={`${styles.save} btn-div`} >
                <button>
                    Salvar rascunho
                </button>
            </div>
            <div className={`${styles.confirm} btn-div`} onClick={handleSchedule} >
                <button >
                    Agendar
                </button>
            </div>
        </div>
    </footer>
  );
};

export default ActionFooter;
