import logo from '../../logo.svg';
import styles from './header.module.css';
// import { useState } from 'react';

export default function Header(){
    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="react logo"/>
            </div>
            <div className={styles.list}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><button className={styles.btn}>Login</button></li>
                </ul>
            </div>
        </div>
    );
}