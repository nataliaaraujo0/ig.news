import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';


const isUserLoggedIn = true;

export function SignInButton() {
    return isUserLoggedIn ? (
        <button className={styles.signInButton} type="button">
            <FaGithub color="#04d361" />
            Natália Araújo
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button className={styles.signInButton} type="button">
            <FaGithub color="#AC5532" />
            Sign in with Github
        </button>
    )
}