import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { RootState } from '../../redux/configureStore';
import { SocialPost } from '../../redux/Posts';
import { SocialApp } from '../scheduling';
import styles from './styles.module.css'

const SchedulePage = () => {
    const { posts } = useSelector((state: RootState) => state.Posts)
  return (
        <>
            <Header />
            <main className={styles.mainContainer} >
                <h4>Listagem de agendamento</h4>
                <table className={styles.tableContainer}>
                    <thead className={styles.tableHeader}>
                        <tr>
                            <th className={styles.rowItem}>Redes sociais</th>
                            <th className={styles.rowItem}>Mídia</th>
                            <th className={styles.rowItem}>Texto</th>
                            <th className={styles.rowItem}>Data</th>
                            <th className={styles.rowItem}>Ações</th>
                            <th className={styles.rowItem}>Status</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tableBody}>
                        {posts?.map((post: SocialPost) => (
                            <tr key={post.id} className={styles.tableRow}>
                                <td className={`${styles.rowItem}`}>
                                    <div className={styles.icon}>
                                        {//@ts-ignore
                                            <FontAwesomeIcon icon={['fab', `${post.social?.icon}`]}/>
                                        }
                                    </div>
                                </td>
                                <td className={`${styles.rowItem} ${styles.image}`}>
                                    <Image src={post.img?.preview} width={100} height={120} alt="post image" objectFit='contain'/>
                                </td>
                                <td className={`${styles.rowItem} ${styles.text}`}>{post.text}</td>
                                <td className={styles.rowItem}>{post.date.date}/20 ás {post.date.time}</td>
                                <td className={styles.link}>Preview</td>
                                <td className={styles.rowItem}>{post.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </>
    );
};

export default SchedulePage;
