import Head from 'next/head';
import Image from 'next/image';
import React, { useContext } from 'react';
import ActionFooter from '../../components/ActionFooter';
import Card from '../../components/Card';
import Header from '../../components/Header';
import ImageUpload from '../../components/ImageUpload';
import PostPreview from '../../components/PostPreview';
import PostText from '../../components/PostText';
import PublicationDate from '../../components/PublicatioDate';
import SocialMediaSelect from '../../components/SocialMediaSelect';
import styles from './styles.module.css'
import SucessModal from '../../components/SucessModal';
import { PostContext } from '../../contexts/PostContext';
import { GetServerSideProps } from 'next';
import api from '../../services/api';
export type SocialApp = {
    id: number,
    name: string,
    icon: string,
    status: string,
}
type Props = {
    socials: SocialApp[]
}
const SchedulingPage = ({socials}: Props) => {
    const {modal} = useContext(PostContext)

  return (
        <>
            <Head>
                <title>mLabs</title>
            </Head>
            <Header />
            <main className={styles.mainContainer}>
                <div className={styles.post}>
                    <div className={styles.postInfo}>
                        <SocialMediaSelect socials={socials} />
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
            {modal && <SucessModal />}
        </>
    );
};

export default SchedulingPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
    
    const res = await api.get('/social')
    const {data} = res.data
    const enabled = data.filter((item: SocialApp) => item.status === 'enabled')
    const disabled = data.filter((item: SocialApp) => item.status !== 'enabled')
    const socials = [...enabled, ...disabled]
    return {
        props: {
            socials,
        }
    }
}
