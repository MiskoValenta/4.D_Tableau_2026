"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoTrophyOutline } from 'react-icons/io5';
import styles from './Help.module.css';

const DONORS = [
    { id: 1, name: 'Jan Novák', amount: '5000', initials: 'JN', rankClass: styles.rank1 },
    { id: 2, name: 'Petr Svoboda', amount: '2500', initials: 'PS', rankClass: styles.rank2 },
    { id: 3, name: 'Alena Dvořáková', amount: '1500', initials: 'AD', rankClass: styles.rank3 },
];

const THANK_YOU_MESSAGES = [
    "Děkujeme za vaši podporu!",
    "Každý příspěvek pomáhá rozvoji.",
    "Vážíme si vaší štědrosti.",
    "Společně tvoříme lepší Tablo.",
    "Díky vám to zvládneme!",
    "Podpora IT talentů má smysl."
];

export default function HelpPage() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        let timer = setTimeout(() => {
            const i = loopNum % THANK_YOU_MESSAGES.length;
            const fullText = THANK_YOU_MESSAGES[i];

            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
                setTypingSpeed(40);
            } else {
                setText(fullText.substring(0, text.length + 1));
                setTypingSpeed(100);
            }

            if (!isDeleting && text === fullText) {
                setTypingSpeed(3500);
                setIsDeleting(true);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(1000);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <main className={styles.mainContainer}>

            <div className={styles.contentWrapper}>
                <header className={styles.pageHeader}>
                    <h1 className={styles.title}>System.<span className={styles.accent}>Pomoc</span></h1>
                    <p className={styles.subtitle}>// init_donation_module</p>
                </header>

                <div className={styles.gridLayout}>

                    <div className={styles.leftColumn}>
                        <section className={styles.glassCard}>
                            <h2 className={styles.cardTitle}>Podpořte 4.D</h2>
                            <div className={styles.qrWrapper}>
                                <Image
                                    src="/qrcode.png"
                                    alt="QR Kód pro příspěvek"
                                    width={200}
                                    height={200}
                                    className={styles.qrCode}
                                />
                            </div>
                            <p className={styles.cardDescription}>
                                Vaše příspěvky nám pomáhají pokrýt náklady na provoz tohoto tabla, organizaci maturitního plesu a rozlučku. Naskenujte kód pomocí bankovní aplikace.
                            </p>
                        </section>

                        <section className={`${styles.glassCard} ${styles.typewriterCard}`}>
                            <div className={styles.typewriterContainer}>
                                <span className={styles.typewriterText}>
                                    {text}
                                    <span className={styles.cursor}>|</span>
                                </span>
                            </div>
                        </section>

                    </div>

                    <div className={styles.rightColumn}>
                        <section className={`${styles.glassCard} ${styles.leaderboardCard}`}>
                            <h2 className={styles.cardTitle}>Top Přispěvatelé</h2>

                            <div className={styles.donorsList}>
                                {DONORS.map((donor) => (
                                    <div key={donor.id} className={styles.donorRow}>
                                        <div className={`${styles.rankIcon} ${donor.rankClass}`}>
                                            <IoTrophyOutline />
                                        </div>

                                        <div className={styles.avatar}>
                                            {donor.initials}
                                        </div>

                                        <div className={styles.donorInfo}>
                                            <h3 className={styles.donorName}>{donor.name}</h3>
                                            <p className={styles.donorAmount}>// {donor.amount} CZK</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </main>
    );
}