import React from 'react'
import styles from './MainContainer.module.scss'

export default function MainContainer({ children }) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}
