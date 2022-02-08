import React, { useContext } from 'react';
import { PostContext } from '../../contexts/PostContext';
import Card from '../Card';
import styles from './styles.module.css'

const PostText = () => {
  const {text, setText} = useContext(PostContext)
  return (
    <Card title="Texto do post">
        <textarea className={styles.container} placeholder="Aqui vai o texto descritivo desse post" value={text} onChange={(e) => setText(e.target.value)}></textarea>
    </Card>
  );
};

export default PostText;
