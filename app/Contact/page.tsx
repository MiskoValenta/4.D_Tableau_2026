import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Contact.module.css';
import { fetchMessages } from '../../backend/actions';
import ContactForm from './ContactForm';

export default async function ContactPage() {
    const dbMessages = await fetchMessages();

    return (
        <main className={styles.mainContainer}>
            <Sidebar />

            <div className={styles.contentWrapper}>
                <section className={styles.upperSection}>
                    <header className={styles.pageHeader}>
                        <h1 className={styles.title}>System.<span className={styles.accent}>Zprávy</span></h1>
                        <p className={styles.subtitle}>// open_comms_channel</p>
                    </header>

                    <div className={styles.formContainer}>
                        <ContactForm />
                    </div>
                </section>

                <section className={styles.lowerSection}>
                    <h2 className={styles.historyTitle}>Message History</h2>

                    <div className={styles.messageList}>
                        {dbMessages.map((msg) => {
                            const initials = `${msg.firstName.charAt(0)}${msg.lastName.charAt(0)}`.toUpperCase();

                            return (
                                <article key={msg.id} className={styles.messageCard}>
                                    <div className={styles.avatarWrapper}>
                                        <div className={styles.avatar}>
                                            {initials}
                                        </div>
                                    </div>

                                    <div className={styles.messageContent}>
                                        <div className={styles.messageHeader}>
                                            <h3 className={styles.authorName}>{msg.firstName} {msg.lastName}</h3>
                                            <span className={styles.messageDate}>{msg.createdAt}</span>
                                        </div>
                                        <p className={styles.messageBody}>// {msg.message}</p>
                                    </div>
                                </article>
                            );
                        })}

                        {dbMessages.length === 0 && (
                            <p className={styles.subtitle} style={{ textAlign: 'center' }}>// Žádné zprávy v databázi.</p>
                        )}
                    </div>
                </section>

            </div>
        </main>
    );
}