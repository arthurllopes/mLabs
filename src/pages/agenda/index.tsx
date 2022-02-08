import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { RootState } from '../../redux/configureStore';
import { SocialApp } from '../scheduling';
import styles from './styles.module.css'

export type PostSchedule = {
    id: number,
    social: SocialApp | SocialApp[],
    media: any,
    text: string,
    date: string,
    status: string,
}
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
                        {posts.map((post: PostSchedule) => (
                            <tr key={post.id}>
                                <td className={styles.rowItem}>{post.social}</td>
                                <td className={styles.rowItem}>{post.media}</td>
                                <td className={styles.rowItem}>{post.text}</td>
                                <td className={styles.rowItem}>{post.date}</td>
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
