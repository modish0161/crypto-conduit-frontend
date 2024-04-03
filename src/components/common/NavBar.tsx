import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './NavBar.module.css';

interface CustomNavLinkProps extends Omit<NavLinkProps, 'children'> {
    children: React.ReactNode;
    activeClassName?: string;
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, className, activeClassName, children }) => (
    <NavLink to={to} className={className} activeClassName={activeClassName}>
        {children}
    </NavLink>
);

const NavBar = () => (
    <nav className={styles.navbar}>
        <ul className={styles.navList}>
            <li className={styles.navItem}>
                <CustomNavLink to="/" className={styles.navLink} activeClassName={styles.active}>
                    Home
                </CustomNavLink>
            </li>
            <li className={styles.navItem}>
                <CustomNavLink to="/dashboard" className={styles.navLink} activeClassName={styles.active}>
                    Dashboard
                </CustomNavLink>
            </li>
            <li className={styles.navItem}>
                <CustomNavLink to="/swap" className={styles.navLink} activeClassName={styles.active}>
                    Swap
                </CustomNavLink>
            </li>
            <li className={styles.navItem}>
                <CustomNavLink to="/account" className={styles.navLink} activeClassName={styles.active}>
                    Account
                </CustomNavLink>
            </li>
        </ul>
        {/* Mobile Menu Toggle Button */}
    </nav>
);

export default NavBar;
