import React from "react";
import styles from './ScanComponent.module.css';
import ScanLogo from '../../assests/ScanLogo';

const ScanComponent = (props)=> {
    return (
        <div className={styles.scanLogoContainer}>
            <ScanLogo />
        </div>
    );
}

export default ScanComponent;