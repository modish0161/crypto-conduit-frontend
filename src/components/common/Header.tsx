import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../../app/context/ThemeContext';
import useClerkAuth from '../../hooks/useClerkAuth';

const Header = () => {
    const { user, isSignedIn, handleSignOut } = useClerkAuth();
    const { theme, toggleTheme } = useTheme();

    return (
        <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
            <nav>
                <Link href="/" passHref legacyBehavior>
                    <Image src="/Logo.webp" alt="Crypto Conduit Logo" width={100} height={100} priority />
                </Link>
                <ul>
                    {isSignedIn ? (
                        <>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                            <li><Link href="/swap">Swap</Link></li>
                            {/* Additional authenticated links */}
                        </>
                    ) : (
                        <>
                            <li><Link href="/signin">Sign In</Link></li>
                            <li><Link href="/signup">Sign Up</Link></li>
                        </>
                    )}
                    <li onClick={toggleTheme}>
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </li>
                </ul>
                {isSignedIn && (
                    <div>
                        <span>Welcome, {user?.firstName || 'Guest'}</span>
                        {/* User settings dropdown or modal */}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
