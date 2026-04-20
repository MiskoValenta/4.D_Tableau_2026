import React from 'react';
import styles from './Background.module.css';

const Background = () => {
    return (
        <>
            <div className={styles.orbLayer} aria-hidden="true">
                <div className={`${styles.orb} ${styles.orbPurple}`}></div>
                <div className={`${styles.orb} ${styles.orbBlue}`}></div>
                <div className={`${styles.orb} ${styles.orbEmerald}`}></div>
            </div>

            <div className={styles.symbolLayer} aria-hidden="true">
                <span className={`${styles.symbol} ${styles.sym1}`}>&gt;_</span>
                <span className={`${styles.symbol} ${styles.sym2}`}>&#123; &#125;</span>
                <span className={`${styles.symbol} ${styles.sym3}`}>&lt;/&gt;</span>
                <span className={`${styles.symbol} ${styles.sym4}`}>[]</span>

                <svg className={`${styles.symbol} ${styles.sym5}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>

                <svg className={`${styles.symbol} ${styles.sym6}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="4 10 10 16 20 6"></polyline>
                </svg>

                <span className={`${styles.symbol} ${styles.sym7}`}>&gt;_</span>
                <span className={`${styles.symbol} ${styles.sym8}`}>&lt;/&gt;</span>
                <span className={`${styles.symbol} ${styles.sym9}`}>&#123; &#125;</span>

                <svg className={`${styles.symbol} ${styles.sym10}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
            </div>
        </>
    );
};

export default Background;