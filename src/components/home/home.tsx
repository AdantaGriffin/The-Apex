import styles from './home.module.scss';
import { Link } from 'react-router-dom';
import { useApi } from '../api/api';

function Home(){
    const toTop= () => {
        window.scrollTo(0,0);
    };
    const {categories} = useApi();
    //console.log(categories);
    return(
        <>
            <section className={styles.home}>
                <div className={styles.homeHero}>

                    <div className={styles.heroText}>
                        <h2>
                            Extraordinary <span className={styles.red}>Art.</span>
                            <br></br>
                            Timeless Value.
                        </h2>
                        <p>Explore the worlds finest and rearest masterpeices.</p>
                        <Link onClick={toTop} to="/privateCollections">Explore Collections</Link>
                    </div>
                    <p className={styles.categories}>Browse Categories</p>
                </div>

                <div className={styles.homeCategories}>
                    <ul className={styles.homeList}>
                        {categories.map(x => (
                            <li className={styles.category} key={x.name} id={x.name}>
                                <Link onClick={toTop} to={`/categories/${x.name}`}>
                                    <h4>{x.name}</h4>
                                    <img style={{width:"99%", height: "99%"}} src={x.image} alt="category image"/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/*<ul className={styles.homeList}>
                        <li id={styles.one} className={styles.category}>
                            <Link to="/categories"><h4>Paintings</h4></Link>
                        </li>
                        <li id={styles.two} className={styles.category}>
                            <Link to="/item"><h4>Sculptures</h4></Link>
                        </li>
                        <li id={styles.three} className={styles.category}>
                            <Link to="null"><h4>Photography</h4></Link>
                        </li>
                        <li id={styles.four} className={styles.category}>
                            <Link to="null"><h4>Digital Art</h4></Link>
                        </li>
                        <li id={styles.five} className={styles.category}>
                            <Link to="null"><h4>Antiques</h4></Link>
                        </li>
                        <li id={styles.six} className={styles.category}>
                            <Link to="null"><h4>Collectibles</h4></Link>
                        </li>
                    </ul>*/}
                </div>
            </section>
        </>
    )
};

export default Home;