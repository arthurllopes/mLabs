import React from 'react';
import styles from './styles.module.css'

const ActionFooter = () => {
  return (
    <footer className={styles.actionFooter}>
        <div>
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
            <div className={`${styles.confirm} btn-div`} >
                <button>
                    Agendar
                </button>
            </div>
        </div>
    </footer>
  );
};

export default ActionFooter;
