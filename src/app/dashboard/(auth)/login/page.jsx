"use client"
import styles from './page.module.css'
import {signIn} from "next-auth/react"

const Login = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    signIn("credentials", {email, password})
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="email" placeholder='email' required />
        <input className={styles.input} type="password" placeholder='password' required />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login