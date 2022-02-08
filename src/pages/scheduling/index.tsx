import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import ActionFooter from '../../components/ActionFooter';
import Card from '../../components/Card';
import Header from '../../components/Header';
import ImageUpload from '../../components/ImageUpload';
import PostPreview from '../../components/PostPreview';
import PostText from '../../components/PostText';
import PublicationDate from '../../components/PublicatioDate';
import SocialMediaSelect from '../../components/SocialMediaSelect';
import styles from './styles.module.css'

const SchedulingPage = () => {
  return (
        <>
            <Head>
                <title>mLabs</title>
            </Head>
            <Header />
            <main className={styles.mainContainer}>
                <div className={styles.post}>
                    <div className={styles.postInfo}>
                        <SocialMediaSelect />
                        <PublicationDate />
                    </div>
                    <div className={styles.postInfo}>
                        <PostText />
                    </div>
                    <div className={styles.postInfo}>
                        <ImageUpload />
                    </div>
                </div>
                <div className={styles.postPreview}>
                    <PostPreview />
                </div>
            </main>
            <ActionFooter />
        </>
    );
};

export default SchedulingPage;
