import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss';

const isUserLoggedIn = false;

export function SignInButton() {
    return isUserLoggedIn ? (
        <button className={styles.signInButton} type="button">
            <FaGithub color="#04d361" />
            Sign in with Github
        </button>
    ) : (
        <button className={styles.signInButton} type="button">
            <FaGithub color="#AC5532" />
            Sign in with Github
        </button>
    )
}