import Image from 'next/image';
import React, { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import styles from './styles.module.css'
import modalImage from '../../assets/images/modalImage.png'
import { useRouter } from 'next/router';

const SucessModal = () => {
  const router = useRouter()
  const {modal, setModal} = useContext(PostContext)
  function handleOutsideClick (event: React.MouseEvent){
    if (event.target === event.currentTarget) setModal(false)
  }
  const handleCloseModal = () => {
    router.push('/agenda')
    setModal(false)
  }
  return (
      <div className={styles.modalContainer} onClick={handleOutsideClick}>
        <div className={styles.modalContent}>
          <div className="">
            <Image src={modalImage} width={197} height={197} alt="" />
          </div>
          <div className="">
            <p style={{fontSize: '1.5rem'}}>Agendado com sucesso!</p>
          </div>
          <div>
            <button className={`${styles.confirm} btn`} onClick={handleCloseModal}>OK</button>
          </div>
        </div>
      </div>
    );    
};

export default SucessModal;
