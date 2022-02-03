import Image from 'next/image';
import React from 'react';
import ActionFooter from '../../components/ActionFooter';
import Card from '../../components/Card';
import Header from '../../components/Header';
import ImageUpload from '../../components/ImageUpload';
import PostPreview from '../../components/PostPreview';
import PostText from '../../components/PostText';
import styles from './styles.module.css'

const SchedulingPage = () => {
  return (
        <>
            <Header />
            <main className={styles.mainContainer}>
                <div className="post info">
                    <div className={styles.postInfo}>
                        <Card title="Redes sociais">
                            <div>

                            </div>
                        </Card>
                        <Card title="Data de publicação">
                            <div>
                                
                            </div>
                        </Card>
                    </div>
                    <div className="area">
                        <PostText />
                    </div>
                    <div className="area">
                        <ImageUpload />
                    </div>
                </div>
                <div className="visu">
                    <PostPreview />
                </div>
            </main>
            <ActionFooter />
        </>
    );
};

export default SchedulingPage;
