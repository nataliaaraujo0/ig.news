import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, useSession } from 'next-auth/client';

export function SignInButton() {
    const [session] = useSession()

    console.log(session)

    return session ? (
        <button className={styles.signInButton} type="button">
            <FaGithub color="#04d361" />
            Natália Araújo
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button type="button" className={styles.signInButton} onClick={() => signIn('github')}>
            <FaGithub color="#AC5532" />
            Sign in with Github
        </button>
    )
}