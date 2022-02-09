import React, { useContext } from 'react';
import Card from '../Card';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialApp } from '../../pages/scheduling';
import { PostContext } from '../../contexts/PostContext';
import api from '../../services/api';

const SocialMediaSelect = () => {
  const {setSocial, social} = useContext(PostContext)
  const [socials, setSocials] = React.useState<SocialApp[]>([])
  React.useEffect(() => {
    const getSocials = async () => {
      const response = await api.get('/social')
      const {data} = response.data

      const enabled = data.filter((item: SocialApp) => item.status === 'enabled')
      const disabled = data.filter((item: SocialApp) => item.status !== 'enabled')
      setSocials([...enabled, ...disabled])
    }
    getSocials()
  }, [])
  
  function handleChoseeSocial(social: SocialApp) {
    if (social.status === 'enabled') {
      setSocial(social)
    }
  }
  return (
    <Card title="Redes sociais">
        <div className={styles.container}>
          {socials.map((item: SocialApp) => (
            <div key={item.id} onClick={() => handleChoseeSocial(item)} className={item.status === 'enabled' ? `${item.id}` === `${social?.id}` ? `${styles.social} ${styles.active}` : `${styles.social} ${styles.enabled}` : `${styles.social} ${styles.disabled}`} >
              {//@ts-ignore
                <FontAwesomeIcon icon={['fab', `${item.icon}`]}/>
              }
            </div>
          ))}
        </div>
    </Card>
    );
};

export default SocialMediaSelect;
