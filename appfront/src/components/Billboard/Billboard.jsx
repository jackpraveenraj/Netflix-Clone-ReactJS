import React from 'react';

import BillboardHeroImg from './assets/billboard.webp';
import BillboardHeroTitle from './assets/billboard-title.webp';

import styles from "./Billboard.module.css" 

const Billboard = () => {
    return (
        <div className={styles.Billboard}>
            <div className={styles.innerBillboard}>
                <img src={BillboardHeroImg} alt="Poster"></img>
                <div className={styles.info}>
                    <img src={BillboardHeroTitle} alt="Title"></img>
                    <div className={styles.links}>
                    <a href="/">
                    {/* icon */}
                    <span>Play</span>
                    </a>
                    <button>More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Billboard;