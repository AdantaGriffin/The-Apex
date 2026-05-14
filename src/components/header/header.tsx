import styles from './header.module.scss';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}><Link to="/">TheApex</Link></div>

                <nav>
                    <ul className={styles.headerNav}>
                        <li>HOME</li>
                        <li>COLLECTIONS</li>
                        <li>ARTIST</li>
                        <li>MAGAZINE</li>
                        <li>LOCATIONS</li>
                    </ul>
                </nav>

                <div className={styles.headerLinks}>
                    <ul className={styles.linkList}>
                        <li><img src="../../../public/images/links/search.png" alt="search icon" height="20px" width="20px"/></li>
                        <li><img src="../../../public/images/links/profile.png" alt="search icon" height="30px" width="30px"/></li>
                    </ul>
                </div>
            </header>
        </>
    )
};

export default Header;