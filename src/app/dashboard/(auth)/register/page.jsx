"use client"
import Link from 'next/link'
import styles from './page.module.css'

const Register = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder='username' required />
        <input className={styles.input} type="email" placeholder='email' required />
        <input className={styles.input} type="password" placeholder='password' required />
        <button className={styles.button}>Register</button>
      </form>
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  )
}

export default Register