import React from 'react';
import logo from './assets/logo.png';
import styles from "./Navigation.module.css";
import SecondaryNavigation from "../SecondaryNavigation";

const Navigation = () => {
    
    const navItems = [
        'Home',
        'TV Shows',
        'Movies',
        'New & Popular',
        'My List'

    ]

    return (
        <div className={styles.Navigation}>
            <div>
                <img className={styles.logo} src={logo} alt="logo" />
                <ul className={styles.navigationList}>
                    {navItems.map((item) => (
                        <li className = {styles.navigationItem} key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <SecondaryNavigation />
        </div>
    );

};

export default Navigation;