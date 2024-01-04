import React, { useState } from 'react'
import styles from './Tooltip.module.scss'

export default function Tooltip({ value }) {
    const [showTooltip, setShowTooltip] = useState(false);

    const tooltipToggler = () => {
        setShowTooltip(!showTooltip);
    }
    return (
        <div className={styles.tooltip}>
            <p onMouseEnter={tooltipToggler} onMouseLeave={tooltipToggler}>{value}</p>
            {showTooltip && 
                <div className={styles.tooltip_value}>
                    <p>{value}</p>
                </div>
            }
        </div>
    )
}
