import React from 'react';
import Link from 'next/link';
import { IoGridOutline, IoChatbubbleOutline, IoHeartOutline } from 'react-icons/io5';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <div className={styles.header}>
                <span className={styles.classNum}>4.D</span>
                <span className={styles.yearText}>2026</span>
            </div>

            <div className={styles.navIcons}>
                <Link href="/" className={styles.iconLink}>
                    <div className={styles.linkContent}>
                        <IoGridOutline className={styles.icon} />
                        <span className={styles.labelText}>Tablo</span>
                    </div>
                </Link>

                <Link href="/Contact" className={styles.iconLink}>
                    <div className={styles.linkContent}>
                        <IoChatbubbleOutline className={styles.icon} />
                        <span className={styles.labelText}>Zprávy</span>
                    </div>
                </Link>

                <Link href="/Help" className={styles.iconLink}>
                    <div className={styles.linkContent}>
                        <IoHeartOutline className={styles.icon} />
                        <span className={styles.labelText}>Pomoc</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Sidebar;