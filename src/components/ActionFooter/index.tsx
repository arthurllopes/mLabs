import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { PostContext } from '../../contexts/PostContext';
import { addPost } from '../../redux/Posts';
import styles from './styles.module.css'

const ActionFooter = () => {
    const {setModal, date, social, img, text} = useContext(PostContext)
    const dispatch = useDispatch()
    function handleSchedule () {
        setModal(true)
        dispatch(addPost({
            id: Math.floor(Math.random() * 100),
            social,
            date,
            img,
            status: 'Agendado'
        }))
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
                <button className={`${styles.confirm} btn`} disabled={!social || !date.time || !date.date || !img} onClick={handleSchedule}>
                    Agendar
                </button>
        </div>
    </footer>
  );
};

export default ActionFooter;
