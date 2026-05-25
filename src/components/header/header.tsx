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
                        <li className={styles.searchLink}></li>
                        <li className={styles.profileLink}></li>
                    </ul>
                </div>
            </header>
        </>
    )
};

export default Header;