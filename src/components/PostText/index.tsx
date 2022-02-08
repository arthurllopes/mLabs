import React from 'react';
import Card from '../Card';
import styles from './styles.module.css'

const PostText = () => {
  return (
    <Card title="Texto do post">
        <textarea className={styles.container} placeholder="Aqui vai o texto descritivo desse post"></textarea>
    </Card>
  );
};

export default PostText;
