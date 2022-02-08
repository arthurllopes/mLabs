import React, { useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './styles.module.css'

const SucessModal = () => {
  const {modal, setModal} = useContext(ModalContext)
  function handleOutsideClick (event: React.MouseEvent){
    if (event.target === event.currentTarget) setModal(false)
  }
  return (
      <div className={styles.modalContainer} onClick={handleOutsideClick}>
        <div className={styles.modalContent}>
          oi
          <button onClick={() => setModal(false)}>x</button>
        </div>
      </div>
    );    
};

export default SucessModal;
