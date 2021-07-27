import React from 'react';
import styles from "./BillboardSettings.module.css" 
import BillboardSettingsIcon from "./BillboardSettingsIcon"

const BillboardSettings = () => {
    return (
        <div className={styles.BillboardSettings}>
            <BillboardSettingsIcon />
        </div>
    );

};

export default BillboardSettings;