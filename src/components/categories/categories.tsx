import styles from './categories.module.scss';
import { useParams } from 'react-router-dom';
import { useApi } from '../api/api';
import { Link } from 'react-router-dom';

function Categories(){
    const toTop= () => {
        window.scrollTo(0,0);
    };
    const { name } = useParams();
    const {data, categories} = useApi();

    //console.log(data)

    const filtered = data.filter(x => x.id.slice(0,4) === name?.slice(0,4));
    //console.log(name)
    //console.log(filtered);
    //console.log(categories)
    const bkHero = categories.filter(x => x.name.slice(0,3) === name?.slice(0,3));
    console.log(bkHero[0].hero)

    return(
        <>
            <section className={styles.categories}>
                <div className={styles.categoriesHero}>
                    <img src={bkHero[0].hero} alt="hero image"/>
                    <h2>{name}</h2>
                </div>
                
                <div className={styles.categoriesListContainer}>

                    <ul className={styles.categoriesList}>
                        {filtered.map(x => (
                            <li 
                            className={styles.categoryItem}
                            key={x.id}>

                                <img src={x.image}/>
                                <Link onClick={toTop} to={`/categories/${x.name}/${x.id}`} className={styles.itemDetail}>
                                    <div className={styles.name}>{x.name}</div>
                                    <div className={styles.year}>{x.year}</div>
                                    <div className={styles.artist}>{x.artist}</div>
                                </Link>

                            </li>
                        ))}
                        {/*<li className={styles.categoryItem}>item</li>
                        <li className={styles.categoryItem}>item</li>
                        <li className={styles.categoryItem}>item</li>
                        <li className={styles.categoryItem}>item</li>
                        <li className={styles.categoryItem}>item</li>
                        <li className={styles.categoryItem}>item</li>
                        <li className={styles.categoryItem}>item</li>
                        <li className={styles.categoryItem}>item</li>
                        <li className={styles.categoryItem}>item</li>
                        <li className={styles.categoryItem}>item</li>*/}
                    </ul>
                </div>
            </section>
        </>
    )
};

export default Categories;