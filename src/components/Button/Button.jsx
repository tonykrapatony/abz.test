import React from 'react'
import styles from './Button.module.scss'

export default function Button({ children, type, onClick, disabled, hidden }) {
  return (
    <button 
      className={`${styles.btn} ${hidden ? styles.hide : ''}`} 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
    >
      {children}
    </button>
  )
}
