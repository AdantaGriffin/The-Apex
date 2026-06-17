import styles from './privateCollection.module.scss';
import { Link } from 'react-router-dom';
import { useApi } from '../api/api';

function PrivateCollections(){
    const {data} = useApi();
    //console.log(data)
    const pcData = data.filter(x => x.id.slice(0,2) === 'pc');
    console.log(pcData)
    return(
        <>
            <section className={styles.privateCollections}>
                <div className={styles.pcHero}>Private collections hero</div>
                <div className={styles.pcList}>
                    {pcData.map(x => (
                        <article key={x.id}>
                            <Link to="null">
                                <img src={x.image} height="100%" width="100%" alt="item image"/>
                                <p>{x.name}</p>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
};

export default PrivateCollections;