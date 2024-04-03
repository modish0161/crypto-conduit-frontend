import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../../app/context/ThemeContext';
import styles from './Header.module.css'; // Import CSS module for styling

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/" passHref className={styles.logo}>

                    <Image src="/Logo.webp" alt="Crypto Conduit Logo" width={100} height={100} priority />

                </Link>
                <ul className={styles.menu}>
                    <li>
                        <Link href="/dashboard" legacyBehavior>
                            <button className={styles.button}>Dashboard</button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/swap" legacyBehavior>
                            <button className={styles.button}>Swap</button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/signin" legacyBehavior>
                            <button className={styles.button}>Sign In</button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/signup" legacyBehavior>
                            <button className={styles.button}>Sign Up</button>
                        </Link>
                    </li>
                    <li onClick={toggleTheme} className={styles.toggleTheme}>
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </li>
                </ul>
                {/* Optionally include user greeting and settings here */}
            </nav>
        </header>
    );
};

export default Header;
