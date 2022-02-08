import Image from 'next/image';
import React from 'react';
import Card from '../Card';
import styles from './styles.module.css'
import uploadImage from '../../assets/images/upload.png'

const ImageUpload = () => {
  return (
    <Card title="Upload de imagem">
        <div className={styles.container}>
            <div className={styles.image}>
              <Image src={uploadImage} width={45} height={30} alt="Upload"/>
            </div>
            <div className={styles.text}>
              <p style={{color:'#828282', textAlign: 'center'}}>Arraste e solte uma imagem aqui ou clique no botão abaixo</p>
            </div>
            <div className={`${styles.searchImage} btn`}>
              <button >
                Pesquisar imagem
              </button>
            </div>
        </div>
    </Card>
  );
};

export default ImageUpload;
