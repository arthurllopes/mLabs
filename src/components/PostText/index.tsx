import React from 'react';
import Card from '../Card';

const PostText = () => {
  return (
    <Card title="Texto do post">
        <div>
            <input type="text" placeholder="Aqui vai o texto descritivo desse post" />
        </div>
    </Card>
  );
};

export default PostText;
