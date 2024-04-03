// components/common/NavBar.tsx
import React from 'react';
import Link from 'next/link';

const NavBar = () => (
    <nav className="navbar">
        <ul className="navList">
            <li>
                <Link href="/">
                    <a className="navLink">Home</a>
                </Link>
            </li>
            <li>
                <Link href="/dashboard">
                    <a className="navLink">Dashboard</a>
                </Link>
            </li>
            {/* Additional links */}
        </ul>
    </nav>
);

export default NavBar;
