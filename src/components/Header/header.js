import logo from '../../logo.svg';
import styles from './header.module.css';
import { useNavigate } from 'react-router';

export default function Header() {
    const navigate = useNavigate();

    function handleLogin() {
        navigate('/login');
    }

    function handleSignUp() {
        navigate('/signup');
    }

    function handleAbout() {
        navigate('/about');
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="react logo" />
            </div>
            <div className={styles.list}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#" onClick={handleAbout}>About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><button className={styles.btn} onClick={handleLogin}>Login</button></li>
                    <li><button className={styles.btn} onClick={handleSignUp}>SignUp</button></li>
                </ul>
            </div>
        </div>
    );
}