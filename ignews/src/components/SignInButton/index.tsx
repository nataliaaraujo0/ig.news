import { FaGithub } from 'react-icons/fa';
import styles from './styles.module.scss';

export function SignInButton() {
    return (
        <button className={styles.signInButton} type="button">
            <FaGithub color="#AC5532" />
            Sign in with Github
        </button>
    );
}