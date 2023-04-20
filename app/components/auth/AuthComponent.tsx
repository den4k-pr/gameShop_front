import Link from 'next/link'
import styles from './AuthComponent.module.scss'

export const AuthComponent = () => {
    return (
        <>
            <Link href='/' className={styles.auth}>
            
            </Link>
            <form className={styles.auth_form}>
                <h3>Registration</h3>
                <p>name</p>
                <input type="text" />
                <p>email</p>
                <input type="email" />
                <p>phone</p>
                <input type="tel" />
                <p>password</p>
                <input type="password" />
                <button>Registration</button>
            </form>
        </>
    )
}