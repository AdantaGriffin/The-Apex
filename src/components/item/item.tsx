import styles from './item.module.scss';
import { useParams } from 'react-router-dom';
import { useApi } from '../api/api';

function Item(){
    const {id} = useParams();
    const {data} = useApi();

    const fetchedItem = data?.filter(x => x.id === id);
    //console.log(fetchedItem[0].image)
    return(
        <>
            <section className={styles.item}>
                <div className={styles.itemLeft}>
                    <div className={styles.itemImage}>
                        <img src={fetchedItem[0]?.image} alt="item image"/>
                    </div>
                    <div className={styles.itemStory}>
                        <h3>ABOUT THE ARTWORK</h3>
                        <div>{fetchedItem[0]?.story}</div>
                    </div>
                </div>
                <div className={styles.itemRight}>
                    <div className={styles.itemDetails}>
                        <h2 className={styles.itemTitle}>{fetchedItem[0]?.name}</h2>
                        <h4 className={styles.itemArtist}>{fetchedItem[0]?.artist}</h4>
                        <div className={styles.year}>{fetchedItem[0]?.year}</div>
                        <div className={styles.priceBlock}>
                            <p className={styles.price}>{fetchedItem[0]?.value}</p>
                            <p className={styles.kind}><span className={styles.red}>one of a kind</span></p>
                        </div>
                        <button className={styles.inquire}>Inquire To Purchase</button>
                    </div>
                    <div className={styles.itemSpecs}>
                        <p>Size: {fetchedItem[0]?.dimension}</p>
                        <p>Type: {fetchedItem[0]?.type}</p>
                        <p>Year: {fetchedItem[0]?.year}</p>
                        <p>Location: {fetchedItem[0]?.location}</p>
                        <p>Provenence: {fetchedItem[0]?.provenence ? fetchedItem[0]?.provenence  : "Read Story Above"}</p>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Item;