import React from 'react'
import Logo from '../../assets/svg/Logo.svg';
import Button from '../Button/Button';
import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href='/' className={styles.logo}>
        <img src={Logo} alt="Logo" width='104' height='26'/>
      </a>
      <div className={styles.actions}>
        <Button>Users</Button>
        <Button>Sign up</Button>
      </div>
    </nav>
  )
}
