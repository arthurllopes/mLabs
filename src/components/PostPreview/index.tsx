import Image from 'next/image';
import React from 'react';
import Card from '../Card';
import NoPost from '../../assets/images/NoPost.png'


const PostPreview = () => {
  return (
    <Card title="Visualização do post">
    <div>
        <div>
            <p style={{color:'#828282', textAlign: 'center'}}>Aguardando conteúdo. Informe os canais e as mídias desejadas para visualização.</p>
        </div>
        <div style={{color:'#828282', padding: '10px'}}>
            <Image src={NoPost} width={300} height={360} alt="No post image" objectFit='contain'/>
        </div>
    </div>
</Card>
  );
};

export default PostPreview;
