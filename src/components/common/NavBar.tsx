// components/common/NavBar.tsx
import React from 'react';
import Link from 'next/link';

const NavBar = () => (
    <nav className="navbar">
        <ul className="navList">
            <li>
                <Link href="/" className="navLink">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/dashboard" className="navLink">
                    Dashboard
                </Link>
            </li>
            {/* Additional links */}
        </ul>
    </nav>
);

export default NavBar;
