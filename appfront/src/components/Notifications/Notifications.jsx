import React from 'react';
import NotificationsIcon from "./NotificationsIcon"
import styles from "./Notifications.module.css" 

const Notifications = () => {
    return (
        <div className={styles.Notifications}>
            <NotificationsIcon />
        </div>
    );

};

export default Notifications;