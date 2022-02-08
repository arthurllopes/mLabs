import Image from 'next/image';
import React, { useContext } from 'react';
import Card from '../Card';
import NoPost from '../../assets/images/NoPost.png'
import styles from './styles.module.css'
import { PostContext } from '../../contexts/PostContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PostPreview = () => {
  const {img, social, date, text} = useContext(PostContext)

  return (
    <>
        <div className={`${styles.preview} btn-div`}>
          <button>
            Visualizar post
          </button>
        </div>

    <div className={styles.card}>
      <Card title="Visualização do post">
        <div className={styles.container}>
          {!img ? (
            <>
              <div>
                <p className={styles.previewText}>
                    Aguardando conteúdo. Informe os canais e as mídias desejadas para visualização.
                </p>
              </div>
              <div className={styles.imagePreview}>
                <Image src={NoPost} width={300} height={360} alt="No post image" objectFit='contain'/>
              </div>
            </>
          ) : (
            <div className={styles.postBox}>
              <div className={styles.postHeader}>
                {//@ts-ignore
                  <FontAwesomeIcon icon={['fab', `${social?.icon}`]}/>
                }
                Anselmo Carlos
              </div>
              <div>
                <Image src={img?.preview} width={300} height={360} alt="post image" objectFit='contain'/>
              </div>
              <div className={styles.interact}>
                <div>
                  &hearts;
                  &hearts;
                </div>
                <div>
                  &hearts;
                </div>
              </div>
              <div >
                <p className={styles.text}>{text}</p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
    </>
  );
};

export default PostPreview;
