import styles from './root.module.scss';
import { Outlet } from "react-router-dom";
import Header from '../header/header';
import Home from "../home/home";


function Root(){
    return(
        <>
        <div className={styles.root}>
            <Header/>
            <Outlet/>
        </div>
        </>
    )
};

export default Root;