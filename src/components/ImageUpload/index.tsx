import Image from 'next/image';
import React, { useContext } from 'react';
import Card from '../Card';
import styles from './styles.module.css'
import uploadImage from '../../assets/images/upload.png'
import { PostContext } from '../../contexts/PostContext';

const ImageUpload = () => {
  const {setImg} = useContext(PostContext)

  function handleImgChange({target}: any){

    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    })
  }
  return (
    <Card title="Upload de imagem">
        <div className={styles.container}>
            <div className={styles.image}>
              <Image src={uploadImage} width={45} height={30} alt="Upload"/>
            </div>
            <div className={styles.text}>
              <p style={{color:'#828282', textAlign: 'center'}}>Arraste e solte uma imagem aqui ou clique no botão abaixo</p>
            </div>
            <div>
                <label className={`${styles.searchImage} btn`} htmlFor="image">Pesquisar imagem</label>
                <input className={`${styles.inputFile}`} type="file" name="image" id="image" accept="image/*" onChange={handleImgChange}/>
            </div>
        </div>
        <div>

        </div>
    </Card>
  );
};

export default ImageUpload;
