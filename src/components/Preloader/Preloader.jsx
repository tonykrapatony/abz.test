import React from 'react'
import styles from './Preloader.module.scss';
import preloader from '../../assets/svg/Preloader.svg';

export default function Preloader() {
    return (
        <div className={styles.preloader}>
            <img src={preloader} alt="preloader icon" />
        </div>
    )
}
