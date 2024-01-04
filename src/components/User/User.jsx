import React from 'react'
import styles from './User.module.scss'
import Tooltip from '../Tooltip/Tooltip'

export default function User({ item }) {
    return (
        <li className={styles.user_item}>
            <div className={styles.img_wrapper}>
                <img src={item.photo} alt={item.name} width='70' height='70'/>
            </div>
            <p className={styles.name}>{item.name}</p>
            <div className={styles.info}>
                <p className={styles.position}>{item.position}</p>
                <Tooltip value={item.email} />
                <p className={styles.phone}>{item.phone}</p>
            </div>
        </li>
    )
}
