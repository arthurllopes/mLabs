import Image from 'next/image';
import React from 'react';
import Card from '../Card';
import NoPost from '../../assets/images/NoPost.png'
import styles from './styles.module.css'

const PostPreview = () => {
  return (
    <Card title="Visualização do post">
    <div className={styles.container}>
      <div>
        <p className={styles.previewText}>
            Aguardando conteúdo. Informe os canais e as mídias desejadas para visualização.
        </p>
      </div>
      <div className={styles.imagePreview}>
        <Image src={NoPost} width={300} height={360} alt="No post image" objectFit='contain'/>
      </div>
    </div>
    </Card>
  );
};

export default PostPreview;
