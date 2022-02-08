import React, { useContext } from 'react';
import Card from '../Card';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialApp } from '../../pages/scheduling';
import { PostContext } from '../../contexts/PostContext';

type Props = {
  socials: SocialApp[]
}
const SocialMediaSelect = ({socials}: Props) => {
  const {setSocial, social} = useContext(PostContext)
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
