import React from 'react';
import api from '../../services/api';
import Card from '../Card';
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SocialApp = {
  id: number,
  name: string,
  icon: string,
  status: string,
}
const SocialMediaSelect = () => {
  const [socials, setSocials] = React.useState<SocialApp[]>([])
  React.useEffect(() => {
    const getSocial = async () => {
      const response = await api.get('/social')
      const {data} = response.data

      const enabled = data.filter((item: SocialApp) => item.status === 'enabled')
      const disabled = data.filter((item: SocialApp) => item.status !== 'enabled')
      setSocials([...enabled, ...disabled])
    }
    getSocial()
  }, [])
  return (
    <Card title="Redes sociais">
        <div className={styles.container}>
          {socials.map((social: SocialApp) => (
            <div key={social.id} className={social.status === 'enabled' ? `${styles.social} ${styles.enabled}` : `${styles.social} ${styles.disabled}`}>
              {//@ts-ignore
                <FontAwesomeIcon icon={['fab', `${social.icon}`]}/>
              }
            </div>
          ))}
        </div>
    </Card>
    );
};

export default SocialMediaSelect;
